import Header from "./Components/Header";
import LoginPage from "./Pages/LoginPage";

import {
  Routes,
  Route
} from 'react-router-dom';
import Landing from "./Pages/Landing";
import CartList from "./Pages/CartList";
import WishList from "./Pages/WishList";

function App() {
  return (
    <>
      {/* <LoginPage/> */}
      <Header/>
      <Routes>
      <Route exact path='/landing' element={< Landing />}></Route>
      <Route exact path='/cartList' element={< CartList />}></Route>
      <Route exact path='/wishList' element={< WishList />}></Route>
      </Routes>
    </>
  );}


export default App;
