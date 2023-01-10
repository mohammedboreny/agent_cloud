import React from "react";
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
function Items() {




  return (
    <MDBContainer fluid className="my-5">
      <MDBRow>
        <MDBCol md="12" lg="4" className="mb-4 mb-lg-0">
                  <MDBCard>
                      <FavoriteIcon  color="error"/> 
                      <FavoriteBorderOutlinedIcon/>
            <MDBCardImage 
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp"
              position="top"
            />
            <MDBCardBody>
              <div className="d-flex justify-content-between">
                <p className="small">
                  <a href="#!" className="text-muted">
                    Laptops
                  </a>
                </p>
                <p className="small text-danger">
                  <s>$1099</s>
                </p>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <h5 className="mb-0">HP Notebook</h5>
                <h5 className="text-dark mb-0">$999</h5>
              </div>

              <div class="d-flex justify-content-between mb-2">
                              <a href="" className="btn btn-danger"> delete</a>
                              <Modalview/>
                              <a href="" className="btn btn-warning"> Add to cart</a>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Items;