// src/pages/ProjectDetailsPage.js

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import projectsService from '../services/projects.service';

const API_URL = 'http://localhost:5005';

function ProjectDetails(props) {
  const [project, setProject] = useState(null);
  const { projectId } = useParams();

  const getProject = async () => {
    //  <== ADD A NEW FUNCTION
    try {
      const response = await projectsService.getProject(projectId);
      setProject(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // <== ADD AN EFFECT
    getProject();
  }, []);

  return (
    <div className="ProjectDetails">
      {project && (
        <>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </>
      )}

      {project &&
        project.tasks.map((task) => (
          <li className="TaskCard card" key={task._id}>
            <h3>{task.title}</h3>
            <h4>Description:</h4>
            <p>{task.description}</p>
          </li>
        ))}

      <Link to="/projects">
        <button>Back to projects</button>
      </Link>
    </div>
  );
}

export default ProjectDetails;
