@echo off
echo Synchronisation avec GitHub en cours...
git add .
git commit -m "Mise a jour automatique"
git push origin main
echo.
echo Mise a jour terminee !
pause
