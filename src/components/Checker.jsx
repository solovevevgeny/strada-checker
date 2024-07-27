
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
      <section className='sect'>
        <div className='container'><h1>{props.name}</h1></div>
        <div className="container list">
            {
                checkerState.map ((item) => {

                    let logo = item.event_type.logo;

                    if (!logo.includes('https://')) {
                        logo = "https://heroleague.ru" + logo;
                    }

                    return (
                            <div className="card shadow">
                                <div className="card-body" >

                                    <div className="card-body__left">
                                        <div class="card-body__city">
                                            {item.city.name_ru}
                                        </div>
                                        <div class="card-body__type">
                                            {item.title}
                                        </div>
                                        <div class="card-body__price">
                                            {item.price} &#8381;
                                        </div>
                                        <div class="card-body__count-title">
                                            Осталось слотов:
                                        </div>
                                        <div class="card-body__count">
                                            {(item.tickets_left.athlete === -1) ? 0 : item.tickets_left.athlete}
                                        </div>
                                    </div>

                                    <div className="card-body__right">
                                        <div className="card-body__logo">
                                            <img src={logo} alt="" width="100%"/>
                                        </div>
                                    </div>




                                </div>
                            </div>
                    )
                })
            }
        </div>
      </section>
       
    )
}

export default Checker;