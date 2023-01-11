import Header from "./Components/Header";
import LoginPage from "./Pages/LoginPage";

import {
  Routes,
  Route
} from 'react-router-dom';
import Landing from "./Pages/Landing";
import CartList from "./Pages/CartList";
import WishList from "./Pages/WishList";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post["Content-Type"] = "application/vnd.api+json";
axios.defaults.headers.post["Accept"] = "application/vnd.api+json";
axios.defaults.withCredentials = true;
function App() {
  return (
    <>
      {/* <LoginPage/> */}
      <Header/>
      <Routes>
      <Route exact path='/landing' element={< Landing />}></Route>
      <Route exact path='/cartList' element={< CartList />}></Route>
        <Route exact path='/wishList' element={< WishList />}></Route>
        <Route exact path='/login' element={< LoginPage />}></Route>
      </Routes>
    </>
  );}


export default App;
