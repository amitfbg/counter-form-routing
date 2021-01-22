import Counter from "./components/counter/Counter";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import FormData from "./components/form-data/FormData";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./theme/theme";
import GlobalStyle from "./theme/globalStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Counter} exact />
          <Route path="/form" component={Form} exact />
          <Route path="/success" component={FormData} exact />
          <Route render={() => <Redirect to={{ pathname: "/" }} />} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
