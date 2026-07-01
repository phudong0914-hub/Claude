import urllib.request
import urllib.parse
import json
from pathlib import Path

SUPABASE_URL = "https://jnqmfghlnyvrlqiepfac.supabase.co"
SUPABASE_ANON_KEY = "sb_publishable_VZRfLai9Ee1BauvY8m_Ojg_0nLqWZhV"
TEXT_DIR = Path("ocr_text_pages")

def sync_lessons():
    print("Starting direct Supabase sync...")
    
    headers = {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': f'Bearer {SUPABASE_ANON_KEY}',
        'Prefer': 'resolution=merge-duplicates' # Allows upsert on conflict
    }

    success_count = 0
    fail_count = 0

    for index in range(1, 56):
        lesson_id = f"{index:02}"
        file_path = TEXT_DIR / f"page_{index:03}.txt"
        
        if not file_path.exists():
            continue
            
        text = file_path.read_text(encoding="utf-8").strip()
        marker = f"--- Trang {index} ---"
        if text.startswith(marker):
            text = text[len(marker):].strip()

        payload = {
            "lesson_id": lesson_id,
            "ocr_content": text
        }
        
        data = json.dumps(payload).encode('utf-8')
        # Supabase REST API endpoint for Upsert is POST with Prefer headers
        url = f"{SUPABASE_URL}/rest/v1/premium_lessons"
        
        req = urllib.request.Request(
            url,
            data=data,
            headers=headers,
            method='POST'
        )
        
        try:
            with urllib.request.urlopen(req) as response:
                success_count += 1
                print(f"Synced lesson {lesson_id} successfully")
        except urllib.error.HTTPError as e:
            fail_count += 1
            print(f"Failed to sync lesson {lesson_id}: HTTP {e.status} - {e.read().decode('utf-8')}")
            # If the first one fails due to RLS, stop and report so we don't spam
            if fail_count == 1:
                print("Stopping sync: It seems write access is restricted on this table.")
                break
        except Exception as e:
            fail_count += 1
            print(f"Error syncing {lesson_id}: {str(e)}")
            break

    print(f"Sync complete. Success: {success_count}, Failed: {fail_count}")

if __name__ == "__main__":
    sync_lessons()
