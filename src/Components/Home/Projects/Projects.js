import React, { useEffect, useState } from 'react';
import Project from '../Project/Project';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(()=>{
        fetch('https://still-brook-35546.herokuapp.com/projects')
        .then(res => res.json())
        .then(data => setProjects(data))
    },[])
    
    return (
        <div className='text-center my-4'>
            <p>Projects</p>
            <h2>Discover the latest Interior Design available today</h2>
            <div className='container-fluid row'>
                {
                    projects.map(project=> <Project project={project} key={project._id}></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;