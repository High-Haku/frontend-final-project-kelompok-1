import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import Loading from "../../asset/loading.svg";

import "./browse.css";

function Browse() {
  const user = useSelector((state) => state.userReducer);
  const [artistsList, setArtistsList] = useState([]);
  const [songsList, setSongsList] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getDatas() {
    setLoading(true);
    const artist = await axios.get(
      "https://melodico.herokuapp.com/artists?limit=6",
      {
        headers: { authorization: "Bearer " + user.token },
      }
    );

    const songs = await axios.get(
      "https://melodico.herokuapp.com/songs?limit=10",
      {
        headers: { authorization: "Bearer " + user.token },
      }
    );
    setLoading(false);

    setArtistsList(artist.data.data);
    setSongsList(songs.data.songs);
  }

  useEffect(() => {
    if (user) {
      getDatas();
    }
  }, [user]);

  return (
    <>
      {loading ? (
        <div className="d-flex" style={{ height: "70vh" }}>
          <img className="m-auto" src={Loading} width="100px" alt="" />
        </div>
      ) : (
        <>
          <div className="artist-container">
            <h3 className="mb-4">Artists</h3>
            <div className="artist-card-container">
              <>
                {artistsList.map((artist, index) => (
                  <div className="artist-card" key={index}>
                    <div className="artist-image-container">
                      <div
                        className="artist-image"
                        style={{
                          background: `url(https://melodico.herokuapp.com/s3/${artist.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      ></div>
                    </div>
                    <div className="artist-card-content d-flex flex-column align-items-center">
                      <h5 className="p-0 m-0">{artist.name}</h5>
                      <p style={{ fontSize: "14px" }}>Artist</p>
                    </div>
                  </div>
                ))}
              </>
            </div>
          </div>

          <div className="songs-container my-3">
            <h3 className="mb-4">Songs</h3>
            <Table hover borderless variant="dark">
              <thead>
                <tr>
                  <th className="text-center" style={{ width: "50px" }}>
                    #
                  </th>
                  <th>Title</th>
                  <th className="text-center" style={{ width: "200px" }}>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {songsList.map((song, index) => (
                  <tr key={index}>
                    <td>
                      <span
                        style={{ height: "50px" }}
                        className="d-flex justify-content-center align-items-center fw-bold"
                      >
                        {index + 1}
                      </span>
                    </td>
                    <td className="table-song-content d-flex gap-3">
                      <img
                        src={
                          "https://melodico.herokuapp.com/s3/" +
                          song.artist.image
                        }
                        alt="Rizky"
                      />
                      <div className="table-song-title">
                        <p>{song.title}</p>
                        <span>{song.artist.name}</span>
                      </div>
                    </td>
                    <td>
                      <div className="table-song-action d-flex gap-2 justify-content-center align-items-center">
                        <ion-icon name="play"></ion-icon>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </>
      )}
    </>
  );
}

export default Browse;
