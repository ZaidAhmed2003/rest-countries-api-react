import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Countries from "./components/Countries";
import Header from "./components/Header";
import CountryDetail from "./components/CountryDetail";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/country/:countryName" element={<CountryDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
