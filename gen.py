from together import InferenceAPI

inference_api = InferenceAPI('1a96012b2ddce9f05f6c6ab817fce27e983c896a4af95214aabdd3ea1a383dad')
weather_data = inference_api.get_weather_data('San Francisco')

temperature = weather_data['current']['temp']
print(f'The current temperature is {temperature}deg. C')

humidity = weather_data['current']['humidity']
print(f'The current humidity is {humidity}%')


import requests

url = "https://api.together.xyz/inference"

payload = {
    "model": "mistralai/Mixtral-8x7B-Instruct-v0.1",
    "prompt": "<s>[INST] What is the capital of France? [/INST]",
    "max_tokens": 512,
    "stop": ["</s>", "[/INST]"],
    "temperature": 0.7,
    "top_p": 0.7,
    "top_k": 50,
    "repetition_penalty": 1,
    "n": 1
}
headers = {
    "accept": "application/json",
    "content-type": "application/json",
    "Authorization": "Bearer 1a96012b2ddce9f05f6c6ab817fce27e983c896a4af95214aabdd3ea1a383dad"
}

response = requests.post(url, json=payload, headers=headers)

print(response.text)