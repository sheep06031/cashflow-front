import { Route, Routes } from "react-router-dom";
import Overview from "../../pages/Overview/Overview";

function MainRouter() {
  return (
    <>
      <Routes>
        <Route path="/overview" element={<Overview />} />
      </Routes>
    </>
  );
}

export default MainRouter;
