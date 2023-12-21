import { useEffect } from "react";
import useCallApi from "../../hooks/useCallApi";
import { ListGroup, ListGroupItem } from "reactstrap";
import Loading from "../Loading/Loading";
import Item from "./Item";

interface IProps {
    url: string
}

function List({url}: IProps) {

    const { elements, loading } = useCallApi(url);
   
    return ( 
        <Loading loading={loading}>

            <ListGroup>
                {elements?.map((element) => <Item key={element.id} {...element} />)}
            </ListGroup>

        </Loading>
        )
       
     ;
}

export default List;