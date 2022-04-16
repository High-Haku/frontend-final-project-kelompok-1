import React, { useEffect, useState } from "react";
import Spotify from "../../Spotify";
import SpotifyWebApi from "spotify-web-api-node/src/spotify-web-api";
import { Container, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const spotifyApi = new SpotifyWebApi({
  clientId: "05d2d24ef6f84db5adb08b96da5edcb2",
});

function Home() {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const spotifyAccess = useSelector((state) => state.spotifyAccessReducer);

  useEffect(() => {
    if (!spotifyAccess.accessToken) return;
    spotifyApi.setAccessToken(spotifyAccess.accessToken);
  }, [spotifyAccess.accessToken]);

  useEffect(() => {
    if (search != "") {
      spotifyApi.searchTracks(search).then((res) => {
        console.log(res);
      });
    }
  }, [search]);

  return (
    <div>
      Home
      <Spotify />
      <Container className="mt-3">
        <Form.Control
          type="search"
          placeholder="Search Song/Artist"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></Form.Control>
        <div className="result mt-3">
          <Link to="/browse">Browse Song</Link>
        </div>
      </Container>
    </div>
  );
}

export default Home;
