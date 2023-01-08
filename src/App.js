import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomePage } from "./pages/home-pages";
import { Header } from "./components/header";
import { Provider } from "react-redux";
import { store } from "./redux";

function App() {
  return (
      <Provider store={store}>
        <Router>
            <div className="App">
                <Header/>
            <Switch>
                <Route path="/">
                    <HomePage/>
                </Route>
            </Switch>
            </div>
        </Router>
      </Provider>
  );
}

export default App;
