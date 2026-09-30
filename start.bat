@echo off
title ONIONIQ - SIH 2026 Web Prototype Launcher
echo ====================================================
echo   Launching ONIONIQ Web Prototype...
echo   Ministry of Consumer Affairs, Food & Public Distribution
echo ====================================================
powershell -ExecutionPolicy Bypass -File "%~dp0server.ps1"
pause
