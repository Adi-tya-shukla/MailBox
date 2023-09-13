import React, { useCallback, useEffect, useState } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { emailActions } from "../../../Store/emailSlice";
import { Link } from "react-router-dom";
import './Inbox.css';
import * as FaIcons from "react-icons/fa";
import mailImg from '../../Assets/nomail-removebg-preview.png'

const Inbox = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.email.recieved);
  const email = useSelector((state) => state.userInfo.email);
  const mail = email.replace(/[@.]/g, "");
  const [loader, setloader] = useState(false);
  const GetData = useCallback(async () => {
    try {
      setloader(true);
      let res = await fetch(
        `https://mail-boxclient-eb982-default-rtdb.firebaseio.com/${mail}/inbox.json`

      );
      let data = await res.json();
      let arr = [];
      let unreadMsg = 0;

      for (let key in data) {
        if (data[key].read === true) {
          unreadMsg++;
        }
        const id = key;
        arr = [{ id: id, ...data[key] }, ...arr];

        dispatch(emailActions.recievedMail([...arr]));
        dispatch(emailActions.unreadMessage(unreadMsg));
        setloader(false);
      }
    } catch (err) {
      console.log(err);
      setloader(false);
    }
  }, [mail, dispatch]);

  const moveToTrash = async (id) => {

    const res = await fetch( 
      `https://mail-boxclient-eb982-default-rtdb.firebaseio.com/${mail}/inbox/${id}.json`,
    );
    let data = await res.json();
      GetData();
      trash(data);
      DeleteHandler(id);
  };
   const trash = async (data)=>{
    const response = await fetch(
      `https://mail-boxclient-eb982-default-rtdb.firebaseio.com/${mail}/Trashbox.json`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
   }
  const DeleteHandler = async (id) => {
  
    const res = await fetch(
      `https://mail-boxclient-eb982-default-rtdb.firebaseio.com/${mail}/inbox/${id}.json`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    let data = await res;
    console.log(data);
    GetData();
  };
  useEffect(() => {
    GetData();
  }, [GetData]);

  return (
    <>
        <h2 style={{ textAlign: "center" }}>Inbox</h2>
        <hr />
        <div className="InboxBody">
        <ListGroup>
          {loader && data.length > 0 && <h5>Loading....</h5>}
          {data.length === 0 &&(
          <div className="noMailbox">
          <h2 style={{ textAlign: "center" }}>You have not received any mail so far...!!!!</h2>
          <img src={mailImg} alt="noMail" />
        </div>
          )}
          {!loader &&
            data !== null &&
            data.length > 0 &&
            data.map((email) => {
              return (
                <ListGroup.Item
                  key={email.id}
                  className="email-item" 
                >
                  <Link
                    to={`/email/${email.id}`}
                    className="email-link"
                  >
                     <span>
                     <span className="email-status">
                      {email.read ? <FaIcons.FaEnvelopeOpenText/> : <FaIcons.FaEnvelopeSquare/>}
                    </span>
                      <b>From:</b> {email.from}
                    </span>
                    <br/>
                    <span>
                      <b>Subject: </b>
                      {email.subject}
                    </span>
                    <br/>
                    
                  </Link>
                  <span className="email-date">
                      {new Date(email.time).toLocaleString()}
                    </span>
                  <Button
                    onClick={() => moveToTrash(email.id)}
                    className="dltBtn"
                  ><FaIcons.FaTrash/>
                    
                  </Button>
                </ListGroup.Item>
              );
            })}
        </ListGroup>
        </div>
    </>
  );
};

export default Inbox;
