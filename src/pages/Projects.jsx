import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AddProject from '../components/AddProject';
import projectsService from '../services/projects.service';

const API_URL = 'http://localhost:5005';

function Projects() {
  const [projects, setProjects] = useState([]);

  const getAllProjects = async () => {
    try {
      const response = await projectsService.getAllProjects();
      setProjects(response.data);
    } catch (error) {}
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <div className="ProjectListPage">
      <AddProject refreshProjects={getAllProjects} />
      {projects.map((project) => {
        return (
          <div className="ProjectCard card" key={project._id}>
            <Link to={`/projects/${project._id}`}>
              <h3>{project.title}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
