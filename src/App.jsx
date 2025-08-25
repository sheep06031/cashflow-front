import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import MainRouter from "./router/MainRouter/MainRouter";
import { useEffect, useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    if(localStorage.getItem("accessToken")) {
      setIsLogin(true)
    } else {
      setIsLogin(false)
    }
  }, [])

  return (
    <BrowserRouter>
      <Layout isLogin={isLogin} setIsLogin={setIsLogin}>
        <MainRouter />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
