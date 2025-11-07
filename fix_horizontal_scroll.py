#!/usr/bin/env python
# -*- coding: utf-8 -*-

# Fix horizontal scroll issue - prevent right side blank space

with open('C:/developer/port-website/portfolio-react/src/App.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Add overflow-x: hidden to body
css = css.replace(
    """        body {
            font-family: 'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
            background: var(--background);
            color: var(--text-primary);
            line-height: 1.7;
            min-height: 100vh;
            font-weight: 400;
            letter-spacing: -0.01em;
        }""",
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
        }"""
)

with open('C:/developer/port-website/portfolio-react/src/App.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Fixed horizontal scroll!")
print("- Added overflow-x: hidden to html, body")
print("- Added max-width: 100% to prevent overflow")
print("- No more blank space on the right side")
