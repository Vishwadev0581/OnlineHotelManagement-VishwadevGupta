import React from "react";
import { Button, Card, CardBody, CardText, CardTitle } from "reactstrap";
//import {Jumbotron}

const Home = () => {
    return (
        <div>
            <Card className="text-center">

                <CardBody bg-primary>
                    <CardTitle tag="h5" className="display-3">
                        Home Page of Hotel
                    </CardTitle>
                    <CardText className="display-6">
                        This is the best Hotel in the world and rooms are available at very cheap prices.

                    </CardText>
                    <CardText>
                        <small className="text-muted">
                            Use more features
                        </small>

                    </CardText>
                    <Button outline color="primary">Know More</Button>
                </CardBody>
            </Card>

        </div>
    )
};

export default Home;