
import { Button } from "reactstrap";
import ListTasks from "../Task/ListTasks";
import NewTask from "../Task/NewTask";

function TasksPage() {

    const back = () => window.history.back();

    return ( <div>
        
        <h1>Tasks</h1>
        <Button outline onClick={back}>Back</Button>
        <ListTasks />
        <NewTask open={false} />
        

    </div> );
}

export default TasksPage;