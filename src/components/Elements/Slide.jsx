import React from "react";
export const Slide = ({id,active,title,index}) => {
    return(
        <div className={active === index ? 'slide active' : 'slide'}>
            <img src={process.env.PUBLIC_URL+`/images/IMG${id}.jpg`} alt={title} />
        </div>
    )
}
