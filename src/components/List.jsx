
import Checker from "./Checker"

import Info from "./Info"

export const List = () => {

    return (
        <>

                <Info text="Перенос гонки с 11 августа на 29 сентября!" link="https://t.me/lastrada_official/907" />
                <Checker url="https://heroleague.ru/api/event/event_format/urban2024_spb" name="Гонка героев URBAN 31 августа 2024"/>
                <Checker url="https://heroleague.ru/api/event/event_format/lastrada2024_spb3" name="LaStrada OFFROAD 7 сентября 2024"/>
                <Checker url="https://heroleague.ru/api/event/event_format/velogonka2024" name="ДВЕ СТОЛИЦЫ 14 сентября 2024"/>
                

                <Checker url="https://heroleague.ru/api/event/event_format/lastrada2024_spb1" name="Велогонка 29 сентября 2024"/>
                <Checker url="https://heroleague.ru/api/event/event_format/lastrada2024_spb2" name="Фестиваль 29 сентября 2024"/>
                <Checker url="https://heroleague.ru/api/event/event_format/lastrada2024_sochi1" name="Велогонка СОЧИ 29 сентября 2024"/>
                
                

                {/* <Checker url="https://heroleague.ru/api/event/event_format/poseidon2024_spb" name="Poseidon 17 августа 2024"/> */}
                {/* <Checker url="https://heroleague.ru/api/event/event_format/eforum2024_2013348" name="ЗАБЕГ #МЫБЕРЕЖЕМ 4 сентября 2024"/> */}
                {/* <Checker url="https://heroleague.ru/api/event/event_format/trail2024_498817_2707" name="Trail"/> */}
                {/* <Checker url="https://heroleague.ru/api/event/event_format/lastrada2024_spb1" name="Велогонка"/> */}
        </>
    )
    
    }
    
    export default List