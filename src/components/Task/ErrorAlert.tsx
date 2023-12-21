import { Alert } from "reactstrap";

function ErrorAlert({hasError}: {hasError: boolean}) {

    const errorMessage = "Please enter a description";

    return ( 
        <>
            {hasError && 
                <Alert color="danger">
                    {errorMessage}
                </Alert>
            }
        </>
        
     );
}

export default ErrorAlert;