import React from "react";
import { Card } from "react-bootstrap";
import {Button} from "react-bootstrap";

const styles = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  margin: 30

};

function Pokemon({ pokemon }) {
  return (
    <div style={styles}>
      {pokemon.map((pokemon) => {
        return (
          <div key={pokemon.name}>
            <Card style={{ width: "20rem", marginBottom: 20 }}>
              <Card.Img variant="top" src={pokemon.sprites.front_default} />
              <Card.Body style={{textAlign: "center"}}>
                <Card.Title>{pokemon.name}</Card.Title>
                <Card.Text>Weight: {pokemon.weight}</Card.Text>
                <Button variant="danger">Get More Details</Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default Pokemon;
