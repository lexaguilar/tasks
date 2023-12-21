import React from "react";
import { useNavigate } from "react-router-dom";

import { Card, CardTitle, CardText, Button } from 'reactstrap';
import IData from "../../models/data";

interface IProps {
    data: IData
}

const CardComponent = ( { data } : IProps) => {

    const navigate = useNavigate();

    const { title, description, textButton } = data;

    const onclick = () => {
        navigate(data.link);
    }

    return (
        <Card body>
            <CardTitle tag="h5">
                {title}
            </CardTitle>
            <CardText>
                {description}
            </CardText>
            <Button onClick={onclick}>
                {textButton}
            </Button>
        </Card> 
    );
}

export default CardComponent;