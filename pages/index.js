import { Container, Row, Col, Image, Card } from "react-bootstrap";

import MyNavbar from "../components/my-navbar";

export default function Home() {
  return (
    <Container>
      <MyNavbar />
      <div className="blog-detail-page">
        <Row>
          <Col md="8">
            <div className="mb-4 admin-intro media">
              <Image
                roundedCircle
                width={64}
                height={64}
                className="mr-3"
                src="logo.jpg"
                alt="Generic placeholder"
              />
              <div className="media-body">
                <h5 className="font-weight-bold mb-0">
                  1234.mn - Online video course
                </h5>
                <p className="welcome-text">
                  ;akldfa ;alksdjf ;akdjf a;lskdjf;al kdjf;alkjdsf alkjdsf;a
                  kjds;flkajd;f kaj;sdflkja ;ldskjf;alksdjf ;alkdsjf a;lkdsjf
                  ;alksdjf alksdjf a;lskdjf ;alksdjf ;alsdkjf a;lskdfj;alksdjf;
                  aksdjf;alskdjf
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <hr />
        <div className="card-body-wrapper">
          <Card.Header className="d-flex flex-row">
            <img
              src={"https://source.unsplash.com/user/erondu/150x150"}
              className="rounded-circle mr-3"
              height="50px"
              width="50px"
              alt="avatar"
            />
            <div>
              <Card.Title className="font-weight-bold mb-1">Чука</Card.Title>
              <Card.Text className="card-date">2022 оны 08 сарын 09</Card.Text>
            </div>
          </Card.Header>
          <div className="view overlay">
            <Card.Img
              src="https://source.unsplash.com/collection/190726/250x250"
              alt="Card image cap"
            />
          </div>
          <Card.Body>
            <Card.Title className="card-main-title">
              Make Sanity blog
            </Card.Title>
            <Card.Text>Web technology</Card.Text>
          </Card.Body>
        </div>
      </div>
    </Container>
  );
}
