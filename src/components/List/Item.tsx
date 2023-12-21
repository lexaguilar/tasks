import { ListGroupItem } from "reactstrap";
import IElement from "../../models/element";

const Item = (element: IElement) => {
    return ( 
       
        <ListGroupItem key={element.id}>
            <img src={element.avatar} alt="" />
            {element.name}
        </ListGroupItem>
    
     );
}

export default Item;