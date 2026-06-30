import json

transcript_path = r"C:\Users\Trungvt\.gemini\antigravity-ide\brain\8426b1a3-7204-42b6-8551-975459fe710f\.system_generated\logs\transcript.jsonl"

with open(transcript_path, "r", encoding="utf-8") as f:
    for line in f:
        try:
            data = json.loads(line)
            if data.get("step_index") == 831:
                print(data["content"])
                break
        except Exception as e:
            pass
