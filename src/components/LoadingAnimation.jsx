import React from 'react';
import { Bounce } from "react-activity";
import "react-activity/dist/library.css";

const LoadingAnimation = () => {
    return (
        <div style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', paddingTop: '40vh' }}>
            <Bounce size={50} color="white" />
        </div>
    )
}

export default LoadingAnimation;