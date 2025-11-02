import React  from "react";
import magicsong from "../Assets/Musicfiles/magic.wav";
import MusicSection from "./MusicSection";

const MusicList = () => {

    const musicDetails = [
        {
            id: 1,
            name: "Magic",
            artist: "Damian",
            credit: "Lindsey Stirling featuring David Archuleta",
            musicfile: magicsong,
        }
    ];

    return ( <MusicSection musicDetails={musicDetails} />)
    
}

export default MusicList;