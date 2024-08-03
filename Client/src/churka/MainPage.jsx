import ProfileOverview from "./ProfileOverview";
import UserList from "./UserList";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export const User = React.createContext({});

export default function MainPage() {
  return (
    // <User.Provider value="">
    //   <div class="d-flex justify-content-between">
    //     <div style={{ width: "300px" }}>
    //       <UserList style={{ width: "300px" }} />
    //     </div>
    //     <div>
    //       <ProfileOverview />
    //     </div>
    //   </div>
    // </User.Provider>
    <img src="MainPageImg.png" alt="" width="1216" height="700" />
  );
}
