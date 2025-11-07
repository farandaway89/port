#!/usr/bin/env python
# -*- coding: utf-8 -*-

# Fix hero section CSS - remove conflicting padding in first media query

with open('C:/developer/port-website/portfolio-react/src/App.css', 'r', encoding='utf-8') as f:
    css_content = f.read()

# Remove the conflicting hero-content padding in the first @media (max-width: 768px) block
css_content = css_content.replace(
    """            .hero {
                padding-top: 200px;
            }

            .hero-content {
                padding: 20px;
            }

            .hero-title {
                font-size: 2.5rem !important;
            }""",
    """            .hero {
                padding-top: 180px;
            }

            .hero-title {
                font-size: 2.5rem !important;
            }"""
)

with open('C:/developer/port-website/portfolio-react/src/App.css', 'w', encoding='utf-8') as f:
    f.write(css_content)

print("Hero CSS fixed:")
print("- Removed conflicting hero-content padding in first media query")
print("- Reduced hero padding-top to 180px for better mobile spacing")
