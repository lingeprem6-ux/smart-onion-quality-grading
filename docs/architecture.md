# ONIONIQ System Architecture & AI Integration Blueprint

**Department of Consumer Affairs (DoCA)**  
**Ministry of Consumer Affairs, Food & Public Distribution**  
**Smart India Hackathon (SIH) 2026**  

---

## 1. System Overview

ONIONIQ addresses the problem of subjective onion quality assessment at government procurement centers by providing an end-to-end AI-assisted inspection platform.

### Core Architecture Layers

```
+-----------------------------------------------------------------------+
|                             USER INTERFACE                            |
|             (React / Modern Single-Page Application)                  |
|    Inspector Workflow  |  Admin Analytics  |  Digital Certificate     |
+-----------------------------------------------------------------------+
                                   |
                                   v  (REST API calls)
+-----------------------------------------------------------------------+
|                          API GATEWAY / NODE BACKEND                   |
|                  (Express.js / REST Service Router)                   |
+-----------------------------------------------------------------------+
                                   |
           +-----------------------+-----------------------+
           |                                               |
           v                                               v
+------------------------------------+   +------------------------------+
|        AI ANALYSIS MICROSERVICE    |   |     GRADING & RULE ENGINE    |
| (Current: MockAIService Prototype) |   |  (Configurable DoCA Grade A  |
| (Future: Python FastAPI + YOLOv8)  |   |     vs URS Specifications)   |
+------------------------------------+   +------------------------------+
           |                                               |
           +-----------------------+-----------------------+
                                   |
                                   v
+-----------------------------------------------------------------------+
|                             DATABASE LAYER                            |
|               (PostgreSQL / Relational Data Model)                    |
+-----------------------------------------------------------------------+
```

---

## 2. Replacing Mock AI with Real YOLO / OpenCV Model

The prototype uses a modular `AIService` interface (`/src/services/aiService.js`) designed for plug-and-play replacement:

### Current Flow (Prototype):
`UI -> AIService.analyzeImage() -> MockAIService -> Simulated Defect Bounding Boxes`

### Production Flow (Real Model Integration):
1. **Train YOLOv8 Object Detection Model**:
   - Annotate onion dataset with 5 target classes: `HEALTHY`, `DAMAGED`, `ROTTEN`, `SPROUTED`, `UNDERSIZED`.
   - Export trained weights to `ai-service/weights/onioniq_yolov8x.pt`.

2. **Configure Python AI Microservice**:
   - In `ai-service/app.py`, set environment variable `USE_REAL_YOLO=true`.
   - The FastAPI endpoint `POST /api/v1/analyze` will process incoming images through `YOLOOnionDetector`.

3. **Update Frontend API Endpoint**:
   - Update `aiService.js` to send HTTP `POST` requests to `http://localhost:5000/api/v1/analyze`.

---

## 3. Product Terminology & Safety Protocols

- **"AI-Assisted Assessment"**: Operates as a decision-support tool for human procurement inspectors.
- **"Inspector Verification"**: Mandatory human-in-the-loop step where the inspector reviews and confirms or corrects defect counts before generating official certificates.
- **"Digital Traceability"**: Cryptographic QR code verification linking procurement batches to official central DoCA audit servers.
