
import Checker from "./Checker"

import Info from "./Info"

export const List = () => {

    return (
        <>

                {/* <Info text="Какая справка требуется для участия в велогонке?" link="https://faq.heroleague.ru/knowledge-bases/4/articles/23904-kakaya-spravka-trebuetsya-dlya-uchastiya-v-velogonke" /> */}
                <Checker url="https://heroleague.ru/api/event/event_format/lastrada2024offroad_msc_1011" name="LA STRADA - ОФФ-РОУД 10 ноября 2024"/>
                <Checker url="https://heroleague.ru/api/event/event_format/zima2025_524901_1502" name="ГОНКА ГЕРОЕВ ЗИМА 15 ФЕВРАЛЯ"/>

                <Checker url="https://heroleague.ru/api/event/event_format/zima2025_ufa_2202" name="ГОНКА ГЕРОЕВ ЗИМА 22 ФЕВРАЛЯ"/>

                <Checker url="https://heroleague.ru/api/event/event_format/gonka2025_498817_2308" name="ГОНКА ГЕРОЕВ ЗИМА 23 Августа, Песочненский"/>


                
                {/* <Checker url="https://heroleague.ru/api/event/event_format/trail2024_524901_0510" name="Ночной ТРЕЙЛ 5 октября"/> */}
                {/* <Checker url="https://heroleague.ru/api/event/event_format/trail2024_524901_0610" name="Дневной ТРЕЙЛ 6 октября"/> */}

        </>
    )
    
    }
    
    export default List