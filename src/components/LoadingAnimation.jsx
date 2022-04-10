import React from 'react';
import { Bounce } from "react-activity";
import "react-activity/dist/library.css";

const LoadingAnimation = () => {
    return (
        <Bounce size={50} color="white" style={{ position: "absolute", top: "50%", left: "50%" }} />
    )
}

export default LoadingAnimation;