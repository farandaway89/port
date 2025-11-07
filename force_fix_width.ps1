# Force fix all width issues with highest priority CSS rules

$cssPath = "C:/developer/port-website/portfolio-react/src/App.css"
$content = Get-Content $cssPath -Raw -Encoding UTF8

# Add universal width constraint at the very top
$forceRules = @"
        html {
            overflow-x: hidden !important;
            width: 100% !important;
            max-width: 100vw !important;
        }

        body {
            overflow-x: hidden !important;
            width: 100% !important;
            max-width: 100vw !important;
            margin: 0 !important;
            padding: 0 !important;
        }

        * {
            box-sizing: border-box !important;
        }

        .nav,
        .hero,
        .section,
        .header,
        .container,
        .nav-container,
        .hero-container,
        .hero-content,
        .contact-section,
        .footer {
            max-width: 100vw !important;
        }

"@

# Insert force rules right after :root
$content = $content -replace '(:root \{[^\}]+\})', "`$1`n`n$forceRules"

Set-Content -Path $cssPath -Value $content -Encoding UTF8 -NoNewline

Write-Host "Force-fixed width issues:"
Write-Host "1. html, body - overflow-x: hidden with !important"
Write-Host "2. All elements - box-sizing: border-box with !important"
Write-Host "3. All major containers - max-width: 100vw with !important"
