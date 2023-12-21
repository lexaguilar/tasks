import { Row, } from "reactstrap";
import { cardList,  cardTask } from "../../data";
import CardComponent from "../Card/CardComponent";


function HomePage() {
    return ( 
        <div>
            <Row>
                <h1 className="text-center">Inicio</h1>            
            </Row>            
            <Row>
                <div className="center">
                    <div className="col-md-4">
                        <CardComponent data={cardTask}  />
                    </div>
                    <div className="col-md-4">
                        <CardComponent data={cardList} />
                    </div>
                </div>              
            </Row>
        </div>
     );
}

export default HomePage;