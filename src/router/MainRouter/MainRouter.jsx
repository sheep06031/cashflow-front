import { Route, Routes } from "react-router-dom";
import Overview from "../../pages/Overview/Overview";
import Home from "../../pages/Home/Home";

function MainRouter() {
  return (
    <>
      <Routes>
        <Route path="/overview" element={<Overview />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default MainRouter;
