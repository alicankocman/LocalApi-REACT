import React, { useState, useEffect } from "react";
import Container from "./main";
import "./card.css";

const Main = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // API'den verileri çek
    fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="main">
      <div className="text">
        <p className="yazi1">
          Get the most out of your mobile with the right subscription
        </p>
        <p className="yazi2">
          All devices come with free delivery or pickup as standard. See
          information on available shopping options for your location.
        </p>
      </div>
      <div>
        {/* API'den çekilen verileri göster */}
        {userData.map((user) => (
          <div key={user.id}>
            {/* <img src={user.image_picture} alt={user.name} /> */}
            {/* <p>{user.yazi1}</p>
            <p>{user.yazi2}</p> */}
            {/* <p>
              {user.yazi3}
              {user.yazi4}
            </p> */}
          </div>
        ))}
      </div>
      <Container
        messageOne={
          <div>
            <img src={userData[0]?.image_picture} alt={userData[0]?.name} />
            <p className="yazi1">{userData[0]?.yazi1 }</p>
            <p className="yazi2">{userData[0]?.yazi2}</p>
            <p className="yazi3">{userData[0]?.yazi3}
              {userData[0]?.yazi4}</p>
            <button className="Button">Add subscription</button>
          </div>
        }
        messageTwo={
          <div>
            <img src={userData[1]?.image_picture} alt={userData[1]?.name} />
            <p className="yazi1">{userData[1]?.yazi1 }</p>
            <p className="yazi2">{userData[1]?.yazi2}</p>
            <p className="yazi3">{userData[1]?.yazi3}
              {userData[1]?.yazi4}</p>
            <button className="Button">Add subscription</button>
          </div>
        }
        messageThree={
          <div>
            <img src={userData[2]?.image_picture} alt={userData[2]?.name} />
            <p className="yazi1">{userData[2]?.yazi1 }</p>
            <p className="yazi2">{userData[2]?.yazi2}</p>
            <p className="yazi3">{userData[2]?.yazi3}
             {userData[2]?.yazi4}</p>
            <button className="Button">Add subscription</button>
          </div>
        }
      />
      <button
        className="Button2"
        style={{ position: "relative", top: "250px", right: "550px" }}
      >
        See all subscriptions
      </button>
    </div>
  );
};

export default Main;
