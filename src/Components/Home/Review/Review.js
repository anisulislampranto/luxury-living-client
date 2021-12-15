import React from 'react';

const Review = ({review}) => {

    return (
        <div className='col-md-4 col-sm-12 col-12 service-card'>
            <h5>{review.name}</h5>
            <p>{review.review}</p>
        </div>
    );
};

export default Review;