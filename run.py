from openai import OpenAI  # openai>=1.2.0
import requests

solar_api_key = "SOLAR_API_KEY"
docai_api_key = "DOCAI_API_KEY"

client = OpenAI(
    api_key=solar_api_key,
    base_url="https://api.upstage.ai/v1/solar"
)

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

def analyze_layout(filename):
    url = "https://api.upstage.ai/v1/document-ai/layout-analyzer"
    headers = {"Authorization": f"Bearer {docai_api_key}"}
    files = {"document": open(filename, "rb")}
    response = requests.post(url, headers=headers, files=files)
    return response.json()["html"]


context = analyze_layout("upstage.png")
question = "When was Upstage founded?"
response = ask_solar(context, question)
print(response)
