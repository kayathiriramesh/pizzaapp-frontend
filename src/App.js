import "./App.css";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import Cartscreen from "./screens/Cartscreen";
import Registerscreen from "./screens/Registerscreen";
import Loginscreen from "./screens/Loginscreen";
import Ordersscreen from "./screens/Ordersscreen";
import Adminscreen from "./screens/Adminscreen";
import Home from "./Home"

function App() {

  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Route path="/home" exact component={Home} />
       {/* <Route path="/" exact component={Homescreen} /> */}
        <Route path="/" exact component={Loginscreen} />
        <Route path="/homescreen" exact component={Homescreen} /> 
        <Route path="/cart" exact component={Cartscreen} />
        <Route path="/register" exact component={Registerscreen} />
        <Route path="/login" exact component={Loginscreen} />
        <Route path="/orders" exact component={Ordersscreen} />
        <Route path="/admin" component={Adminscreen} />
      </BrowserRouter>
    </div>
  );
}

export default App;
