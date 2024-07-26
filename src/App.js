
import Checker from "./components/Checker";

function App() {
  return (
    <div className="App">
      
      <h1 className='title'>Heroleague slots checker 0.3</h1>

      <div className="wrapper"> 
        <Checker url="https://heroleague.ru/api/event/event_format/lastrada2024_spb1" name="Велогонка"/>
        <Checker url="https://heroleague.ru/api/event/event_format/lastrada2024_spb2" name="Фестиваль"/>
        <Checker url="https://heroleague.ru/api/event/event_format/poseidon2024_spb" name="Poseidon"/>
      </div>

    </div>
  );
}

export default App;
