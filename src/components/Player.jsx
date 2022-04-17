import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SpotifyPlayer from "react-spotify-web-playback";

export default function Player() {
  const spotify = useSelector((state) => state.spotifyAccessReducer);
  const playback = useSelector((state) => state.playbackReducer);
  // console.log(playback);

  if (!spotify.accessToken || !playback.playSong) return null;
  return (
    <div
      className="shadow"
      style={{
        position: "fixed",
        bottom: 0,
        left: "200px",
        right: 0,
        zIndex: 21,
        backgroundColor: "#1F2127",
      }}
    >
      <SpotifyPlayer
        token={spotify.accessToken}
        showSaveIcon
        play={false}
        uris={[playback.playSong]}
        styles={playerStyle}
      />
    </div>
  );
}

const playerStyle = {
  activeColor: "#23262e",
  bgColor: "#23262e",
  color: "#fff",
  loaderColor: "#fff",
  sliderHandleColor: "#FFC107",
  sliderColor: "#FFE500",
  trackArtistColor: "#ccc",
  trackNameColor: "#FFE500",
};
