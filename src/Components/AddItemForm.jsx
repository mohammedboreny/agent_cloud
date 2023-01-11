import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";

export default function AddItemForm() {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");


  const auth_user_id = localStorage.getItem("userId");

  const handleSubmit = (e) => {
    e.preventDefault();
    const registerAccount = {
      name: name,
      image: image,
      price: price,
      user_id: auth_user_id
    };
    // axios.get("/sanctum/csrf-cookie").then((res) => {
    axios.post(`api/storeItem`, registerAccount).then((res) => {
      console.log(res);
      Swal.fire(" Submitted", "success");
    });
    // });
  };

    return (

        
      <form method="Post" onSubmit={handleSubmit}>
        
        <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      {" "}
            name
          </label>
                    <textarea
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                      className="form-control"
                      id="name"
                    ></textarea>
        </div>
        <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      {" "}image </label>
                    <input
                      type="file"
                      onChange={(e) => setImage(e.target.value)}
                      className="form-control"
                      id="image"
                    />
        </div>
        <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      {" "}
                     price
                    </label>
                    <input
                      type="text"
                      onChange={(e) => setPrice(e.target.value)}
                      className="form-control"
                      id="price"
          />             
        </div>
        <button type="submit" className="btn btn-primary">
                      Add 
                    </button>
</form>
    );
}