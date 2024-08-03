import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "./churka/MainPage";
import UserList from "./churka/UserList";
import ProfileOverview from "./churka/ProfileOverview";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link,
  useParams,
  useNavigate,
} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AddUserForm from "./churka/AddUserForm";
import Modal from "react-bootstrap/Modal";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="users" element={<UserList />} />
            <Route path="profile/:id" element={<ProfileOverview />} />
            <Route path="AddUserForm" element={<AddUserForm />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
function Layout() {
  const navigate = useNavigate();
  const newUser = () => {
    navigate("/AddUserForm");
  };
  return (
    // <div>
    //   <nav>
    //     <ul>
    //       <li>
    //         <Link to="/">Main page</Link>
    //       </li>
    //       <li>
    //         <Link to="/users">Users list</Link>
    //       </li>
    //       <li>
    //         <Link to="/profile">Profile</Link>
    //       </li>
    //     </ul>
    //   </nav>
    //   <hr />
    //   <Outlet />
    // </div>
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Quick bar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/users">Users</Nav.Link>
            <Nav.Link href="/profile/:id">Profile</Nav.Link>
          </Nav>
          <Button variant="outline-light" onClick={newUser}>
            Add user
          </Button>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default App;
