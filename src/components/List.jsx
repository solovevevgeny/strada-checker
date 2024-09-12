
import Checker from "./Checker"

import Info from "./Info"

export const List = () => {

    return (
        <>

                <Info text="Какая справка требуется для участия в велогонке?" link="https://faq.heroleague.ru/knowledge-bases/4/articles/23904-kakaya-spravka-trebuetsya-dlya-uchastiya-v-velogonke" />
                <Info text="требования к оборудованию и снаряжению для участия в велогонке/велофестивале/оффроуд?" link="https://faq.heroleague.ru/knowledge-bases/4/articles/23896-kakie-trebovaniya-k-oborudovaniyu-i-snaryazheniyu-dlya-uchastiya-v-velogonkevelofestivaleoffroud" />
                
                <Checker url="https://heroleague.ru/api/event/event_format/lastrada2024_spb1" name="Велогонка 29 сентября 2024"/>

                <Checker url="https://heroleague.ru/api/event/event_format/lastrada2024_spb2" name="Фестиваль 29 сентября 2024"/>
                <Checker url="https://heroleague.ru/api/event/event_format/lastrada2024_sochi1" name="Велогонка СОЧИ 29 сентября 2024"/>
                
                {/* <Checker url="https://heroleague.ru/api/event/event_format/urban2024_spb" name="Гонка героев URBAN 31 августа 2024"/> */}
                {/* <Checker url="https://heroleague.ru/api/event/event_format/lastrada2024_spb3" name="LaStrada OFFROAD 7 сентября 2024"/> */}
                {/* <Checker url="https://heroleague.ru/api/event/event_format/velogonka2024" name="ДВЕ СТОЛИЦЫ 14 сентября 2024"/> */}


                <Checker url="https://heroleague.ru/api/event/event_format/gonka2024_524901_1409" name="ГОНКА ГЕРОЕВ 14 СЕНТЯБРЯ"/>


                <Checker url="https://heroleague.ru/api/event/event_format/trail2024_524901_0510" name="Ночной ТРЕЙЛ 5 октября"/>
                <Checker url="https://heroleague.ru/api/event/event_format/trail2024_524901_0610" name="Дневной ТРЕЙЛ 6 октября"/>
                
                
                

                {/* <Checker url="https://heroleague.ru/api/event/event_format/poseidon2024_spb" name="Poseidon 17 августа 2024"/> */}
                {/* <Checker url="https://heroleague.ru/api/event/event_format/eforum2024_2013348" name="ЗАБЕГ #МЫБЕРЕЖЕМ 4 сентября 2024"/> */}
                {/* <Checker url="https://heroleague.ru/api/event/event_format/trail2024_498817_2707" name="Trail"/> */}
                {/* <Checker url="https://heroleague.ru/api/event/event_format/lastrada2024_spb1" name="Велогонка"/> */}
        </>
    )
    
    }
    
    export default List