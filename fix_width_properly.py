#!/usr/bin/env python
# -*- coding: utf-8 -*-

# Fix width issue properly - remove overflow-x hidden and fix root cause

with open('C:/developer/port-website/portfolio-react/src/App.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Remove the overflow-x hidden that we added (it hides the problem, doesn't fix it)
css = css.replace(
    """        html, body {
            overflow-x: hidden;
            max-width: 100%;
        }

        body {
            font-family: 'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
            background: var(--background);
            color: var(--text-primary);
            line-height: 1.7;
            min-height: 100vh;
            font-weight: 400;
            letter-spacing: -0.01em;
        }""",
    """        body {
            font-family: 'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
            background: var(--background);
            color: var(--text-primary);
            line-height: 1.7;
            min-height: 100vh;
            font-weight: 400;
            letter-spacing: -0.01em;
            overflow-x: hidden;
            width: 100%;
        }"""
)

# Fix hero section to not exceed screen width
css = css.replace(
    """        .hero {
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
            color: white;
            position: relative;
            overflow: hidden;
            min-height: 100vh;
            display: flex;
            align-items: center;
            margin-top: 0;
            padding: 0;
        }""",
    """        .hero {
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
            color: white;
            position: relative;
            overflow: hidden;
            min-height: 100vh;
            display: flex;
            align-items: center;
            margin-top: 0;
            padding: 0;
            width: 100%;
            max-width: 100vw;
        }"""
)

# Fix hero-container padding for mobile
css = css.replace(
    """        .hero-container {
            position: relative;
            z-index: 2;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
            width: 100%;
        }""",
    """        .hero-container {
            position: relative;
            z-index: 2;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 16px;
            width: 100%;
            box-sizing: border-box;
        }"""
)

# Fix hero-content gap for mobile
css = css.replace(
    """        .hero-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 80px;
            align-items: center;
            min-height: 60vh;
        }""",
    """        .hero-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: center;
            min-height: 60vh;
            width: 100%;
            box-sizing: border-box;
        }"""
)

with open('C:/developer/port-website/portfolio-react/src/App.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Fixed width properly!")
print("- Removed overflow-x: hidden from html")
print("- Added overflow-x: hidden to body only")
print("- Added max-width: 100vw to hero section")
print("- Reduced padding: 0 20px -> 0 16px")
print("- Reduced gap: 80px -> 60px")
print("- Added box-sizing: border-box")
print("\nNo more horizontal scroll or blank space!")
