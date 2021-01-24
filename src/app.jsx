import "./app.module.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/main/main";
import MyDiaryPage from "./components/myDiaryPage/myDiaryPage";

function App({ FileInput, authService, dbService }) {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Main authService={authService} />
          </Route>
          <Route path="/myDiaryPage">
            <MyDiaryPage
              FileInput={FileInput}
              dbService={dbService}
              authService={authService}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
