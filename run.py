from openai import OpenAI  # openai>=1.2.0
import requests
from bs4 import BeautifulSoup
import os
from urllib.parse import urljoin, urlparse
import json
import configparser

config = configparser.ConfigParser()
config.read('config.cfg')

# Get the API key from the configuration file
docai_api_key = config['api']['docai_api_key']
solar_api_key = config['api']['solar_api_key']

client = OpenAI(
    api_key=solar_api_key,
    base_url="https://api.upstage.ai/v1/solar"
)


def analyze_layout(filename):
    url = "https://api.upstage.ai/v1/document-ai/layout-analyzer"
    headers = {"Authorization": f"Bearer {docai_api_key}"}
    files = {"document": open(filename, "rb")}
    response = requests.post(url, headers=headers, files=files)
    return response.json()["html"]

def ask_solar(context, question):
    response = client.chat.completions.create(
        model="solar-1-mini-chat",
        messages=[
          {
            "role": "user",
            "content": "Answer the following question:" + question
                + "by using the following context:" + context
          }
        ]
    )
    return response.choices[0].message.content

def check_groundedness(context, question, answer):
    response = client.chat.completions.create(
        model="solar-1-mini-answer-verification",
        messages=[
            {"role": "user", "content": context},
            {"role": "assistant", "content": question + answer}
        ]
    )
    return response.choices[0].message.content == "grounded"

def chunk_text(text, chunk_size):
    # Chunk the text into smaller segments
    return [text[i:i + chunk_size] for i in range(0, len(text), chunk_size)]

# Function that processes HTML content
def process_html_content(html_content):
    soup = BeautifulSoup(html_content, 'html.parser')
    # Example: Extract all paragraph text
    paragraphs = soup.find_all('p')
    for p in paragraphs:
        print(p.get_text())



# Read a file
def read_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()  # Read the entire content
    return content

context = read_file('TogetherChatCompletions.html')

chunk_size = 16000
chunks = chunk_text(context, chunk_size)


def chunked_api_call(question: str):
    for _ in range(3):
        canBreak = False
        for chunk in chunks:
            answer = ask_solar(chunk, question)
            grounded = check_groundedness(chunk, question, answer)
            if grounded:
                return answer

def api_call(context: str, question: str):
    for _ in range(3):
        answer = ask_solar(context, question)
        grounded = check_groundedness(context, question, answer)
        if grounded:
            return answer              

user_prompt = "Can you generate the complete end to end code in python to make an API\
call to Chat Completions API of Together. Please give me only the python code and let the logic\
be in a function called complete_chat"

def create_and_append_to_file(content: str, out_file="generated.py"):
    # Open in append mode, creating the file if it doesn't exist
    with open(out_file, "a", encoding="utf-8") as f:
        f.write(content)  # This line will be added to the end of the file

def overwrite_a_file(content: str, out_file="generated.py"):
    with open(out_file, "w", encoding="utf-8") as f:
        f.write(content)

def api_chain():
    generated_code = chunked_api_call(user_prompt)
    create_and_append_to_file(generated_code)
    print("Generated Code:")
    print("=======================================================================")
    print(generated_code)
    create_and_append_to_file(generated_code)

    
    context = read_file("generated.py")
    rectification_question = "Can you check this python based code and understand what it is doing step by step\
        and correct the code and modify it if necessary so that it does what it is supposed to do and return \
            only the final python code using ChatCompletions API of Together.AI over here"
    final_code = api_call(context, rectification_question)
    overwrite_a_file(final_code)

    print("=======================================================================")


api_chain()

def generate_documentation():
    context = read_file("run.py")
    doc_prompt = "Can you generate the complete end to end documentation on a high level\
based on the code in this file. Put everything into a file call documentation.txt"
    print("The document generated is:")
    print("===============================================================")
    doc = api_call(context, doc_prompt)
    print(doc)
    create_and_append_to_file(doc, "document.txt")

generate_documentation()





    