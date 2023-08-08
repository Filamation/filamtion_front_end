import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ItemGrid from "./components/item-grid/ItemGrid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1 className="Main-Title">Filamation</h1>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<ItemGrid />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
