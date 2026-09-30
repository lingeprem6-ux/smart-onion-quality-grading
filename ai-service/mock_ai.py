"""
ONIONIQ - Python Mock AI Service Fallback
Provides deterministic computer vision analysis results for SIH 2026 prototype.
"""

def run_mock_detection(preset_id="preset1"):
    if preset_id == "preset2":
        return {
            "service_type": "Prototype Mock AI Pipeline",
            "is_mock": True,
            "notice": "PROTOTYPE AI ANALYSIS — Mock model results for SIH 2026 demonstration.",
            "total_detected": 100,
            "counts": {
                "healthy": 48,
                "damaged": 18,
                "rotten": 16,
                "sprouted": 10,
                "undersized": 8
            },
            "percentages": {
                "healthy": 48.0,
                "damaged": 18.0,
                "rotten": 16.0,
                "sprouted": 10.0,
                "undersized": 8.0
            }
        }
    
    return {
        "service_type": "Prototype Mock AI Pipeline",
        "is_mock": True,
        "notice": "PROTOTYPE AI ANALYSIS — Mock model results for SIH 2026 demonstration.",
        "total_detected": 100,
        "counts": {
            "healthy": 82,
            "damaged": 7,
            "rotten": 4,
            "sprouted": 3,
            "undersized": 4
        },
        "percentages": {
            "healthy": 82.0,
            "damaged": 7.0,
            "rotten": 4.0,
            "sprouted": 3.0,
            "undersized": 4.0
        }
    }
