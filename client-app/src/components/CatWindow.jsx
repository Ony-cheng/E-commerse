import React from 'react';

const CatWindow = ({categories, activeCat, setActiveCat, setTopIsVisible}) => {
    return (
        <div style={{
            width: '15vw',
            minHeight:'100%',
            padding:'20px',
            paddingTop:'70px',
            borderRight:'1px solid black',
            justifyContent:'left',
            display:'inline-block'
        }}>
            <p><strong>Категорії </strong>
            </p>

            { categories.map( (category) =>
            <button onClick={(e)=>
            {e.preventDefault()
                setActiveCat(category)
                setTopIsVisible(false)
            }
            }
                style={{border:'none',
                background:'transparent',
                textAlign:'left',
                float:'left',
                minWidth:'100px',
                marginTop:'10px'}}>
                {category.category}
            </button>
            ) }


        </div>
    );
};

export default CatWindow;