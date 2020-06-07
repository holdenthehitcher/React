import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const RenderCard = ({ item: { image, name, description } }) => (
  <Card>
    <CardImg src={image} alt={name} />
    <CardBody>
      <CardTitle>{name}</CardTitle>
      <CardText>{description}</CardText>
    </CardBody>
  </Card>
);

const Home = ({ campsite, promotion, partner }) => (
  <div className="container">
    <div className="row">
      {[campsite, promotion, partner].map((data, i) => (
        <div key={i} className="col-md m-1">
          <RenderCard item={data} />
        </div>
      ))}
    </div>
  </div>
);

export default Home;
