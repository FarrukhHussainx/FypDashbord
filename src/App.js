import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import New from "./pages/new/New";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import OrderState from "./context/OrderState";
import ListCompanies from "./pages/list/ListCompany";
import ListOrder from "./pages/list/ListOrder";
import CreateService from "./pages/list/ListCreateService";
import CreateWorker from "./pages/list/ListCreateWorker";

function App() {
  return (
    <OrderState>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="users">
                <Route index element={<List />} />
                <Route path=":userId" element={<Single />} />
                <Route path="new" element={<New />} />
              </Route>
              <Route path="companies">
                <Route index element={<ListCompanies />} />
                <Route path=":productId" element={<Single />} />
                <Route path="new" element={<New />} />
              </Route>
              <Route path="orders">
                <Route index element={<ListOrder />} />
                <Route path=":productId" element={<Single />} />
                <Route path="new" element={<New />} />
              </Route>
              <Route path="createservice">
                <Route index element={<CreateService />} />
                <Route path=":productId" element={<Single />} />
                <Route path="new" element={<New />} />
              </Route>
              <Route path="createworker">
                <Route index element={<CreateWorker />} />
                <Route path=":productId" element={<Single />} />
                <Route path="new" element={<New />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </OrderState>
  );
}

export default App;
