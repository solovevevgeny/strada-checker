import { useDispatch, useSelector } from "react-redux" 
import {switchTheme} from "../store/applicationSlice";
import { useEffect } from "react";


export const ThemeSwitcher = () => {
    const theme = useSelector((state) => state.application.theme);
    const dispatch = useDispatch();
    
    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
      },[theme]);
    

    return (
        <>
            <span onClick={()=>dispatch(switchTheme())}>{theme} theme</span> 
        </>
    )
}

export default ThemeSwitcher