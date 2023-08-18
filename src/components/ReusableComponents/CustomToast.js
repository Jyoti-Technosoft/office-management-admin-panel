import { useContext } from "react";
import { GlobalContext } from "../../ContextAPI/CustomContext";
import { Alert } from "@mui/material";

const CustomToast = (props) => {

    const { setShowToast } = useContext(GlobalContext);

    const handleToastClose = () =>{
        setShowToast({ show: false, msg: "", type: "success" });
      }
    
      setTimeout(handleToastClose, 3000);

    return (
        <>
            <Alert
                variant="standard"
                severity={props.toastType}  // success, warning, info, error
                sx={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px'
                }}
                onClose={handleToastClose}
            >
                {props.message}
            </Alert>
        </>
    )

}

export default CustomToast;