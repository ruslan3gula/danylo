import { React, useState, useEffect } from "react";
import { User } from "./MainPage";
import { Link } from "react-router-dom";

export default function UserList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const usersSearch = async () => {
      let url = `http://localhost:3000/users`;

      let response = await fetch(url);
      let data = await response.json();
      console.log("data", response);

      setData(data);
    };
    usersSearch();
  }, []);

  return (
    <div>
      {data &&
        data.map((user) => (
          <Link to={`/profile/${user.id}`}>
            <div>
              {user.name} {user.surname}
            </div>
            <img src={user.photo} />
            <hr />
          </Link>
        ))}
    </div>
  );
}
