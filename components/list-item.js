import Card from "react-bootstrap/Card";
export default () => (
  <Card className={"fj-card fj-card-list"}>
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
        <Card.Title className="card-main-title">Make Sanity blog</Card.Title>
        <Card.Text>Web technology</Card.Text>
      </Card.Body>
    </div>
  </Card>
);
