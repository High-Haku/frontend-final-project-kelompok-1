import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SpotifyWebApi from "spotify-web-api-node/src/spotify-web-api";
import { playNow } from "../../redux/actions/playback.action";
import "./browse.css";

const spotifyApi = new SpotifyWebApi({
  clientId: "05d2d24ef6f84db5adb08b96da5edcb2",
});

function Browse() {
  const dispatch = useDispatch();

  const spotifyAccess = useSelector((state) => state.spotifyAccessReducer);
  const [recomendations, setRecomendations] = useState([]);

  useEffect(() => {
    if (!spotifyAccess.accessToken) return;
    spotifyApi.setAccessToken(spotifyAccess.accessToken);
  }, [spotifyAccess.accessToken]);

  useEffect(() => {
    spotifyApi
      .getRecommendations({
        seed_genres: ["rock", "metal"],
        market: "ID",
        min_popularity: 50,
      })
      //   .getAvailableGenreSeeds()
      .then((res) => {
        setRecomendations(res.body.tracks);
        console.log(res);
      });
  }, []);

  function handleClick(uri) {
    dispatch(playNow(uri));
  }

  return (
    <>
      <h2>Recommendations For You</h2>
      <div className="card-container">
        {recomendations.map((r, index) => (
          <div key={index} className="card">
            <img src={r.album.images[1].url} alt={r.name} />
            <p className="p-0 m-0 fw-bold">{r.name}</p>
            <p className="p-0 m-0">{r.artists[0].name}</p>
            <a className="btn btn-info" onClick={() => handleClick(r.uri)}>
              Play
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default Browse;
