
import { Button } from "reactstrap";
import List from "../List/List";

function ListPage() {

    const back = () => window.history.back();

    return ( 
    
        <div>
            <h4>List Page</h4>  
            <Button outline onClick={back}>Back</Button>        
            <List url="https://6172cfe5110a740017222e2b.mockapi.io/elements" />           
        </div> 
    );
}

export default ListPage;