import './projects.scss'
import ProjectsData from '../../assets/datas/projects_datas.json'
import ProjectCard from '../../components/ProjectCard/ProjectCard'

export default function Projects () {

    const projects_list = ProjectsData.projects

    return (
        <section id="projects" className='projects section'>
            <div className='title'>
                <h3>Mes projets</h3>
            </div>
            <ul className='project-list'>
                {projects_list.map((project) => <li className='project' key={project.name}>
                    <ProjectCard 
                    name={project.name} 
                    img={project.image_path} 
                    description={project.description}
                    skills={project.skills}
                    repo={project.github_link}
                    demo={project.git_page_link}
                    /></li>)}
            </ul>
        </section>
    )
}