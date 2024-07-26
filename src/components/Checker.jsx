
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function Checker(props) {

    
    const [checkerState, setCheckerState] = useState([]);
    
    useEffect(() => {
        const jsonUrl = props.url;
        axios.get(jsonUrl).then ((response) => {
            const allSlots = response.data.values;
            setCheckerState(allSlots);
        }) 
    }, []);
    
    return (
        <div className="action">
            <div><h3>{props.name}</h3></div>
            
            <div className="slots">

            
            {
                checkerState.map((item) => {

                    // const imageStyle = {
                    //     background: 'url('+item.event_type.logo + ')', 
                    //     backgroundRepeat: 'no-repeat', 
                    //     backgroundSize: "100%", 
                    //     backgroundPosition: "center" 
                    // }

                    return (
                            <div className="types shadow" >
                                {/* <div>{item.address}</div> */}
                                <div><h4>{item.title}</h4></div>
                                <div>{item.price} руб.</div>
                                <div>
                                    <div>Осталось слотов:</div>
                                    <div className="center"><h1>{(item.tickets_left.athlete === -1) ? 0 : item.tickets_left.athlete}</h1></div>
                                </div>
                          
                            </div>
                    )
                })
            }

            </div>
        </div>
    )
}

export default Checker;