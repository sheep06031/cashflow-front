<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:b0e13d,100:614fe8&height=180&text=Cashflow&animation=&fontColor=ffffff&fontSize=60" />
  <h3>A personal finance tracker powered by AI 🚀</h3>
</div>

---

## 📌 Overview
**Cashflow** is a web-based personal finance tracker that helps you manage your **income, expenses, and savings**.  
Unlike traditional budget apps, Cashflow leverages **AI-driven insights** to analyze your financial behavior and provide personalized feedback:
- What changed compared to last month
- Your spending patterns
- Actionable tips to improve your financial health

---

## ✨  Features
- 📒 **Transaction Management** – Log income, expenses, and savings with categories  
- 📊 **AI Feedback** – Get monthly comparisons and personalized recommendations  
- 🔎 **Spending Insights** – Detect habits and track long-term trends  
- 🎯 **Goal Tracking** – Set savings goals and measure your progress  

---

## 📆 Project Duration

- 2025.07.30 ~ 2025.09.10

---

## 🎯 Project Purpose
With the rapid development of AI, many modern websites are introducing AI-powered features as add-ons. The main purpose of this project was to experiment with building a web application that integrates AI using external APIs. Through this project, I aimed to explore how AI can enhance user experience by providing personalized financial insights.

---

## 🛠️ Tech Stack
**Frontend:** React, Vite, Emotion  
**Backend:** Spring Boot, MySQL, Redis, JWT  
**Deployment:** Docker, AWS EC2  

---

## 🏗️ Architecture
- **Frontend** → React app for user interaction  
- **Backend** → Spring Boot REST API with JWT authentication  
- **Database** → MySQL for persistent storage  
- **Cache** → Redis for email verification & sessions  
- **Deployment** → Dockerized microservices on AWS EC2  

---

## 🖥️ Preview

### Home Page
- Provides a clear summary of Cashflow Web

<img width="1440" height="812" alt="Image" src="https://github.com/user-attachments/assets/affc81f0-3064-47a6-857d-b74210d1f841" />

## Sign in
<img width="476" height="347" alt="Image" src="https://github.com/user-attachments/assets/21095ff3-5a3c-4fe5-9711-ce6b784c860d" />

## Sign up
- Sign up using the code sent to your email

<img width="461" height="431" alt="Image" src="https://github.com/user-attachments/assets/5f3da0f9-5548-4c32-95b2-4438ccb2766c" />
<img width="422" height="320" alt="Image" src="https://github.com/user-attachments/assets/6988f863-f432-41b7-afe2-69cfdd97c510" />

## Overview
- Provides a clear summary of your monthly income, expenses, and savings.
- Displays balance trends with interactive charts.
- Generate AI Feedback for seleceted month transactions.

<img width="1440" height="813" alt="Image" src="https://github.com/user-attachments/assets/64b80e12-fc58-4485-91ca-80988a7b7ded" />
<img width="1440" height="815" alt="Image" src="https://github.com/user-attachments/assets/48126a37-28eb-4ecd-83d9-6adc91dafe45" />

## Transactions
- Add, edit, and delete transactions.
- Categorize spending (e.g., Food, Transport, Savings).

<img width="1435" height="811" alt="Image" src="https://github.com/user-attachments/assets/37465410-0473-4f8f-ad91-a5e530638b3a" />

## Feedbacks
- Displays all previously generated AI feedback in one place.

<img width="1440" height="810" alt="Image" src="https://github.com/user-attachments/assets/a7af3354-67b0-4c13-9321-f75c15c0848b" />

## Account services

<img width="804" height="458" alt="Image" src="https://github.com/user-attachments/assets/68835ea9-510e-494f-833a-a8a61540a624" />
<img width="720" height="428" alt="Image" src="https://github.com/user-attachments/assets/e359a119-f969-48a6-80b5-84ba09ba7be4" />

---
# 📝 Reflections

During the project, many of the ideas I initially planned changed along the way, which meant I had to repeatedly modify the code and restructure parts of the system. If I had more prior experience, I could have finalized the architecture earlier and minimized these changes. I realized that my lack of experience made the process more challenging.

In particular, Spring Boot Security became a major obstacle. I still haven’t fully adapted to it, and I feel that I need to continue studying this area to gain more confidence.

On the CSS side, I initially used fixed pixel values for element sizes. Later, I understood that this approach ignored different user environments. Since my development environment was a MacBook, I assumed the layout looked fine, but I didn’t account for larger or smaller screens. In future projects, I plan to use relative units like REM to make the design more responsive and user-friendly.

Another challenge was working with Docker. Since I had not studied Docker in detail before, I experienced many trials and errors. Running the project locally versus deploying it with Docker on AWS EC2 required more adjustments in the code than I had expected. I realized that I need to study Docker more thoroughly to handle deployment more effectively in future projects.

---
