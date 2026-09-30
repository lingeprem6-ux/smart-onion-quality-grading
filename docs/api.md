# ONIONIQ REST API Specification

**Version**: 2.1.0  
**Base URL**: `/api`  

---

## Auth Endpoints

### 1. User Login
- **Endpoint**: `POST /api/auth/login`
- **Request Body**:
  ```json
  {
    "email": "inspector@onioniq.demo",
    "password": "demo",
    "role": "INSPECTOR"
  }
  ```
- **Response (200 OK)**:
  ```json
  {
    "success": true,
    "user": {
      "id": "USR-INSP-101",
      "name": "Rajesh Kumar",
      "email": "inspector@onioniq.demo",
      "role": "INSPECTOR",
      "centerId": "CTR-KOL-01"
    },
    "token": "jwt-token-string"
  }
  ```

---

## Inspection Endpoints

### 2. List All Inspections
- **Endpoint**: `GET /api/inspections`
- **Response (200 OK)**: Array of inspection batch objects.

### 3. Create New Inspection Batch
- **Endpoint**: `POST /api/inspections`
- **Request Body**:
  ```json
  {
    "centerId": "CTR-KOL-01",
    "centerName": "Kolhapur Procurement Center",
    "inspectorName": "Rajesh Kumar",
    "farmerId": "FARM-MH-9482"
  }
  ```
- **Response (201 Created)**: Created batch object with auto-generated `batchId` (e.g. `ON-2026-0089`).

### 4. Run AI Analysis on Batch
- **Endpoint**: `POST /api/inspections/:id/analyze`
- **Request Body**:
  ```json
  {
    "demoPreset": "preset1"
  }
  ```
- **Response (200 OK)**:
  ```json
  {
    "success": true,
    "batchId": "ON-2026-0089",
    "serviceType": "Prototype Mock AI Pipeline",
    "results": {
      "totalSample": 100,
      "healthy": 82,
      "damaged": 7,
      "rotten": 4,
      "sprouted": 3,
      "undersized": 4
    }
  }
  ```

### 5. Verify & Confirm Inspection
- **Endpoint**: `POST /api/inspections/:id/verify`
- **Request Body**:
  ```json
  {
    "counts": {
      "healthy": 82,
      "damaged": 7,
      "rotten": 4,
      "sprouted": 3,
      "undersized": 4
    },
    "isModified": false
  }
  ```
- **Response (200 OK)**: Updated batch with `status: "VERIFIED"`.

---

## Admin Analytics Endpoints

### 6. Get Central Analytics
- **Endpoint**: `GET /api/dashboard/analytics`
- **Response (200 OK)**: Aggregate statistics for procurement centers.
