import { Provider } from "react-redux";
import {  Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Auth } from "./components/auth/Auth";
import Content from "./components/content/Content";
import { store } from "./store";
function App() {
  return (
    <>
      <div className="App">
        <Provider store={store}>
          <Routes>
            <Route path="/login" element={<Auth/>}/>
            <Route path="/todo" element={<Content/>}/>
            <Route path="*" element={<Navigate to="/login"/>}/>
          </Routes>
        </Provider>
      </div>
    </>
  );
}

export default App;
