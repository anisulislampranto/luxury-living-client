import React from 'react';
import img1 from '../../../images/img1.jpg';
import img2 from '../../../images/img2.jpg';
import img3 from '../../../images/img3.jpg';


const Gallery = () => {
    return (
        <div className="container my-5 col-md-12 col-sm-12 col-12" style={{boxShadow: '1px 2px 2px 2px gray', borderRadius: '20px'}}>

                <h3 className="text-center">Gallery</h3>
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" >
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={img1} class="d-block w-100" alt="..." style={{borderRadius: '10px', height: '500px'}} />
                    </div>
                    <div class="carousel-item">
                    <img src={img2} class="d-block w-100" alt="..." style={{borderRadius: '10px', height: '500px'}} />
                    </div>
                    <div class="carousel-item">
                    <img src={img3} class="d-block w-100" alt="..." style={{borderRadius: '10px', height: '500px'}} />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
        </div>
        </div>
    );
};

export default Gallery;