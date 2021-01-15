import "./App.css";
import Counter from "./components/counter/Counter";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import FormData from "./components/form-data/FormData";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Counter} exact />
          <Route path="/form" component={Form} exact />
          <Route path="/success" component={FormData} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
