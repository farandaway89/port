#!/usr/bin/env python
# -*- coding: utf-8 -*-

# Fix hero-badge font size and spacing to prevent text overlap

with open('C:/developer/port-website/portfolio-react/src/App.css', 'r', encoding='utf-8') as f:
    css = f.read()

# 1. Increase hero-badge font size from 0.9rem to 1.2rem
css = css.replace(
    """        .hero-badge {
            display: inline-block;
            background: linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%);
            backdrop-filter: blur(15px);
            border: 1px solid rgba(102, 126, 234, 0.3);
            border-radius: 50px;
            padding: 10px 24px;
            margin-bottom: 30px;
            font-size: 0.9rem;
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
            margin-bottom: 30px;
            font-size: 1.2rem;
            font-weight: 600;
            color: rgba(255, 255, 255, 0.95);
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }"""
)

# 2. Increase hero padding-top in mobile to prevent overlap with logo
css = css.replace(
    """            .hero {
                padding-top: 180px;
            }""",
    """            .hero {
                padding-top: 220px;
            }"""
)

with open('C:/developer/port-website/portfolio-react/src/App.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Hero badge fixed:")
print("- Increased font-size: 0.9rem -> 1.2rem")
print("- Increased padding: 10px 24px -> 12px 28px")
print("- Increased hero mobile padding-top: 180px -> 220px")
print("\nThis prevents overlap with logo '이승필' and makes badge more visible")
