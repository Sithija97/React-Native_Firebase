import React, { useEffect, useState } from "react";
import db from "../../firebase";
import "./Money.css";
import "./InnerStyles.css";

function Overview() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    db.collection("events")
      .orderBy("date", "desc")
      .onSnapshot((snapshot) => {
        setEvents(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  });

  return (
    <>
      <div className="container">
        <h3>Overview</h3>
        <p>inflows : 600</p>
        <p>outflows : 200</p>
        <p>savings : 800</p>
      </div>
      <div className="container">
        <h3>Past events</h3>
        {events.map((event) => (
          <>
            <p>{event.data.name}</p>
            <p>{event.data.amount}</p>
            <p>{event.data.type}</p>
            <p>{event.data.category}</p>
            <p>{event.data.date}</p>
          </>
        ))}
      </div>
    </>
  );
}

export default Overview;
