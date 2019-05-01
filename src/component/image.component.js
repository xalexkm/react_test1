import React from "react";

const Image = (props) => (

    <img src={ props.source[props.id].image } alt={ props.source[props.id].model } className="image_con" />
)





export default Image;