# ONIONIQ — AI-Based Onion Quality Assessment & Grading System

> **Smart India Hackathon (SIH) 2026 Web Prototype**  
> **Organization**: Ministry of Consumer Affairs, Food & Public Distribution  
> **Department**: Department of Consumer Affairs (DoCA)  
> **Theme**: Smart Automation  

---

## 📌 Project Overview

**ONIONIQ** is an AI-assisted computer vision quality assessment and standardized grading platform built for onion procurement centers across India (such as Lasalgaon, Kolhapur, Nashik, and Pune).

It removes subjectivity in quality grading by detecting individual onions, classifying visible defects (Healthy, Damaged, Rotten, Sprouted, Undersized), calculating Grade A vs URS (Un-reserved / Sub-standard) percentages using configurable rules, providing inspector verification workflows, generating QR-coded digital certificates, and aggregating center-wide analytics for central government nodal officers.

---

## 🚀 Quick Start Instructions

### Option 1: Double-Click Batch File (Recommended for Windows)
Double-click `start.bat` in the project root folder.  
This starts a lightweight local web server on `http://localhost:3000` and automatically opens the prototype in your default browser.

### Option 2: Directly Open `index.html`
Open `index.html` directly in Google Chrome, Microsoft Edge, or Firefox.

### Option 3: Standard Node / Express Backend (Optional)
```bash
cd backend
npm install
npm start
# Server runs on http://localhost:4000
```

---

## 🔑 Demo Credentials

| Role | Email | Password | Scope & Capabilities |
| :--- | :--- | :--- | :--- |
| **Inspector** | `inspector@onioniq.demo` | `demo` | Create batch, upload/load sample, run AI analysis, bounding box canvas review, inspector count verification, digital report & QR code generation. |
| **Admin** | `admin@onioniq.demo` | `demo` | View all center inspections, procurement-center analytics, defect trends, map view, grading rule configuration. |

---

## 📁 Repository Structure

```
/onioniq
├── index.html                   # Main Standalone Interactive Web Prototype
├── start.bat                    # One-click Windows Web Server & Launcher
├── server.ps1                   # Lightweight PowerShell HTTP Web Server
├── /src
│   ├── /components              # Modular UI Components (Canvas, Reports, Analytics)
│   ├── /services                # AIService, GradingEngine, LocalStorage API Layer
│   └── /data                    # Mock Batches, Demo Presets, Relational Schema
├── /backend                     # Express.js REST API Server Reference
├── /database                    # PostgreSQL schema.sql and seed.sql DDL scripts
├── /ai-service                  # Python FastAPI + YOLOv8 Microservice Blueprint
└── /docs                        # System Architecture, REST API Specs & Judge Demo Guide
```

---

## 🛠️ Technology Stack & Key Highlights

- **Frontend**: Responsive Single-Page Application (HTML5, Tailwind CSS, Canvas 2D Engine, Chart.js, QRCode.js, HTML2PDF engine).
- **Backend Service**: Express.js REST API specification (`server.js`, `routes.js`).
- **Database Architecture**: PostgreSQL relational DDL (`schema.sql`) covering `users`, `inspection_batches`, `sample_images`, `ai_results`, `grading_results`, `inspector_verifications`, and `reports`.
- **AI Microservice**: Python FastAPI + OpenCV + YOLOv8 detection architecture (`app.py`, `yolo_detector.py`).
