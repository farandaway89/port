# Fix responsive design - reduce minmax values and add overflow-x hidden

$cssPath = "C:/developer/port-website/portfolio-react/src/App.css"
$content = Get-Content $cssPath -Raw -Encoding UTF8

# 1. Add html overflow-x: hidden
$content = $content -replace '(:root \{)', 'html {
            overflow-x: hidden;
        }

        $1'

# 2. Add body overflow-x: hidden
$content = $content -replace '(body \{[^\}]*letter-spacing: -0.01em;)', '$1
            overflow-x: hidden;'

# 3. Fix .projects-grid minmax (350px -> 280px)
$content = $content -replace 'grid-template-columns: repeat\(auto-fit, minmax\(350px, 1fr\)\);', 'grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));'

# 4. Fix .contact-info minmax (350px -> 280px)
$content = $content -replace '(\.contact-info \{[^\}]*grid-template-columns: repeat\()auto-fit, minmax\(350px, 1fr\)', '$1auto-fit, minmax(280px, 1fr)'

# 5. Fix .academic-grid minmax (350px -> 280px)
$content = $content -replace '(\.academic-grid \{[^\}]*grid-template-columns: repeat\()auto-fit, minmax\(350px, 1fr\)', '$1auto-fit, minmax(280px, 1fr)'

# 6. Fix .certifications-grid minmax (400px -> 280px) - CRITICAL!
$content = $content -replace '(\.certifications-grid \{[^\}]*grid-template-columns: repeat\()auto-fit, minmax\(400px, 1fr\)', '$1auto-fit, minmax(280px, 1fr)'

# 7. Fix .social-grid minmax (300px -> 280px)
$content = $content -replace '(\.social-grid \{[^\}]*grid-template-columns: repeat\()auto-fit, minmax\(300px, 1fr\)', '$1auto-fit, minmax(280px, 1fr)'

# 8. Fix .education-grid minmax (300px -> 280px)
$content = $content -replace '(\.education-grid \{[^\}]*grid-template-columns: repeat\()auto-fit, minmax\(300px, 1fr\)', '$1auto-fit, minmax(280px, 1fr)'

# 9. Fix .skills-grid minmax (300px -> 280px)
$content = $content -replace '(\.skills-grid \{[^\}]*grid-template-columns: repeat\()auto-fit, minmax\(300px, 1fr\)', '$1auto-fit, minmax(280px, 1fr)'

Set-Content -Path $cssPath -Value $content -Encoding UTF8 -NoNewline

Write-Host "Responsive design fixed:"
Write-Host "1. html - overflow-x: hidden"
Write-Host "2. body - overflow-x: hidden"
Write-Host "3. All grid minmax reduced: 400px/350px/300px -> 280px"
Write-Host "   - projects-grid"
Write-Host "   - contact-info"
Write-Host "   - academic-grid"
Write-Host "   - certifications-grid"
Write-Host "   - social-grid"
Write-Host "   - education-grid"
Write-Host "   - skills-grid"
