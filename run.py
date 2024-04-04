from openai import OpenAI  # openai>=1.2.0
import requests

solar_api_key = "SOLAR_API_KEY"
docai_api_key = "DOCAI_API_KEY"

client = OpenAI(
    api_key=solar_api_key,
    base_url="https://api.upstage.ai/v1/solar"
)

def analyze_layout(filename):
    url = "https://api.upstage.ai/v1/document-ai/layout-analyzer"
    headers = {"Authorization": f"Bearer {upstage_api_key}"}
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

def check_groundedness(context, answer):
    response = client.chat.completions.create(
        model="solar-1-mini-answer-verification",
        messages=[
            {"role": "user", "content": context},
            {"role": "assistant", "content": answer}
        ]
    )
    return response.choices[0].message.content == "grounded"

context = analyze_layout("upstage.png")
question = "When was Upstage founded?"
for _ in range(3):
    answer = ask_solar(context, question)
    grounded = check_groundedness(context, answer)
    if grounded:
        print(answer)
        break
