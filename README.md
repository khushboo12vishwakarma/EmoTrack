# 🚀 EmoTrack – AI-Based Emotion Tracking & Mental Wellness System

EmoTrack is a full-stack web application that analyzes user emotions using AI and provides structured mental wellness support through tracking, recovery workflows, and therapist integration.

---

## 💡 Overview

EmoTrack goes beyond basic emotion detection by building a complete pipeline:
**multi-modal input → AI analysis → structured insights → recovery tracking → therapist support**

---

## ✨ Features

* 🎯 **Multi-Modal Input**

  * Accepts text, audio, and video input
  * Converts audio/video to text using speech recognition

* 🤖 **AI Emotion Analysis**

  * Uses DeepSeek LLM (via Ollama API)
  * Detects:

    * Emotion
    * Stress Level
    * Emotion Severity

* 📊 **Structured Insights**

  * Personalized Do’s and Don’ts
  * Journaling prompts
  * Motivational quotes
  * Breathing exercises & meditation suggestions

* 📅 **10-Day Recovery Tracker**

  * Automatically triggered for medium/high stress
  * Provides daily:

    * Tips
    * Relaxation music
    * Meditation content
    * Journaling prompts
  * Tracks user progress over time

* 🧑‍⚕️ **Therapist Support System**

  * Browse therapists
  * Book sessions (online/offline)
  * Chat and session history

* 🔐 **Authentication & Security**

  * JWT-based authentication
  * User session tracking

---

## 🛠️ Tech Stack

### Backend

* Python
* Django
* Django REST Framework

### Frontend

* React.js
* Tailwind CSS

### AI & Processing

* DeepSeek LLM (Ollama API)
* SpeechRecognition (Google Web Speech API)

### Database

* SQLite

### Authentication

* JWT (JSON Web Tokens)

---

## ⚙️ Installation & Setup

### 2. Backend setup

```
cd backend
pip install -r requirements.txt
python manage.py runserver
```

---

### 3. Frontend setup

```
cd frontend
npm install
npm start
```

---

## 🎯 Key Highlights

* Designed a **complete backend pipeline** for emotion analysis and recovery tracking
* Integrated **LLM-based AI analysis** with structured outputs
* Built scalable REST APIs for real-time interaction
* Combined **AI + user tracking + therapist system** in one platform

---


## 🤝 Contributing

Contributions are welcome. Feel free to fork the repository and submit a pull request.

---

⭐ If you found this project useful, consider giving it a star!
