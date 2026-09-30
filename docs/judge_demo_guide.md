# ONIONIQ — SIH 2026 Judge Demonstration Guide

**Project**: ONIONIQ (AI-Based Onion Quality Assessment & Grading System)  
**Organization**: Ministry of Consumer Affairs, Food & Public Distribution (DoCA)  

---

## ⏱️ 3-Minute Live Judging Presentation Script

### STEP 1: Problem Introduction & Login (30 seconds)
1. Open the ONIONIQ Prototype application (`start.bat` or `index.html`).
2. Highlight the problem: "Current onion procurement quality grading relies on subjective visual estimation by inspectors, leading to disputes, wastage, and unfair pricing for farmers."
3. Click **"Login as Inspector"** (`inspector@onioniq.demo`). Point out the official Department of Consumer Affairs (DoCA) UI design language.

### STEP 2: Initiate Inspection & Demo Preset (45 seconds)
1. Click **"+ Start New Inspection"**.
2. Notice the auto-generated Batch ID (`ON-2026-XXXX`) and pre-filled procurement center details (Kolhapur / Lasalgaon).
3. Click **"Continue to Image Capture"**.
4. Point out the judge convenience feature: Click **"Load Demo Sample 1 (High Quality Batch)"**.
5. Click **"Analyze Sample"**.

### STEP 3: Computer Vision Analysis & Canvas Overlay (60 seconds)
1. Watch the 6-stage AI analysis animation (Preprocessing -> Detection -> Defect Classification -> Size Estimation -> Quality Parameter Matrix).
2. Show the **Visual Detection Canvas**:
   - Point to the color-coded bounding boxes:
     - 🟢 **GREEN**: Healthy/Acceptable
     - 🔴 **RED**: Rotten / Neck Rot
     - 🟠 **ORANGE**: Mechanical Damage
     - 🟡 **YELLOW**: Sprouted
     - ⚪ **GREY**: Undersized
   - Note the transparent badge: **"Prototype AI Analysis"**.
3. Show the **Quality & Grading Engine**:
   - Point out how **Grade A (82%)** and **URS (18%)** are calculated using configurable DoCA procurement rules.

### STEP 4: Human Inspector Verification & Digital Certificate (45 seconds)
1. Click **"✎ Modify Result"** in the Inspector Verification section.
2. Demonstrate changing the rotten count from 4 to 3, and watch percentages recalculate instantly in real-time.
3. Click **"Confirm & Verify Result"**.
4. View the **Digital Quality Report**:
   - Highlight the embedded live **QR Code** that encodes the certificate verification URL.
   - Show the **"Print Report"** and **"Download PDF"** capabilities.

### STEP 5: Central Nodal Admin Analytics & Architecture (30 seconds)
1. Click **"Profile -> Switch Role to Admin"** or logout and login as `admin@onioniq.demo`.
2. Show the **Central Procurement Analytics Dashboard**:
   - Center-wise comparison map grid (Kolhapur, Lasalgaon, Nashik, Pune).
   - Defect distribution and Grade A vs URS trends over time.
3. Click **"View Architecture & Database Specs"** to present the database schema DDL, REST API specification, and Python YOLO integration path.
