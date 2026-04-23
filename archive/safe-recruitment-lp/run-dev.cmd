@echo off
cd /d "%~dp0"
set PORT=%1
if "%PORT%"=="" set PORT=4173
npm.cmd run dev -- --host 127.0.0.1 --port %PORT% 1>vite.log 2>vite.err.log
