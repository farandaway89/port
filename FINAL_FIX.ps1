# FINAL FIX - Force all elements to stay within viewport

$cssPath = "C:/developer/port-website/portfolio-react/src/App.css"
$content = Get-Content $cssPath -Raw -Encoding UTF8

# Add global width constraint at the top (after :root)
$globalFix = @"

        html {
            overflow-x: hidden;
            width: 100%;
        }

        body {
            overflow-x: hidden;
            width: 100%;
            margin: 0;
            padding: 0;
        }

        * {
            max-width: 100%;
        }

        .hero-container,
        .container,
        .section,
        .nav-container {
            padding-left: 16px !important;
            padding-right: 16px !important;
        }
"@

$content = $content -replace '(:root \{[^\}]+\})', "`$1`n$globalFix"

# Fix hero-content gap
$content = $content -replace '(\.hero-content \{[^\}]*gap: )80px;', '${1}30px;'

# Fix all minmax
$content = $content -replace 'minmax\(300px, 1fr\)', 'minmax(250px, 1fr)'
$content = $content -replace 'minmax\(350px, 1fr\)', 'minmax(250px, 1fr)'
$content = $content -replace 'minmax\(400px, 1fr\)', 'minmax(250px, 1fr)'

# Add mobile text spacing
$content = $content -replace '(@media \(max-width: 480px\) \{)', @"
`$1
            .hero-badge {
                font-size: 0.7rem !important;
                padding: 6px 12px !important;
                margin-bottom: 20px !important;
            }

            .hero-title {
                font-size: 1.8rem !important;
                margin-bottom: 20px !important;
                line-height: 1.2 !important;
            }

            .hero-description {
                font-size: 0.85rem !important;
                line-height: 1.5 !important;
                margin-bottom: 20px !important;
            }

            .hero-content {
                padding: 12px !important;
                gap: 20px !important;
            }

"@

Set-Content -Path $cssPath -Value $content -Encoding UTF8 -NoNewline

Write-Host "FINAL FIX APPLIED!"
