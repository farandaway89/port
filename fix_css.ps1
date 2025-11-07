# Fix CSS width properties

$cssPath = "C:/developer/port-website/portfolio-react/src/App.css"
$content = Get-Content $cssPath -Raw -Encoding UTF8

# Fix 1: .nav-links a:hover::before
$content = $content -replace '(\.nav-links a:hover::before \{)\s*(\s+\})', '$1
            width: 100%;
        $2'

# Fix 2: .profile-image
$content = $content -replace '(\.profile-image \{)\s*(\s+height: 100%;)', '$1
            width: 100%;
            $2'

# Fix 3: .btn-primary, .btn-secondary
$content = $content -replace '(\.btn-primary, \.btn-secondary \{)\s*(\s+max-width: 300px;)', '$1
                width: 100%;
                $2'

# Fix 4: .social-item::before
$content = $content -replace '(\.social-item::before \{[^\}]*left: 0;)\s*(\s+height: 2px;)', '$1
            width: 100%;
            $2'

# Fix 5: .experience-content
$content = $content -replace '(\.experience-content \{)\s*(\s+margin: 0 !important;)', '$1
                width: 100%;
                $2'

Set-Content -Path $cssPath -Value $content -Encoding UTF8 -NoNewline

Write-Host "CSS Fixed:"
Write-Host "1. .nav-links a:hover::before - width: 100%"
Write-Host "2. .profile-image - width: 100%"
Write-Host "3. .btn-primary, .btn-secondary - width: 100%"
Write-Host "4. .social-item::before - width: 100%"
Write-Host "5. .experience-content - width: 100%"
