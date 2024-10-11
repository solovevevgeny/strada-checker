
import Checker from "./Checker"

import Info from "./Info"

export const List = () => {

    return (
        <>

                {/* <Info text="Какая справка требуется для участия в велогонке?" link="https://faq.heroleague.ru/knowledge-bases/4/articles/23904-kakaya-spravka-trebuetsya-dlya-uchastiya-v-velogonke" /> */}
                {/* <Info text="требования к оборудованию и снаряжению для участия в велогонке/велофестивале/оффроуд?" link="https://faq.heroleague.ru/knowledge-bases/4/articles/23896-kakie-trebovaniya-k-oborudovaniyu-i-snaryazheniyu-dlya-uchastiya-v-velogonkevelofestivaleoffroud" /> */}
                {/* <Info text="велогонка LaStrada в Санкт-Петербурге 29 сентября отменена" link="https://t.me/c/1661790748/145060" /> */}
                
                {/* <Checker url="https://heroleague.ru/api/event/event_format/lastrada2024_spb1" name="Велогонка 29 сентября 2024"/> */}
                {/* <Checker url="https://heroleague.ru/api/event/event_format/lastrada2024_spb2" name="Фестиваль 29 сентября 2024"/> */}
                <Checker url="https://heroleague.ru/api/event/event_format/lastrada2024_sochi1" name="Велогонка СОЧИ 12 октября 2024"/>
                <Checker url="https://heroleague.ru/api/event/event_format/lastrada2024offroad_msc_1011" name="LA STRADA - ОФФ-РОУД 10 ноября 2024"/>


                
                {/* <Checker url="https://heroleague.ru/api/event/event_format/trail2024_524901_0510" name="Ночной ТРЕЙЛ 5 октября"/> */}
                {/* <Checker url="https://heroleague.ru/api/event/event_format/trail2024_524901_0610" name="Дневной ТРЕЙЛ 6 октября"/> */}

        </>
    )
    
    }
    
    export default List