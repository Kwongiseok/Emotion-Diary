import "./app.module.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/main/main";
import MyDiaryPage from "./components/myDiaryPage/myDiaryPage";

function App({ authService }) {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Main authService={authService} />
          </Route>
          <Route path="/myDiaryPage">
            <MyDiaryPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
