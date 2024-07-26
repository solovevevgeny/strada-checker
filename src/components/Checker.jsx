
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
        <div>

            {
                checkerState.map((item) => {
                    return (
                            <div className="types shadow">
                                <div><h2>{item.address}</h2></div>
                                <div><h4>{item.title}</h4></div>
                                <div>{item.price} руб.</div>
                                <div>
                                    <div>Осталось слотов:</div>
                                    <div className="center"><h1>{(item.tickets_left.athlete === -1) ? 0 : item.tickets_left.athlete}</h1></div>
                                </div>
                                {/* <div>
                                    <button className="btn">Купить</button>
                                </div> */}

                            </div>
                    )
                })
            }
        </div>
    )
}

export default Checker;