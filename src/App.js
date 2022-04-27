import "./styles/app.scss";
import { Login } from "./pages/login/Login";
import { Home } from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import ToastAnimated from "./components/toast/Toast";

function App() {
  //Para ocultar a rota do usuário, quando tiver token vai para a home e quando não ele vai para o login
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken")
  );

  return (
    <>
      <Routes>
        {!accessToken ? (
          <Route path="*" element={<Login setAccessToken={setAccessToken} />} />
        ) : (
          <Route
            exact
            path="*"
            element={<Home setAccessToken={setAccessToken} />}
          />
        )}
      </Routes>
      <ToastAnimated />
    </>
  );
}

export default App;
