import "./App.css";
import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import HomePage from "./components/views/HomePage";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
