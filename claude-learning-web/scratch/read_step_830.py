import json

transcript_path = r"C:\Users\Trungvt\.gemini\antigravity-ide\brain\8426b1a3-7204-42b6-8551-975459fe710f\.system_generated\logs\transcript.jsonl"

with open(transcript_path, "r", encoding="utf-8") as f:
    lines = f.readlines()

for i in range(818, 827):
    try:
        data = json.loads(lines[i])
        print(f"=== Line {i+1} (step {data.get('step_index')}) ===")
        print(json.dumps(data, indent=2, ensure_ascii=False)[:3000])
    except Exception as e:
        print(f"Error reading line {i+1}: {e}")
