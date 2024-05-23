import React from "react";

const Profile = (props) => {
  return (
    <div style={{ ...props?.styleName, color: `black` }}>
      <h1>Hello {props?.profile?.name}</h1>
      <h2>Age: {props?.profile?.age}</h2>
    </div>
  );
};

export default Profile;
