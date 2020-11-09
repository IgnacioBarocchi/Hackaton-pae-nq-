import "./App.css";
import "./style.css";
import Nav from "./components/Nav";
import Main from "./components/Main";

import { COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE } from "./data/COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE";

function App() {
  return (
    <>
      <Nav db={COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE} />
      <Main db={COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE} />
    </>
  );
}

export default App;
