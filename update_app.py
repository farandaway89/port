#!/usr/bin/env python
# -*- coding: utf-8 -*-

# Update App.tsx with all components in correct order
app_content = """import './App.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { Academic } from './components/Academic'
import { Contact } from './components/Contact'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Academic />
      <Contact />
    </>
  )
}

export default App
"""

with open('C:/developer/port-website/portfolio-react/src/App.tsx', 'w', encoding='utf-8') as f:
    f.write(app_content)

print("Updated App.tsx with all 9 components")
print("Component order: Header → Hero → About → Skills → Projects → Experience → Education → Academic → Contact")
