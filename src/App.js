
import Checker from "./components/Checker";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  return (
    <div className="App">
      

      <h1 className='title'>Heroleague slots checker 0.3</h1>

      <div className="wrapper"> 

        <div className="theme-switcher">
          <ThemeSwitcher />
        </div>

        <Checker url="https://heroleague.ru/api/event/event_format/lastrada2024_spb1" name="Велогонка"/>
        <Checker url="https://heroleague.ru/api/event/event_format/lastrada2024_spb2" name="Фестиваль"/>
        <Checker url="https://heroleague.ru/api/event/event_format/lastrada2024_sochi1" name="Велогонка СОЧИ"/>

        <Checker url="https://heroleague.ru/api/event/event_format/poseidon2024_spb" name="Poseidon"/>
        <Checker url="https://heroleague.ru/api/event/event_format/urban2024_spb" name="Гонка героев URBAN"/>
        <Checker url="https://heroleague.ru/api/event/event_format/trail2024_498817_2707" name="Trail"/>
      </div>

    </div>
  );
}

export default App;
