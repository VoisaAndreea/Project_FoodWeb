import React, {useEffect, useState} from 'react';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle, MDBCol,
  MDBContainer,
  MDBRow
} from "mdb-react-ui-kit";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


const Recipes = () => {
    const [recipe, setRecipes] = useState();


    useEffect(() => {

      fetch("http://localhost:8080/view-all-recipes")
          .then((response) => response.json())
          .then((data) =>{
            setRecipes(data)
            console.log(data)
          } );
    

  },[])

    const onDelete = (title) => {
    // alert(title);
    fetch("/view-all-recipes/recipe/delete/" + title, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            }).then((response)=>response.text());
  }

  return (
    <>
    <Navbar></Navbar>
      <MDBContainer className="container-fluid">
                  <MDBRow className='row-cols-1 row-cols-md-3 g-5'>
                          {recipe?.map((recipe) => {
                              return <MDBCol>
                              <MDBCard key={recipe.title} className='h-100' alignment='center' floating>
                                  <MDBCardImage  src={recipe.image} position="top"/>
                                  <MDBCardBody>
                                      <MDBCardTitle >{recipe.title}</MDBCardTitle>
                                      <MDBBtn href={`/view-all-recipes/recipe/${recipe.title}`} outline rounded className='mx-2' color='info' >See recipe</MDBBtn>
                                      <MDBBtn onClick={() => onDelete(recipe.title)} outline rounded className='mx-2' color='danger' >Delete recipe</MDBBtn>
                                      
                                  </MDBCardBody>
                              </MDBCard> <br></br></MDBCol>
                     })}
                  </MDBRow>
              </MDBContainer>
              <br></br>
              <Footer></Footer>
      </>
  );
  }

  export default Recipes;