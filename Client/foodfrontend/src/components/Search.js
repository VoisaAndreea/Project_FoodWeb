import React, { useEffect, useState } from "react";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBIcon,
    MDBCardTitle, MDBCol,
    MDBContainer,
    MDBRow
  } from "mdb-react-ui-kit";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Search = () => {

    const[search, setSearch] = useState();

   const searchRecipe = (title) =>{ fetch(`http://localhost:8080/view-all-recipes/recipe/${title}`)
          .then((response) => response.json())
          .then((data) =>{
            setSearch(data);
            console.log(data);
          } );
    };
    useEffect(() => {
        searchRecipe()
    }, []);
    return {searchRecipe};
}
export default Search;