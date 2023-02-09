import React, { useEffect, useState } from "react";
import "./ProgressBar.scss"
/**
 * This is the progressbar itself
 * @param {Number} {progression}
 * @returns  {JSX} React Component ProgresBar
 */
const ProgressBar = ({progression}) => {

    const [progress, setProgress] = useState(0);
    const progressBarStyle = {
        width : `${progress}%`,
        height : "100%",
        transition: "width .26s ease-in-out",
        backgroundImage: `linear-gradient(
      to right top,
      #051937,
      #004d7a,
      #008793,
      #00bf72,
      #a8eb12
    )`
    }
    useEffect(() => {

        setProgress(progression)
    }, [progression])

    return(
        <div className="container__progressbar">
            <span style={progressBarStyle}></span>
        </div>
    )
}

export default ProgressBar;