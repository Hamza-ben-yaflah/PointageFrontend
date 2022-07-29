import { Suspense } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Indetification from "./pages/identification/Indentification";
import ListMagasin from "./pages/listMagasin/ListMagasin";
import ListDemande from "./pages/listDemande/ListDemande";

import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import EmployeeId from "./components/employeeId/EmployeeId";
import ListUsers from "./pages/listUsers/ListUsers";
import SingleShop from "./pages/singleShop/SingleShop";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Suspense fallback={null}>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="employee" element={<EmployeeId />} />
              <Route path="login/employee" element={<Indetification />} />
              <Route path="users">
                <Route index element={<List />} />
                <Route path=":userId" element={<Single />} />
                <Route
                  path="new"
                  element={<New inputs={userInputs} title="Add Employé " />}
                />
              </Route>
              <Route path="admins" element={<ListUsers />} />
              <Route path="demande" element={<ListDemande />} />
              <Route path="products">
                <Route index element={<ListMagasin />} />
                <Route path=":productId" element={<SingleShop />} />

                <Route
                  path="new"
                  // element={<New inputs={productInputs} title="Add New Product" />}
                />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
