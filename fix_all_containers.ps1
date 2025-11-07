# Fix ALL containers to prevent horizontal scroll

$cssPath = "C:/developer/port-website/portfolio-react/src/App.css"
$content = Get-Content $cssPath -Raw -Encoding UTF8

# 1. Fix .header
$content = $content -replace '(\.header \{[^\}]*position: fixed;\s+width: 100%;)', '$1
            max-width: 100vw;
            box-sizing: border-box;'

# 2. Fix .container
$content = $content -replace '(\.container \{\s+max-width: 1280px;\s+margin: 0 auto;\s+padding: 0 24px;)', '$1
            width: 100%;
            box-sizing: border-box;'

# 3. Fix .nav-container
$content = $content -replace '(\.nav-container \{\s+max-width: 1200px;\s+margin: 0 auto;\s+padding: 30px 24px 0;)', '$1
            width: 100%;
            box-sizing: border-box;'

# 4. Fix .section
$content = $content -replace '(\.section \{\s+padding: 100px 0;\s+background: var\(--background\);\s+position: relative;)', '$1
            width: 100%;
            max-width: 100vw;
            box-sizing: border-box;
            overflow-x: hidden;'

# 5. Fix .nav
$content = $content -replace '(\.nav \{[^\}]*right: 0;)', '$1
            width: 100%;
            max-width: 100vw;
            box-sizing: border-box;'

Set-Content -Path $cssPath -Value $content -Encoding UTF8 -NoNewline

Write-Host "All containers fixed:"
Write-Host "1. .header - max-width: 100vw, box-sizing"
Write-Host "2. .container - width: 100%, box-sizing"
Write-Host "3. .nav-container - width: 100%, box-sizing"
Write-Host "4. .section - width: 100%, max-width: 100vw, overflow-x: hidden, box-sizing"
Write-Host "5. .nav - width: 100%, max-width: 100vw, box-sizing"
