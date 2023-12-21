import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { AppDispatch } from "../../store/store";
import { add } from "../../store/features/task/taskSlice";
import { Button, Input } from "reactstrap";
import ErrorAlert from "./ErrorAlert";

interface Props {
    open: boolean
}

const NewTask: React.FC<Props> = ({open}) => {

    const [ isOpen, setIsOpen ] = useState<boolean>(open);
    const [ hasError, setHasError ] = useState<boolean>(false);
    const [ description, setDescription ] = useState<string>("");

    const useAppDispatch: () => AppDispatch = useDispatch;
    const dispatch = useAppDispatch();

    const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value != "")
            setHasError(false);
        setDescription(e.target.value);
    }
    const addTask = () => {

        if (description === "") {

            setHasError(true);            
            return;
        
        };

        dispatch(add({description, completed:false}));
        closeDialog();

    }

    const closeDialog = () => {
        setIsOpen(false);
        setDescription("");
        setHasError(false);
    }

    return ( 
        <div className="p-10">
            <Button color="primary" onClick={() => setIsOpen(!isOpen)}>Add New Task</Button>
            <dialog open={isOpen}>
                <label htmlFor="description">Task Description</label>
                <Input color="danger" value={description} placeholder="Add new task" onChange={onChangeText} />
                <ErrorAlert hasError={hasError} />
                <br />
                <div className="d-between">
                    <Button color="success" onClick={addTask}>Add to list</Button>
                    <Button  onClick={closeDialog}>Close</Button>  
                </div>

            </dialog>
        </div>
     );
}

export default NewTask;