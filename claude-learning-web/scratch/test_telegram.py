import sys
import urllib.request
import urllib.parse
import json

BOT_TOKEN = "8961104144:AAF4NiZwJLta8QTsv-wkWD2XZoKiD9v010c"
CHAT_ID = "1790844371"

def test_telegram():
    url = f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage"
    payload = {
        "chat_id": CHAT_ID,
        "text": "🤖 Chào bạn! Đây là tin nhắn thử nghiệm từ hệ thống Claude Mastery Admin Bot. Kết nối đã thành công!",
        "parse_mode": "Markdown"
    }
    
    data = json.dumps(payload).encode('utf-8')
    req = urllib.request.Request(
        url, 
        data=data, 
        headers={'Content-Type': 'application/json'}
    )
    
    try:
        with urllib.request.urlopen(req) as response:
            res_body = response.read().decode('utf-8')
            print("SUCCESS:", res_body)
    except urllib.error.HTTPError as e:
        print("ERROR:", str(e))
        print("DETAILS:", e.read().decode('utf-8'))
    except Exception as e:
        print("ERROR:", str(e))

if __name__ == "__main__":
    test_telegram()
