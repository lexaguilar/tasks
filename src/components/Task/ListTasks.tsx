import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { remove } from "../../store/features/task/taskSlice";
import { CloseButton } from "reactstrap";

const ListTasks = () => {

    const useAppDispatch: () => AppDispatch = useDispatch;
    const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

    const tasks = useAppSelector((state) => state);
    const dispatch = useAppDispatch();

    return ( <div>        
        {
        tasks &&
        tasks.map((item, index) => {
          return (
            <div key={index}>     
                <div className="d-between boxshadow">
                    <p>{index+1}-{item.description}</p>
                    <CloseButton onClick={() => dispatch(remove(index))} />
                </div>       
            </div>
          )
        })
      }
    </div> );
}

export default ListTasks;