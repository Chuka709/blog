import { Row, Col } from "react-bootstrap";

import Intro from "/components/intro";
import GridItem from "/components/grid-item";
import Layout from "components/layout";

import { getAllPosts } from "/lib/api";

export default function Home({ posts }) {
  return (
    <Layout>
      {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
      <Row>
        <Col md="12">
          <Intro />
        </Col>
      </Row>
      <hr />
      <Row className="mb-5">
        {/* <Col md="10">
              <ListItem />
            </Col> */}
        {posts.map((post) => (
          <Col key={post.date} md="4">
            <GridItem post={post} />
          </Col>
        ))}
      </Row>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
};
