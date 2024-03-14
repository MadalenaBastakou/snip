import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { InputGroup } from "react-bootstrap";
import Cookies from 'js-cookie';

function NavbarDashboard({
  username,
  search,
  captureSearch,
  handleSearch,
  // searchResults,
}) {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      const response = await axios.get("http://localhost:3020/logout");
      if (response.data.logout) {
        Cookies.remove("token");
        navigate("/login");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container fluid>
        <Navbar.Brand className="logo" style={{ marginRight: "15px" }}>
          &lt;SnipRepo&gt;
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-center">
          <Form className="d-flex" onSubmit={handleSearch}>
            <InputGroup>
              <Form.Control
                type="search"
                placeholder="search"
                value={search}
                onChange={captureSearch}
                aria-label="Search"
              />
              <Button variant="dark" onClick={handleSearch}>
                Search
              </Button>
            </InputGroup>
          </Form>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Form className="d-flex align-items-center">
            <span>Hello, <b>{username}</b></span>
            <Button
              className="logout-btn"
              onClick={logout}
              style={{ marginLeft: "15px" }}
            >
              Logout
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarDashboard;
