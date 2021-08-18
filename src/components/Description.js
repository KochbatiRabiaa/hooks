import React from "react";



const Description =(props)=> {
    console.log(props)
   
    //console.log(descrip);
    return (
        <div>
{props.location.state.movie.description}
    </div>
    )
}

export default Description 