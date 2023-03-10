import React from 'react';
import starIcon from "../images/star.png"

const Stars = ({rating}) => {


    const stars = Array(Math.round(~~rating)).fill(1)
    return (
        <div>
            {
                stars.map((star) => (
                    <img
                        src={starIcon}
                        width="13"
                        height="13"
                        // className="d-inline-block align-top"
                        alt="..."
                    />
                ))
            }
        </div>
    );
};

export default Stars;