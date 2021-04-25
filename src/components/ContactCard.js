import React from "react";

function ContactCard(props) {
  return (
    <div>
          <h3>Name: { props.name}</h3>
      <h3>Phone number: {props.phone}</h3>
      <p>Email: {props.email}</p>
    </div>
  );
}

export default ContactCard;
