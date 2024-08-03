import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { User } from "./MainPage";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProfileOverview({}) {
  const [data, setData] = useState();
  const { id } = useParams();
  console.log("id", id);
  useEffect(() => {
    async function getUserById(id) {
      try {
        const response = await fetch(`http://localhost:3000/users/${id}`);

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("User not found");
          } else {
            throw new Error("An error occurred while fetching the user data");
          }
        }

        const user = await response.json();
        console.log("User data:", user);
        setData(user);
      } catch (error) {
        console.error(error.message);
        alert(error.message);
      }
    }

    getUserById(id);
    console.log("useEffect working");
  }, []);

  function selectedUser(user) {
    console.log(user);
  }
  return (
    <div>
      {data && (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={data.photo} />
          <Card.Body>
            <Card.Title>
              {data.name}
              {data.surname}
            </Card.Title>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Sex: {data.description.gender}</ListGroup.Item>
              <ListGroup.Item>Age: {data.description.age}</ListGroup.Item>
              <ListGroup.Item>
                Education: {data.description.education}
              </ListGroup.Item>
              <ListGroup.Item>Hobby: {data.description.hobby}</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}
