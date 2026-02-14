# Push Valentine project to GitHub
# Run this in PowerShell and complete the browser login when prompted

Write-Host "Step 1: Authenticating with GitHub..." -ForegroundColor Cyan
gh auth login --web --git-protocol https

if ($LASTEXITCODE -eq 0) {
    Write-Host "`nStep 2: Pushing to GitHub..." -ForegroundColor Cyan
    git push -u origin main
    if ($LASTEXITCODE -eq 0) {
        Write-Host "`nSuccess! Your project is now on GitHub." -ForegroundColor Green
        Write-Host "https://github.com/Prasenjit-Sahoo18/valentine-sp" -ForegroundColor Green
    }
} else {
    Write-Host "Authentication failed or was cancelled." -ForegroundColor Red
}
