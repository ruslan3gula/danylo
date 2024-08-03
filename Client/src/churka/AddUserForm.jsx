import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";

export default function AddUserForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [sex, setSex] = useState("");
  const [education, setEducation] = useState("None");
  const [hobby, setHobby] = useState("");
  // const [fileName, setFileName] = useState("Please select photo(.jpg , .png)");
  const [photo, setPhoto] = useState(null);
  const handlePhotoChange = (event) => {
    setPhoto(event.target.files[0]);
    console.log(photo);
  };

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Surname</Form.Label>
        <Form.Control
          type="text"
          placeholder="Surname"
          onChange={(e) => setSurname(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Sex</Form.Label>
        <Form.Control
          type="text"
          placeholder="Sex"
          onChange={(e) => setSex(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <div>
          <Form.Label>Education</Form.Label>
        </div>
        <Dropdown as={ButtonGroup}>
          <Button variant="success">{education}</Button>

          <Dropdown.Toggle split variant="success" />

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setEducation("High School")}>
              High School
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setEducation("Bachelor")}>
              Bachelor
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setEducation("Master")}>
              Master
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Hobby</Form.Label>
        <Form.Control
          type="text"
          placeholder="Hobby"
          onChange={(e) => setHobby(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Photo</Form.Label>
        <Form.Control type="file" onChange={(e) => handlePhotoChange} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
