import Landing from "./components/Landing";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AnotherLayout from "./components/AnotherLayout";
import { ProtectedRoute } from "./protected";


function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
          <ProtectedRoute exact path="/an" component={AnotherLayout} />
          <Route path="*" component={() => {
            window.location.href = "/";
          }} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
