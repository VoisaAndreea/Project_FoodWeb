import React, {useEffect, useState} from 'react';
import Navbar from '../components/Navbar';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBAccordionItem,
    MDBAccordion
  } from "mdb-react-ui-kit";

const ShowRecipes = ({match}) => {
    const [recipeOne, setRecipesOne] = useState();
 

    useEffect(() => {

      fetch(`http://localhost:8080/view-all-recipes/recipe/${match.params.title}`)
          .then((response) => response.json())
          .then((data) =>{
            setRecipesOne(data)
            console.log(data)
          } );

  },[])

  return (
    <>
    <Navbar></Navbar>
   
                  
            {recipeOne?.map((recipeOne) => {
                return (
                  <MDBContainer><MDBRow><MDBCol size='6'>
                    <h2 className='font-monospace text-top'>{recipeOne.title}</h2>
                    <img
                      src={recipeOne.image}
                      className='img-fluid hover-shadow w-75'
                    />
                    </MDBCol>
                    
                    <MDBCol size='6'>
                    <MDBAccordion flush initialActive={1}>
                      <MDBAccordionItem collapseId={1} headerTitle='Ingredients '>
                        {recipeOne.ingredients} 
                      </MDBAccordionItem>
                      <MDBAccordionItem collapseId={2} headerTitle='Instructions '>{recipeOne.instructions}</MDBAccordionItem>
                    </MDBAccordion></MDBCol></MDBRow>
                  </MDBContainer>
                );               
            })}
              
      </>
  );

}

export default ShowRecipes;
