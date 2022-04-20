import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "./browse.css";

function Browse() {
  const user = useSelector((state) => state.userReducer);
  const [artistsList, setArtistsList] = useState([]);

  async function getArtists() {
    const res = await axios.get("https://melodico.herokuapp.com/artists", {
      headers: { authorization: "Bearer " + user.token },
    });

    setArtistsList(res.data.data);
  }

  useEffect(() => {
    if (user) {
      getArtists();
    }
  }, [user]);

  return (
    <>
      <h3 className="mb-4">Artists</h3>
      <div className="artist-card-container">
        <>
          {artistsList.map((artist, index) => (
            <div className="artist-card" key={index}>
              <img
                className="rounded-circle"
                src={`https://melodico.herokuapp.com/s3/` + artist.image}
                alt={artist.name}
              />
              <div className="artist-card-content d-flex flex-column align-items-center">
                <h5 className="p-0 m-0">{artist.name}</h5>
                <p style={{ fontSize: "14px" }}>Artist</p>
              </div>
            </div>
          ))}
        </>
      </div>
    </>
  );
}

export default Browse;
