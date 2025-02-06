import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Update from "./pages/Update";
import List from "./pages/List";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/update/:studentId" element={<Update />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
