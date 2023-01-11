import React, { useContext, useEffect, useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
} from "mdb-react-ui-kit";

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Modalview from "./Modalview";
import ModalAdd from "./ModalAdd";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
function Items() {
  const { auth } = useContext( AuthContext);
  const [allItems, setallItems] = useState([]);

  useEffect(() => {
    axios
      .get("api/items")
      .then((res) => {
        console.log(res);
        setallItems(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <>
      {auth ? <ModalAdd /> : <></>} 
    
          <MDBContainer fluid className="my-5">
        <MDBRow>
        {allItems?.map((item) => { 
        return (
            <MDBCol md="12" lg="4" className="mb-4 mb-lg-0">
                      <MDBCard key={item.id} >
                          <FavoriteIcon  color="error"/> 
                          <FavoriteBorderOutlinedIcon/>
                <MDBCardImage 
                  src={item.image}
                  position="top"
                />
                <MDBCardBody>
                  <div className="d-flex justify-content-between">
                    
                   
                  </div>
    
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">{item.name}</h5>
                      <h5 className="text-dark mb-0">${ item.price}</h5>
                  </div>
    
                  <div class="d-flex justify-content-between mb-2">
                                  <a href="" className="btn btn-danger"> delete</a>
                                  <Modalview/>
                                  <a href="" className="btn btn-warning"> Add to cart</a>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
       
        );
      })}
         </MDBRow>
          </MDBContainer>
      
   
      </>
  );
}

export default Items;