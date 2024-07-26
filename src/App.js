
import Checker from "./components/Checker";

function App() {
  return (
    <div className="App">
      
      <div className="wrapper"> 
        <Checker url="https://heroleague.ru/api/event/event_format/lastrada2024_spb1" />
        <Checker url="https://heroleague.ru/api/event/event_format/lastrada2024_spb2"/>
      </div>

    </div>
  );
}

export default App;
