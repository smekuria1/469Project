import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Users() {
  const [userData, setUserData] = useState();

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((data) => {
        return data.json();
      })
      .then((json) => {
        return setUserData(json.users);
      });
  }, []);

  console.log(userData);

  if (!userData) {
    return <p>LOADING</p>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "35px",
        justifyContent: "center",
      }}
    >
      {userData.map((data) => {
        return (
          <Card style={{ width: "18rem" }} key={data.id}>
            <Card.Img variant="top" src={data.image} />
            <Card.Body>
              <Card.Title>{data.firstName + " " + data.lastName}</Card.Title>
              <Card.Text>{data.email}</Card.Text>
              <Button variant="primary">Email</Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default Users;
