import React, { useEffect } from 'react';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Project.css'


const Project = ({project}) => {
    

    return (
        <div className='col-md-4 col-sm-6 col-12 my-3 py-3 service-card'>
            <img className="img-fluid mb-3 project-img"  src={`data:image/png;base64,${project.image}`} alt="" />
            <h6>{project.name}</h6>
            <p> <FontAwesomeIcon icon={faMapMarkedAlt} /> {project.location}</p>
        </div>
    );
};

export default Project;