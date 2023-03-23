import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const Users = () => {
  const URL = "https://dummyjson.com/users";
  const [userlist, setUserlist] = useState([]);
  const [loading, setLoading] = useState(true);
  // wait for users to be populated and map over them
  useEffect(() => {
    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUserlist(data.users);
        data.users.map((user) => {
          console.log(user);
        });
        setLoading(false);
      });
  }, []);

  return (
    <div className="container d-flex flex-column">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {userlist.map((user) => {
            return (
              <Card key={user.id} style={{ width: "18rem" }}>
                <Card.Img variant="top" src={user.image} />
                <Card.Body>
                  <Card.Title>{user.firstName}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {user.email}
                  </Card.Subtitle>

                  <Link to={`/users/${user.id}`}>
                    <Button variant="primary">Go somewhere</Button>
                  </Link>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Users;
