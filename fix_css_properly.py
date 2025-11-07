#!/usr/bin/env python
# -*- coding: utf-8 -*-

# Fix all missing width properties in App.css

with open('C:/developer/port-website/portfolio-react/src/App.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Fix 1: .nav-links a:hover::before - add width: 100%
css = css.replace(
    """        .nav-links a:hover::before {

        }""",
    """        .nav-links a:hover::before {
            width: 100%;
        }"""
)

# Fix 2: .profile-image - add width: 100%
css = css.replace(
    """        .profile-image {

            height: 100%;""",
    """        .profile-image {
            width: 100%;
            height: 100%;"""
)

# Fix 3: .btn-primary, .btn-secondary - add width: 100%
css = css.replace(
    """            .btn-primary, .btn-secondary {

                max-width: 300px;""",
    """            .btn-primary, .btn-secondary {
                width: 100%;
                max-width: 300px;"""
)

# Fix 4: .social-item::before - add width: 100%
css = css.replace(
    """        .social-item::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;

            height: 2px;""",
    """        .social-item::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;"""
)

# Fix 5: .experience-content - add width: 100%
css = css.replace(
    """            .experience-content {

                margin: 0 !important;""",
    """            .experience-content {
                width: 100%;
                margin: 0 !important;"""
)

with open('C:/developer/port-website/portfolio-react/src/App.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("✅ CSS 복구 완료!")
print("복구된 항목:")
print("1. .nav-links a:hover::before - width: 100% 추가")
print("2. .profile-image - width: 100% 추가")
print("3. .btn-primary, .btn-secondary - width: 100% 추가")
print("4. .social-item::before - width: 100% 추가")
print("5. .experience-content - width: 100% 추가")
