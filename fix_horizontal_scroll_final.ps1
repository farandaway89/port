# Fix horizontal scroll issue - add html overflow-x hidden and proper widths

$cssPath = "C:/developer/port-website/portfolio-react/src/App.css"
$content = Get-Content $cssPath -Raw -Encoding UTF8

# 1. Add html overflow-x: hidden before :root
$content = $content -replace '(:root \{)', 'html {
            overflow-x: hidden;
            max-width: 100%;
        }

        $1'

# 2. Add width: 100% to body
$content = $content -replace '(body \{\s+overflow-x: hidden;)', '$1
            width: 100%;
            max-width: 100%;'

# 3. Add max-width: 100vw to .hero
$content = $content -replace '(\.hero \{[^\}]*width: 100%;)', '$1
            max-width: 100vw;'

# 4. Add box-sizing to hero-container
$content = $content -replace '(\.hero-container \{[^\}]*width: 100%;)', '$1
            box-sizing: border-box;'

# 5. Add box-sizing to hero-content
$content = $content -replace '(\.hero-content \{[^\}]*min-height: 60vh;)', '$1
            width: 100%;
            box-sizing: border-box;'

Set-Content -Path $cssPath -Value $content -Encoding UTF8 -NoNewline

Write-Host "Horizontal scroll fixed:"
Write-Host "1. html - overflow-x: hidden, max-width: 100%"
Write-Host "2. body - width: 100%, max-width: 100%"
Write-Host "3. .hero - max-width: 100vw"
Write-Host "4. .hero-container - box-sizing: border-box"
Write-Host "5. .hero-content - width: 100%, box-sizing: border-box"
