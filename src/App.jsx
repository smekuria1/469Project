import Users from "./components/Users";
import Home from "./components/Home";
import About from "./components/About";
import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let route;
  switch (window.location.pathname) {
    case "/Users":
      route = <Users />;
      break;
    case "/About":
      route = <About />;
      break;
    default:
      route = <Home />;
  }

  return (
    <div className="App">
      <Navigation></Navigation>
      {route}
    </div>
  );
}

export default App;
