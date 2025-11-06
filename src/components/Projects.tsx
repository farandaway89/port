import { projectsData } from '../data/projectsData'

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p style={{ textAlign: 'center', color: '#666', marginBottom: '50px', fontSize: '1.1rem' }}>
          실무급 개발 프로젝트와 혁신적인 솔루션 구현 경험 (시간순)
        </p>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-period">{project.period}</p>
              </div>
              <div className="project-content">
                <p className="project-description">{project.description}</p>

                {project.achievement && (
                  <div className="project-achievement">
                    <h4>최신 업데이트</h4>
                    <p>{project.achievement}</p>
                  </div>
                )}

                <div className="project-tech">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.links.video && (
                    <a href={project.links.video} className="project-link" target="_blank" rel="noopener noreferrer">
                      동영상 보기
                    </a>
                  )}
                  {project.links.demo && (
                    <a href={project.links.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                      실행하기
                    </a>
                  )}
                  {project.links.plan && (
                    <a href={project.links.plan} className="project-link" target="_blank" rel="noopener noreferrer">
                      개발계획서
                    </a>
                  )}
                  {project.links.report && (
                    <a href={project.links.report} className="project-link" target="_blank" rel="noopener noreferrer">
                      완료보고서
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
