#!/usr/bin/env python
# -*- coding: utf-8 -*-

# Fix logo and hero-badge overlap by increasing spacing

with open('C:/developer/port-website/portfolio-react/src/App.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Increase hero padding-top even more for mobile
css = css.replace(
    """            .hero {
                padding-top: 220px;
            }""",
    """            .hero {
                padding-top: 280px;
            }"""
)

# Increase hero-badge margin-bottom for more spacing
css = css.replace(
    """        .hero-badge {
            display: inline-block;
            background: linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%);
            backdrop-filter: blur(15px);
            border: 1px solid rgba(102, 126, 234, 0.3);
            border-radius: 50px;
            padding: 12px 28px;
            margin-bottom: 30px;
            font-size: 1.2rem;
            font-weight: 600;
            color: rgba(255, 255, 255, 0.95);
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }""",
    """        .hero-badge {
            display: inline-block;
            background: linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%);
            backdrop-filter: blur(15px);
            border: 1px solid rgba(102, 126, 234, 0.3);
            border-radius: 50px;
            padding: 12px 28px;
            margin-bottom: 40px;
            font-size: 1.2rem;
            font-weight: 600;
            color: rgba(255, 255, 255, 0.95);
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }"""
)

with open('C:/developer/port-website/portfolio-react/src/App.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Spacing fixed!")
print("- Hero mobile padding-top: 220px -> 280px (60px more space)")
print("- Hero-badge margin-bottom: 30px -> 40px")
print("\nThis creates much more vertical space between logo and badge")
