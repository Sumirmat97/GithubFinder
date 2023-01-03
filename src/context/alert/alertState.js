import { useReducer } from "react"
import AlertReducer from './alertReducer';
import AlertContext from "./alertContext"
import { REMOVE_ALERT, SET_ALERT } from "../types";


const AlertState = props => {

    const initialState = null;
    
    // Set alerts
    const setAlert = (msg, type) => {
        dispatch({
            type: SET_ALERT, 
            payload: {msg, type}
        });

        setTimeout(() => dispatch({type: REMOVE_ALERT}), 5000);
    }

    const [state, dispatch] = useReducer(AlertReducer, initialState)

    return <AlertContext.Provider
        value={{
            alert: state,
            setAlert
        }}
        >
        {props.children}
    </AlertContext.Provider>
}

export default AlertState;