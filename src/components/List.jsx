
import Checker from "./Checker"

export const List = () => {

    return (
        <>
                <Checker url="https://heroleague.ru/api/event/event_format/lastrada2024_spb1" name="Велогонка"/>
                <Checker url="https://heroleague.ru/api/event/event_format/lastrada2024_spb2" name="Фестиваль"/>
                <Checker url="https://heroleague.ru/api/event/event_format/lastrada2024_sochi1" name="Велогонка СОЧИ"/>
                <Checker url="https://heroleague.ru/api/event/event_format/poseidon2024_spb" name="Poseidon"/>
                <Checker url="https://heroleague.ru/api/event/event_format/urban2024_spb" name="Гонка героев URBAN"/>
                <Checker url="https://heroleague.ru/api/event/event_format/eforum2024_2013348" name="ЗАБЕГ #МЫБЕРЕЖЕМ"/>
                {/* <Checker url="https://heroleague.ru/api/event/event_format/trail2024_498817_2707" name="Trail"/> */}
                {/* <Checker url="https://heroleague.ru/api/event/event_format/lastrada2024_spb1" name="Велогонка"/> */}
        </>
    )
    
    }
    
    export default List