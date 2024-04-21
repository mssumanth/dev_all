# Simple Document for API Generation and chaining them with Upstage Full-stack LLM


## Description

> Try changing input documents and questions!

- Input:
    - Document: [CloudTranslation.html](https://cloud.google.com/translate/docs/reference/rest)
    - Question: "Can you create the complete end to end go lang based code to \
    make a function call to detectLanguage API"
- Output: Grounded answer: The corresponding go code(Output might vary)

## Run

``` bash
git clone https://github.com/mssumanth/dev_all.git dev_all
cd dev_all
pip install openai requests
python run.py
```

