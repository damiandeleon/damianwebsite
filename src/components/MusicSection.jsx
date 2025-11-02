import React from "react";
import studiosetup from "../Assets/Images/studiosetup.jpg";

const MusicSection = (props) => {
  const musicDetails = props.musicDetails;
  return (
    <div
      id="music"
      className="row card-background4"
      style={{
        height: "calc(135vh - 70px)",
        paddingTop: "70px",
        boxSizing: "border-box",
      }}
    >
      <div>
        <div className="card-body ms-5 me-5" style={{ textAlign: "center" }}>
          <img
            src={studiosetup}
            className="profilePic"
            alt="project screenshot"
            style={{ borderRadius: "25px", marginTop: "10px", width: "250px" }}
          />
          <article>
            <div className="profiledescription">
              <h1>Music</h1>
              <p>
                Music is a hobby of mine. My experience is with singing and
                music production. My goal is to begin to incorporate Artificial
                Intelligence (AI) to create original music so that I expand my
                musical artistic expression. At some point I would like to
                expand that further to help others who don't know how to play
                physical instruments to learn how to make AI an instrument for
                music the way it is for graphics and writing.
              </p>
            </div>
            <hr />
          </article>
          <article>
            <div className="profiledescription" style={{ height: "100%" }}>
              <h1>Musical Catalog</h1>
              <h3> Free to stream </h3>
            </div>
            <div id="musicSteamDiv">
              {musicDetails.map((music) => {
                return (
                  <div id="playerCard" key={music.id}>
                    <p>Song Title: {music.name}</p>
                    <p>Vocals: {music.artist}</p>
                    <p>Originally composed and performed by: {music.credit}</p>
                    <audio controls>
                      <source
                        src={music.musicfile}
                        type="audio/wav"
                        preload="auto"
                      ></source>
                      Your browser does not support the audio tag.
                    </audio>
                  </div>
                );
              })}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default MusicSection;
