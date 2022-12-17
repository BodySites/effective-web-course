import "./styles/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import router from "./Router";
import { useRoutes } from "react-router-dom";

function App() {
  const routerElement = useRoutes(router);
  return (
    <div className="App">
      <Header />
      {routerElement}
      <Footer />
    </div>
  );
}

export default App;
