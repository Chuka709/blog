import Card from "react-bootstrap/Card";
import moment from "moment";
import "moment/locale/mn";
import Link from "next/link";
import { urlFor } from "/lib/api";
const GridItem = ({ post }) => {
  //moment.locale("mn");
  return (
    // <pre>{JSON.stringify(post.publisher, null, 2)}</pre>
    <Card className={"fj-card"}>
      <div className="card-body-wrapper">
        <Card.Header className="d-flex flex-row">
          <img src={urlFor(post.publisher.picture).height(50).url()} />
          <div>
            <Card.Title className="font-weight-bold mb-1">
              {post.publisher.title}
            </Card.Title>
            <Card.Text className="card-date">
              {/* {post.date} */}
              {moment(post.date).startOf("day").fromNow()}
              {" - "}
              {moment(post.date).format("LLL")}
            </Card.Text>
          </div>
        </Card.Header>
        <Link href={`/${post.slug}`}>
          <a>
            <div className="view overlay">
              <Card.Img
                src={urlFor(post.image).height(400).url()}
                alt="Card image cap"
              />
            </div>
            <Card.Body>
              <Card.Title className="card-main-title">{post.title}</Card.Title>
              <Card.Text>{post.subtitle}</Card.Text>
            </Card.Body>
          </a>
        </Link>
      </div>
    </Card>
  );
};
export default GridItem;
