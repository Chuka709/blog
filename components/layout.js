import { Container, Row, Col } from "react-bootstrap";
import MyNavbar from "/components/my-navbar";

const Layout = ({ children }) => {
  return (
    <Container>
      <MyNavbar />
      <div className="blog-detail-page">
        <div className="page-wrapper">{children}</div>
      </div>
      <footer className="page-footer">
        <div>
          <a href="#">Home</a>
          {" | "}
          <a href="#">Lesson</a>
          {" | "}
          <a href="#">Facebook</a>
        </div>
      </footer>
    </Container>
  );
};
export default Layout;
