import logo from "./logo.svg";
import "./App.css";
import "./style.css";
import Nav from "./Nav";
import Main from "./Main";
import { COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE } from "./COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE";

function App(props) {
  return (
    <>
      <Nav />
      <Main db={COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE} />
    </>
  );
}

export default App;
