import React, { useContext, useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBCollapse
} from 'mdb-react-ui-kit';
import {
    NavLink, useNavigate
} from 'react-router-dom';
import Logout from './Logout';
import ModalAdd from './ModalAdd';
import { AuthContext } from '../context/AuthContext';

export default function Header() {
  const [showBasic, setShowBasic] = useState(false);
  const navigate = useNavigate();
  // const { clientId } = AuthContext;
  const { auth, setAuth } = useContext(AuthContext);


  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand>AgentCloud</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 justify-content-center'>
            <MDBNavbarItem>
              <MDBNavbarLink >
              <NavLink to="/landing">Home </NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
                          <MDBNavbarLink >
                          <NavLink to="/cartList">Cart</NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
                          <MDBNavbarLink>
                          <NavLink to="/wishList">Wish List</NavLink>
            </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
        {auth ?
          <Logout/>
          : <NavLink to="/login">Login </NavLink>
       }

      </MDBContainer>
    </MDBNavbar>
  );
}