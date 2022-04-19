import axios from "axios";
import React, { useEffect, useState } from "react";
import "./home.css";
// import jwtDecode from "jwt-decode";
import iconLike from "../../asset/icon/like.png";
import iconComment from "../../asset/icon/comment.png";
import iconShare from "../../asset/icon/share.png";
import likeBlue from "../../asset/icon/like-blue.png";
import { Dropdown } from "react-bootstrap";

function Home() {
  const [update, setUpdate] = useState("");
  const [posting, setPosting] = useState([]);
  const regex = /(?<=token=).*$/g;
  const loginToken = regex.exec(document.cookie);
  // const user = jwtDecode(loginToken)
  // // console.log(user);
  // // console.log(loginToken);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "http://localhost:3001/posting/",
          {
            content: update,
          },
          { headers: { authorization: "Bearer " + loginToken } }
        )
        .then((res) => {
          console.log(res);
          getPost();
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getPost = async () => {
    const res = await axios.get("http://localhost:3001/posting/");
    setPosting(res.data.data);
    console.log(res.data.data);
  };

  useEffect(() => {
    getPost();
  }, []);

  const deletePost = async (id) => {
    try {
      console.log(id);
      await axios.delete(`http://localhost:3001/posting/${id}`);
      getPost();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="updateLagu rounded-3">
        <img
          src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <form onSubmit={handleSubmit}>
          <input
            className="ms-1 rounded-3"
            type="text"
            value={update}
            onChange={(e) => setUpdate(e.target.value)}
          />
          <button className="ms-1 rounded-3" type="submit">
            Send
          </button>
        </form>
      </div>

      {/* Posting */}
      <div>
        {posting.map((item) => (
          <div className="getUpdate mt-1 rounded-3" key={item._id}>
            <Dropdown style={{ float: "right" }}>
              <Dropdown.Toggle
                variant="none"
                id="dropdown-basic"
                style={{ heigth: "40px", border: "none", outline: "none" }}
              ></Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  href="#/action-1"
                  onClick={() => deletePost(item["_id"])}
                >
                  Hapus
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Sembunyikan</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <img
              className="ms-1"
              src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <p className="nama ms-1">Mukhammad Abdul mukhid</p>
            <div>
              <p className="ms-3 mt-1" style={{ color: "black" }}>
                {item.content}
              </p>
            </div>
            <div className="hasil-reaksi ms-2 me-2">
              <img src={likeBlue} alt="" />
              <span>comment</span>
            </div>
            <hr style={{ color: "black" }} />

            {/* reaksi */}
            <div className="reaksi ms-4 me-4">
              <img src={iconLike} alt="" />
              <img src={iconComment} alt="" />
              <img src={iconShare} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
