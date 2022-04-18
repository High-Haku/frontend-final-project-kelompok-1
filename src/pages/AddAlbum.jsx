import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Loading from "../components/Loading.jsx";

function AddAlbum() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  const [artist, setArtist] = useState("");
  const [artistList, setArtistList] = useState([]);

  const regex = /(?<=token=).*$/g;
  const loginToken = regex.exec(document.cookie);

  useEffect(() => {
    getArtist();
  }, []);

  async function getArtist() {
    const res = await axios
      .get("http://localhost:3001/artists", {
        headers: { authorization: "Bearer " + loginToken },
      })
      .catch((err) => {
        console.log(err);
      });

    setArtistList(res.data.data);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    console.log(formData);

    const data = new FormData();
    for (const d in formData) {
      if (formData[d]) data.append(d, formData[d]);
    }

    setLoading(true);
    await axios
      .post("http://localhost:3001/albums", data, {
        headers: { authorization: "Bearer " + loginToken },
      })
      .then((res) => {
        console.log(res);
        alert("Data Berhasil di Upload");
        setFormData({});
      })
      .catch((err) => {
        console.log(err);
        alert("error");
      });

    setLoading(false);
    e.target.reset();
  }

  return (
    <>
      {loading ? <Loading /> : ""}
      <h2>Add New Album</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>
            Album Name <span className="text-warning">*</span>
          </Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="Album Title..."
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>
            Artist <span className="text-warning">*</span>
          </Form.Label>
          <Form.Select
            required
            onChange={(e) => {
              setFormData({ ...formData, artist: e.target.value });
              setArtist(e.target.value);
            }}
          >
            <option></option>
            <>
              {artistList.map((list) => (
                <option key={list["_id"]} value={list["_id"]}>
                  {list.name}
                </option>
              ))}
            </>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Songs</Form.Label>
          <Form.Select
            onChange={(e) =>
              setFormData({ ...formData, songs: e.target.value })
            }
          >
            <option></option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>
            Cover Image (max 2MB) <span className="text-warning">*</span>
          </Form.Label>
          <Form.Control
            type="file"
            required
            accept=".jpg,.jpeg,.png"
            placeholder="song video"
            onChange={(e) =>
              setFormData({ ...formData, image: e.target.files[0] })
            }
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default AddAlbum;
