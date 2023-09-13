import React from "react";
import mailImg from'../Assets/rascal-mail.gif'
import './Home.css';
const Home =()=>{
  return (
    <div className="centered-box">
      <h2 style={{ textAlign: "center" }}>Welcome to your MailBox.</h2>
      <img src={mailImg} alt="Mailbox" />
    </div>
  );
}
export default Home;