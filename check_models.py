import google.generativeai as genAI
import sys

api_key = sys.argv[1] if len(sys.argv) > 1 else ""

if not api_key:
    print("Error: No API Key provided")
    sys.exit(1)

try:
    genAI.configure(api_key=api_key)
    print("--- AVAILABLE MODELS FOR YOUR KEY ---")
    for m in genAI.list_models():
        if 'generateContent' in m.supported_generation_methods:
            print(f"Name: {m.name}")
except Exception as e:
    print(f"Error: {e}")
