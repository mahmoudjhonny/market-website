import { Route, Routes } from "react-router-dom";
import "./App.css";
import Chat from "../src/pages/Chat";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
        {/* <main>
          <div className="mainContainer"></div>
          <div className="rightMenu"></div>
        </main> */}
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
