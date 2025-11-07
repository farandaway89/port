# Fix spacing issues for PC and mobile

$cssPath = "C:/developer/port-website/portfolio-react/src/App.css"
$content = Get-Content $cssPath -Raw -Encoding UTF8

# 1. Reduce hero-content gap (80px -> 40px) for PC
$content = $content -replace '(\.hero-content \{[^\}]*gap: )80px;', '${1}40px;'

# 2. Reduce hero-container padding (20px -> 16px)
$content = $content -replace '(\.hero-container \{[^\}]*padding: 0 )20px;', '${1}16px;'

# 3. Add mobile-specific spacing fixes
$mobileFixesPattern = '(@media \(max-width: 768px\) \{[^\}]*\.hero-content \{[^\}]*grid-template-columns: 1fr;)'
$mobileFixes = '$1
            padding: 16px !important;'

$content = $content -replace $mobileFixesPattern, $mobileFixes

# 4. Increase hero-badge margin-bottom for mobile
$content = $content -replace '(\.hero-badge \{[^\}]*margin-bottom: )30px;', '${1}24px;'

# 5. Add mobile padding fix for hero-text
$mobileHeroPattern = '(@media \(max-width: 768px\) \{[^\}]*\.hero-title \{)'
$mobileHeroFix = '    .hero-text {
                padding: 0 !important;
            }

            .hero-badge {
                margin-bottom: 16px !important;
                font-size: 0.85rem !important;
                padding: 8px 20px !important;
            }

            .hero-description {
                font-size: 0.95rem !important;
                line-height: 1.6 !important;
                margin-bottom: 24px !important;
            }

            $1'

$content = $content -replace $mobileHeroPattern, $mobileHeroFix

# 6. Reduce section padding
$content = $content -replace '(\.section \{[^\}]*padding: )100px 0;', '${1}80px 0;'

Set-Content -Path $cssPath -Value $content -Encoding UTF8 -NoNewline

Write-Host "Fixed spacing issues:"
Write-Host "1. Reduced hero-content gap: 80px -> 40px"
Write-Host "2. Reduced hero-container padding: 20px -> 16px"
Write-Host "3. Added mobile spacing fixes"
Write-Host "4. Improved hero-badge margins"
Write-Host "5. Fixed hero-text padding"
Write-Host "6. Reduced section padding: 100px -> 80px"
