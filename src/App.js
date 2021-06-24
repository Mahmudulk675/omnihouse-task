import { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ConfirmContract from "./pages/confirmContract/ConfirmContract";
import InputPage from "./pages/Input/InputPage";
import PreviewAndEdit from "./pages/previewAndEditPage/PreviewAndEditPage";

export const UserContext = createContext();

function App() {
  const [userInput, setUserInput] = useState([]);
  const [bills, setBills] = useState([]);
  console.log(bills);
  console.log(userInput);
  return (
    <UserContext.Provider value={{ userInput, setUserInput, bills, setBills }}>
      <div className="app">
        <Router>
          <Switch>
            <Route path="/confirm">
              <ConfirmContract />
            </Route>
            <Route path="/edit">
              <PreviewAndEdit />
            </Route>
            <Route path="/" exact>
              <InputPage />
            </Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
