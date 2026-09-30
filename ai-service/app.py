"""
ONIONIQ - AI Computer Vision Service (FastAPI)
Ministry of Consumer Affairs, Food & Public Distribution (DoCA)

This service handles image preprocessing, onion instance detection (YOLOv8),
defect classification, and diameter measurement.
"""

from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import uvicorn
import os

from mock_ai import run_mock_detection
from yolo_detector import YOLOOnionDetector

app = FastAPI(
    title="OnionIQ AI Quality Assessment Microservice",
    description="Computer Vision Service for Onion Bounding Box Detection and Defect Classification",
    version="2.1.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Global model state
USE_REAL_YOLO = os.getenv("USE_REAL_YOLO", "false").lower() == "true"
yolo_detector = None

@app.on_event("startup")
def load_models():
    global yolo_detector
    if USE_REAL_YOLO:
        print("[AI-SERVICE] Initializing YOLOv8 Onion Detection Weights...")
        try:
            yolo_detector = YOLOOnionDetector(model_path="weights/onioniq_yolov8x.pt")
            print("[AI-SERVICE] YOLOv8 Model loaded successfully.")
        except Exception as e:
            print(f"[AI-SERVICE] Failed to load YOLO weights ({e}). Falling back to Mock AI.")

@app.get("/health")
def health_check():
    return {
        "status": "healthy",
        "service": "OnionIQ AI Microservice",
        "mode": "REAL_YOLO" if (USE_REAL_YOLO and yolo_detector) else "MOCK_AI_PROTOTYPE"
    }

class AnalysisRequest(BaseModel):
    image_url: str = None
    demo_preset_id: str = "preset1"

@app.post("/api/v1/analyze")
async def analyze_onion_sample(request: AnalysisRequest):
    """
    Primary endpoint for onion sample analysis.
    If real model weights are available, executes YOLOv8 pipeline; otherwise uses Mock AI engine.
    """
    if USE_REAL_YOLO and yolo_detector:
        return yolo_detector.predict(request.image_url)
    
    # Prototype Mock AI Fallback
    return run_mock_detection(preset_id=request.demo_preset_id)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=5000)
