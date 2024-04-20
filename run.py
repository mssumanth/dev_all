from openai import OpenAI  # openai>=1.2.0
import requests
from bs4 import BeautifulSoup

docai_api_key = "hack-with-upstage-docai-0420"
solar_api_key = "hack-with-upstage-solar-0420"

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

# context = read_file('MoneyLionAPI.html') 
context = read_file('CloudTranslation.html')

chunk_size = 16000
chunks = chunk_text(context, chunk_size)

# context = analyze_layout("MoneyLionAPI.pdf")

# question = "Can you tell me the details of the featuredFinancialInstitutions API?"
# question = "Can you create go lang based code using the rateTables API to get or request for all rate Tables from MoneyLion API?"
#question = "Can you create the complete end to end go lang based code to make a call to leads API and get information related to leads from MoneyLion API?"
# question = "Can you create the complete end to end go lang based code to make a call to leadEvents API and get information related to leadEvents from MoneyLion API? Please give me the go code only."
# question = "Can you create the complete end to end go lang based code to make a call to featuredFinancialInstitutions API and get information related to featuredFinancialInstitutions from MoneyLion API? Please give me the go code only."


def api_call(question: str):
    for _ in range(3):
        canBreak = False
        for chunk in chunks:
            answer = ask_solar(chunk, question)
            grounded = check_groundedness(chunk, question, answer)
            if grounded:
                return answer
                

detectLanguageQuestion = "Can you create the complete end to end go lang based code to \
    make a function call to detectLanguage API and get information related to Language \
    from Google CloudTranslation API? Please give me the go code only and let the logic \
    be in a function called detectLanguage."

def create_and_append_to_file(content: str):
    # Open in append mode, creating the file if it doesn't exist
    with open("goRun.go", "a", encoding="utf-8") as f:
        f.write(content)  # This line will be added to the end of the file

def overwrite_a_file(content: str):
    with open("goRun.go", "w", encoding="utf-8") as f:
        f.write(content)

def api_chain():
    first_code = api_call(detectLanguageQuestion)
    create_and_append_to_file(first_code)
    print(f"first_code: {first_code}")
    print("================================================================================")
    translateLanguageQuestion = f"Can you use the result generated in {first_code}\
        and use the result from that function call as the source language and create another complete end to end\
        go lang based function code to make a call to translateLanguage API to translate to Korean language\
        (i.e. target language code would be: ko)\
        and print out the text in the translated Language format by using the Google CloudTranslation API?\
        Let this function be called translateLaguage and let it take two parameters - one is the source language\
        from the previous function call as mentioned in {first_code} and the other target language which in this case is ko\
        Please give me the go code only."
    final_code = api_call(translateLanguageQuestion)
    print(f"next code: {final_code}")
    create_and_append_to_file(final_code)

    print("=======================================================================")
    context = read_file("goRun.go")
    final_question = "Can you check this go lang based code and understand what it is doing step by step\
        and correct it and modify it if necessary so that it does what it is supposed to do and return \
            only the go code part over here"
    for _ in range(3):
        answer = ask_solar(context, final_question)
        grounded = check_groundedness(context, final_question, answer)
        print(f"final_ans: {answer}")
        if grounded:
            overwrite_a_file(answer)
            return


api_chain()


    