import React, {useEffect, useState} from 'react';
import starIcon from "../images/star.png";
import emptyStar from "../images/emptystar.png";

const RatingButton = ({rating, setRating}) => {
    const CLEAR = [
        {imageSource:emptyStar,id:1},
        {imageSource:emptyStar,id:2},
        {imageSource:emptyStar,id:3},
        {imageSource:emptyStar,id:4},
        {imageSource:emptyStar,id:5},
    ]


    const [stars, setStars] = useState(CLEAR);

    function fillStars(id){
        let stars2 = CLEAR
        for(let i=1;i<=id;i++){
            stars2[i-1].imageSource = starIcon
        }
        setStars(stars2)
    }

    function clearStars(){
            setStars(CLEAR)
            fillStars(rating)

    }

    function completeStars(id){
        setRating(id)

    }

    return (
        <div className="my-3">
            {stars.map((star) => (
            <img className="mx-1"
                key={star.id}
                onMouseOver={  () => fillStars(star.id)}
                 onMouseLeave={()=> clearStars()}
                 onClick={() => completeStars(star.id)}
                src={star.imageSource}
                width="25"
                height="25"
                alt="..."
            />
            ))}

        </div>
    );
};

export default RatingButton;