# 🧡 Ni-Swarth – AI-Powered Donation Platform

Ni-Swarth is a scalable, AI-integrated donation platform that connects **donors**, **NGOs**, and **volunteers** to reduce food and resource wastage through smarter, transparent, and real-time giving. It supports **both monetary and non-monetary donations** (e.g., food, clothes, medicine) and uses artificial intelligence for **legitimacy verification**, **donor-NGO matching**, and **impact tracking**.

---

## 🚀 Features

- 🔐 **Role-Based Onboarding** – Donor, NGO, Volunteer, Admin
- 🎁 **Item & Monetary Donations** – With image tagging and expiry detection
- 🧠 **AI Matching Engine** – Recommends NGOs based on urgency, location, and donation type
- ✅ **NGO Legitimacy Scoring** – AI-driven document checks and anomaly detection
- 🚚 **Logistics & Pickup Tracking** – Route optimization via Google Maps API
- 🌍 **Community Hub** – Forums, events, leaderboard, and gamification
- 📊 **Impact Dashboards** – For all roles to track contribution and success
- 🔒 **Secure Auth & 2FA** – JWT/session-based login system

---

## 🧱 Tech Stack

| Layer          | Tools / Frameworks                          |
|----------------|---------------------------------------------|
| Frontend       | ReactJS / Flutter                           |
| Backend        | Node.js + Express / Django                  |
| Database       | MongoDB / Firebase                          |
| AI/ML          | LLaMA2, OpenCLIP, Custom ML models (fraud, tagging) |
| Maps & Routing | Google Maps API                             |
| Payments       | Stripe / Razorpay                           |
| Design         | Figma, Whimsical (user flow), Helix AI Prototype |

---

## 🔄 Project Architecture

Ni-Swarth follows a **microservices-based architecture**, with each role (donor, NGO, volunteer, admin) interacting through clean APIs and separate services for:

- Authentication & Access Control  
- Donation Management  
- AI Processing Layer  
- Logistics/Volunteer Routing  
- Analytics & Community Features  

---

## 📦 Getting Started

```bash
# Clone the repository
git clone https://github.com/yourusername/ni-swarth.git

# Navigate into the project folder
cd ni-swarth

# Install dependencies (backend & frontend folders separately)
npm install

# Run the app
npm start
```

> 📝 Note: For Google Maps API or AI endpoints, set your API keys in `.env` files.

---

## 📽 Demo Video  
Watch the 5-minute demo ➡️ 

---

## 📌 Future Enhancements
- Blockchain-based donation transparency  
- Predictive ML models for seasonal NGO demands  
- AI voice interface for illiterate users in rural areas  
- Language support for Hindi & regional Indian languages  

---

## 🤝 Contributors  
- Samar Jamal 
- Harshita Pokhariya  
- Jigansa
- Kushagra Dobhal
- Shreya Bansal
- Lavanya Kapoor 

---

## 📄 License  
MIT License © 2025 Ni-Swarth Team

---
