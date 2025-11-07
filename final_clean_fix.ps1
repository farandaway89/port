# Final clean fix - minimal changes only

$cssPath = "C:/developer/port-website/portfolio-react/src/App.css"
$content = Get-Content $cssPath -Raw -Encoding UTF8

# 1. Add body overflow-x: hidden (most important!)
$content = $content -replace '(body \{[^\}]*letter-spacing: -0\.01em;)', '$1
            overflow-x: hidden;'

# 2. Fix .hero-content gap (80px -> 50px)
$content = $content -replace '(\.hero-content \{[^\}]*gap: )80px;', '${1}50px;'

# 3. Fix ALL grid minmax values to 280px
$content = $content -replace 'minmax\(300px, 1fr\)', 'minmax(280px, 1fr)'
$content = $content -replace 'minmax\(350px, 1fr\)', 'minmax(280px, 1fr)'
$content = $content -replace 'minmax\(400px, 1fr\)', 'minmax(280px, 1fr)'

# 4. Add mobile hero spacing fix
$mobileFix = @'

        @media (max-width: 480px) {
            .hero-badge {
                font-size: 0.75rem;
                padding: 8px 16px;
                margin-bottom: 16px;
            }

            .hero-title {
                font-size: 2rem;
                margin-bottom: 16px;
            }

            .hero-description {
                font-size: 0.9rem;
                line-height: 1.5;
            }
        }
'@

# Insert before the last closing brace
$content = $content -replace '(\s+)$', "$mobileFix`n`$1"

Set-Content -Path $cssPath -Value $content -Encoding UTF8 -NoNewline

Write-Host "Applied clean fixes:"
Write-Host "1. body overflow-x: hidden"
Write-Host "2. hero-content gap: 80px -> 50px"
Write-Host "3. All grid minmax: -> 280px"
Write-Host "4. Mobile hero spacing"
