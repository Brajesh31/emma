# 🤖 Emma – Smart Python-Based Personal Assistant

Emma is a command-line, AI-powered personal assistant built using Python. Designed to simplify daily digital tasks, Emma can respond to both voice and text inputs to perform operations like checking weather, managing files, sending emails, and even having small talk — all from your terminal.

---

## 🚀 Features

- 🎤 Voice-controlled commands with fallback to text input
- 🗣️ Text-to-Speech responses using `pyttsx3`
- 📚 Wikipedia summary search
- ⛅ Real-time weather info via OpenWeatherMap API
- 📧 Send emails via SMTP
- 🗓️ Time & Date queries
- 🌍 Translate phrases using Google Translate API
- 📁 Open files, folders, and applications
- 📅 Google Calendar integration *(Optional)*
- 💬 Optional ChatGPT/transformers integration for small talk
- 📦 Modular & expandable structure
- 🛠️ Works on Windows, macOS, and Linux

---

## 🛠️ Tech Stack

| Layer         | Tools & Libraries                                   |
|---------------|------------------------------------------------------|
| Programming   | Python 3.x                                           |
| Voice Input   | `speech_recognition`, `pyaudio`                      |
| Speech Output | `pyttsx3`, `gTTS` *(optional)*                       |
| APIs          | OpenWeatherMap, Wikipedia, Google Translate, SMTP    |
| AI/NLP        | `transformers`, `spaCy`, `openai` *(optional)*       |
| Automation    | `os`, `subprocess`, `webbrowser`, `smtplib`          |

---

## 📁 Project Structure

emma-assistant/
│
├── main.py # Main controller file
├── modules/ # All feature modules
│ ├── voice_input.py
│ ├── voice_output.py
│ ├── intent_handler.py
│ ├── weather.py
│ ├── wikipedia_fetcher.py
│ ├── email_sender.py
│ ├── translator.py
│ ├── file_opener.py
│ └── chatbot.py
│
├── data/
│ ├── config.json # API keys & preferences
│ └── logs/ # Task logs
│
├── requirements.txt
└── README.md

---

## 🧪 Setup Instructions

### ✅ Prerequisites

- Python 3.8+
- Internet connection
- Microphone enabled (for voice features)
- Valid Gmail account (for email feature)

---

### ⚙️ Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/emma-assistant.git
cd emma-assistant
Install dependencies

bash
Copy
Edit
pip install -r requirements.txt
Setup Configuration

Create data/config.json and add your keys and preferences:

json
Copy
Edit
{
  "OPENWEATHER_API_KEY": "your_openweather_api_key",
  "GMAIL_USER": "your_email@gmail.com",
  "GMAIL_APP_PASSWORD": "your_app_password",
  "PREFERRED_CITY": "your_city"
}
Run the Assistant

bash
Copy
Edit
python main.py
Emma will greet you and start listening for commands.

🎯 Sample Commands You Can Try
“What’s the weather today?”

“Send an email to John”

“Tell me about Python”

“Translate ‘hello’ to French”

“What time is it?”

“Open Notepad”

✨ Future Improvements
Wake-word detection (“Hey Emma”)

GUI version with Tkinter/Flask

WhatsApp & Telegram integration

Spotify/Youtube playback

OCR and Image-to-Text feature

Face Recognition for login

👨‍💻 About the Developer
Brajesh Kumar
Computer Science & Engineering Student | Full-Stack Developer | AI Enthusiast
