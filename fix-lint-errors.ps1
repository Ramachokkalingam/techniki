# PowerShell script to fix all ESLint errors in the Techniki project

Write-Host "🔧 Fixing ESLint errors..." -ForegroundColor Cyan

# Function to escape apostrophes for React
function Fix-Apostrophes {
    param($filePath)
    $content = Get-Content $filePath -Raw -Encoding UTF8
    $content = $content -replace "tomorrow's", "tomorrow&apos;s"
    $content = $content -replace "India's", "India&apos;s"
    $content = $content -replace "we're", "we&apos;re"
    $content = $content -replace "We're", "We&apos;re"
    $content = $content -replace "Don't", "Don&apos;t"
    $content = $content -replace "Can't", "Can&apos;t"
    $content = $content -replace "Let's", "Let&apos;s"
    $content = $content -replace "you're", "you&apos;re"
    $content = $content -replace "Techनिकी's", "Techनिकी&apos;s"
    $content | Set-Content $filePath -Encoding UTF8 -NoNewline
    Write-Host "✅ Fixed apostrophes in $filePath" -ForegroundColor Green
}

# Fix all files with apostrophe issues
Write-Host "`n📝 Fixing apostrophes in TSX files..." -ForegroundColor Yellow
Fix-Apostrophes "src\app\page.tsx"
Fix-Apostrophes "src\app\events\page.tsx"
Fix-Apostrophes "src\app\team\page.tsx"
Fix-Apostrophes "src\app\events\ctrl-think\page.tsx"

Write-Host "`n✅ All ESLint errors fixed!" -ForegroundColor Green
Write-Host "Run npm run build to verify." -ForegroundColor Cyan
