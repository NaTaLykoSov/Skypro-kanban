import { Routes, Route, useNavigate } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CardPage from "./pages/CardPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";
import ExitPage from "./pages/ExitPage";
import NewCardPage from "./pages/NewCardPage";
import { paths } from "./mock/paths";
import Layout from "./components/Layout/Layout";
import { useState } from "react";


const AppRoute = () => {
  const [isAuth, setAuth] = useState(false);
  const navigate = useNavigate();
      const onLogout = (e) => {
        e.preventDefault();
        setAuth(false);
        navigate (paths.LOGIN);
    };
  return (
    <Routes>
      <Route element={<Layout isAuth={isAuth}/>}>
        <Route path={paths.MAIN} element={<MainPage />}>
          <Route path={paths.EXIT} element={<ExitPage onLogout={onLogout}/>} />
          <Route path={paths.NEW_CARD} element={<NewCardPage />} />
          <Route path={paths.CARD} element={<CardPage />} />
        </Route>
      </Route>
      <Route path={paths.LOGIN} element={<LoginPage setAuth={setAuth}/>} />
      <Route path={paths.REGISTER} element={<RegisterPage  />} />
      <Route path={paths.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoute;
