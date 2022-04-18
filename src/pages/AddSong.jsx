import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

function AddSong() {
  const [formData, setFormData] = useState({});

  const regex = /(?<=token=).*$/g;
  const loginToken = regex.exec(document.cookie);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);

    await axios
      .post("http://localhost:3001/songs", formData, {
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

    e.target.reset();
  }

  return (
    <>
      <h2>Add New Song</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="song title"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Artist</Form.Label>
          <Form.Select
            required
            onChange={(e) =>
              setFormData({ ...formData, artist: e.target.value })
            }
          >
            <option>Artist</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Album</Form.Label>
          <Form.Select
            required
            onChange={(e) =>
              setFormData({ ...formData, albums: e.target.value })
            }
          >
            <option>Album</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Genre</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="song genre"
            onChange={(e) =>
              setFormData({ ...formData, genre: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Release Date</Form.Label>
          <Form.Control
            type="date"
            required
            placeholder="release date"
            onChange={(e) =>
              setFormData({ ...formData, releaseDate: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Video (youtube url)</Form.Label>
          <Form.Control
            type="text"
            placeholder="song video"
            onChange={(e) =>
              setFormData({ ...formData, videoUrl: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>File (mp3)</Form.Label>
          <Form.Control
            type="file"
            required
            accept="audio/mp3"
            placeholder="song video"
            onChange={(e) => setFormData({ ...formData, file: e.target.value })}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default AddSong;
