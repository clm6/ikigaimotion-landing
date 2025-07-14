@echo off
echo Setting up Ikigai Motion Landing Page...
echo.

echo Installing dependencies...
call npm install

echo.
echo Starting development server...
echo The site will be available at http://localhost:3000
echo.
call npm run dev

pause 