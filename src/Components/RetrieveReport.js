import React from "react";
import { Button, Card, CardBody, CardText, CardTitle } from "reactstrap";

const RetrieveReport =()=>{
    return(

        <div>
            <Card className="text-center">

                <CardBody bg-primary>
                    <CardTitle tag="h5" className="display-5">
                        Download Report From Here
                    </CardTitle>
                    <CardText className="display-7">
                        Please Choose the report Type

                    </CardText>
                    
                    <Button outline color="primary">Income Report</Button>
                    <Button outline color="primary" style={{margin:15}}>Staff Report</Button>
                </CardBody>
            </Card>

        </div>
    )

    
};

export default RetrieveReport;