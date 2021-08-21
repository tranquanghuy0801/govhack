import { Map } from "./component/Map/Map";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Map selectedSuburb="KelvinGrove" onSuburbChange={() => {}} />
    </div>
  );
}

export default App;
