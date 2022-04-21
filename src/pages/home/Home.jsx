import axios from "axios";
import React, { useEffect, useState } from "react";
import "./home.css";
import Loading from "../../components/Loading";

import { Dropdown } from "react-bootstrap";
import moment from "moment";
import { useSelector } from "react-redux";

function Home() {
  const [update, setUpdate] = useState("");
  const [posting, setPosting] = useState([]);
  const [loading, setLoading] = useState(false);
  const [love, setLove] = useState(1)


  

  const user = useSelector((state) => state.userReducer);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios
      .post(
        "https://melodico.herokuapp.com/posting/",
        {
          content: update,
          postedBy: "6255429d0b10cd13256b01c5"
        },
        { headers: { authorization: "Bearer " + user.token } }
        )
        .then((res) => {
          console.log(res);
          getPost();
        });
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
      setUpdate("")
    };
    
    const getPost = async () => {
      const res = await axios.get("https://melodico.herokuapp.com/posting/", 
      { headers: { authorization: "Bearer " + user.token } });
      setPosting(res.data.data);
      console.log(res.data.data);
    };

  useEffect(() => {
    if (user) getPost();
  }, [user]);

  const deletePost = async (id) => {
    try {
      console.log(id);
      await axios.delete(`https://melodico.herokuapp.com/posting/${id}`, {
        headers: { authorization: "Bearer " + user.token },
      });
      getPost();
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>
      {loading ? <Loading /> : ""}
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
                <Dropdown.Item onClick={() => deletePost(item["_id"])}>
                  Hapus
                </Dropdown.Item>
                <Dropdown.Item>Sembunyikan</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <img
              className="ms-1"
              src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className=" ms-1" style={{ display: "inline-block" }}>
              <p className="nama pt-3">Mukhammad Abdul mukhid</p>
              <p style={{ color: "black", fontSize: "10px" }}>{ moment(item.postDate, "YYMMDD, h:mm:ss").fromNow()}</p>
            </div>
            <div>
              <p className="ms-3 mt-1" style={{ color: "black" }}>
                {item.content}
              </p>
            </div>
            <div className="hasil-reaksi text-danger ms-2 me-2">
              <ion-icon name="heart"></ion-icon>
              <span>comment</span>
            </div>
            <hr style={{ color: "black" }} />

            {/* reaksi */}
            <div className="reaksi text-dark ms-4 me-4">
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="chatbox-ellipses-outline"></ion-icon>
              <ion-icon name="share-social-outline"></ion-icon>
            </div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
