import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SpotifyPlayer from "react-spotify-web-playback";

export default function Player() {
  const spotify = useSelector((state) => state.spotifyAccessReducer);
  const playback = useSelector((state) => state.playbackReducer);
  console.log(playback);

  if (!spotify.accessToken) return null;
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: "200px",
        right: 0,
        zIndex: 21,
      }}
    >
      <SpotifyPlayer
        token={spotify.accessToken}
        showSaveIcon
        play={false}
        uris={[playback.playSong]}
      />
    </div>
  );
}
