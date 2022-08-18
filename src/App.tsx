import { Suspense, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeId from "./components/employeeId/EmployeeId";
import { DarkModeContext } from "./context/darkModeContext";
import { userInputs } from "./formSource";
import Home from "./pages/home/Home";
import Indetification from "./pages/identification/Indentification";
import ListClient from "./pages/listClient/ListClient";
import ListEmployee from "./pages/listEmployee/ListEmployee";
import ListRequest from "./pages/listRequest/ListRequest";
import ListShop from "./pages/listShop/ListShop";
import ListSuperVisor from "./pages/listSuperVisor/ListSuperVisor";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Signup from "./pages/signup/Signup";
import SingleEmployee from "./pages/singleEmployee/SingleEmployee";
import SingleShop from "./pages/singleShop/SingleShop";
import "./style/dark.scss";

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
                <Route index element={<ListEmployee />} />
                <Route path=":userId" element={<SingleEmployee />} />
                <Route
                  path="new"
                  element={<New inputs={userInputs} title="Add Employé " />}
                />
              </Route>
              <Route path="admins" element={<ListSuperVisor />} />
              <Route path="signup" element={<Signup />} />
              <Route path="demande" element={<ListRequest />} />
              <Route path="client" element={<ListClient />} />

              <Route path="products">
                <Route index element={<ListShop />} />
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
