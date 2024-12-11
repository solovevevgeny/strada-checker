
import Checker from "./Checker"

import Info from "./Info"

export const List = () => {

    return (
        <>

                {/* <Info text="Какая справка требуется для участия в велогонке?" link="https://faq.heroleague.ru/knowledge-bases/4/articles/23904-kakaya-spravka-trebuetsya-dlya-uchastiya-v-velogonke" /> */}

                
                <Checker url="https://heroleague.ru/api/event/event_format/doroga2025" name="Дорога Жизни 26 января"/>
                <Checker url="https://heroleague.ru/api/event/event_format/zabeg2025_498817" name="Забег.РФ 24 мая"/>
                <Checker url="https://heroleague.ru/api/event/event_format/trail2025_498817_2007" name="Trail 20 июля"/>
                <Checker url="https://heroleague.ru/api/event/event_format/gonka2025_498817_2308" name="Гонка Героев 23 августа"/>
                <Checker url="https://heroleague.ru/api/event/event_format/urban2025_spb" name="Городские препятствия 11 октября"/>

                <Checker url="https://heroleague.ru/api/event_format/event/lastrada2024criterium_msc" name="La Strada Критериум"/>
         
        </>
    )
    
    }
    
    export default List