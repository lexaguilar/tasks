import { useEffect, useState } from "react";
import IElement from "../models/element";

const useCallApi = (ulr:string) => {

    const [ elements, setElements ] = useState<Array<IElement>>();
    const [ loading, setLoading ] = useState<boolean>(false);

    const callURL = async () => {

        setLoading(true);

        const response = await fetch(ulr);
        const data = await response.json();

        setElements(data);
        setLoading(false);

    }

    useEffect(() => {
        callURL();
    }, []);

    return { elements, loading };

}

export default useCallApi;