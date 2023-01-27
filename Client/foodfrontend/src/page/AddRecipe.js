import React, {useState} from 'react';
import {toast} from 'react-toastify'
import {
    MDBInput,
    MDBBtn
  } from 'mdb-react-ui-kit';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AddRecipe = () => {

          function newRecipes(title, image, ingredients, instruction) {
            fetch('http://localhost:8080/add-recipe', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({title:title, image:image, extendedIngredients:ingredients, instructions:instruction}),
            }).then((response)=>response.text());
            toast.info("New recipe posted successfully")
          }


        const [title, setTitle] = useState('');
        const [image, setImage] = useState('');
        const [ingredients, setIngredients] = useState('');
        const [instruction, setInstraction] = useState('');


    
    return (
        <>
        <Navbar></Navbar>
            <form  className='position-absolute top-50 start-50 translate-middle w-50'
            onSubmit={(e) => {
                e.preventDefault();
                setTitle('');
                setImage('');
                setIngredients('');
                setInstraction('');
                newRecipes(title, image, ingredients, instruction);
                console.log(title,image,ingredients,instruction);
            }}>
                <MDBInput  type='text' name='title' wrapperClass='mb-4' label='Title' value={title}
                                    onChange={(e) => {
                                        setTitle(e.target.value);
                                    }}/>
                
                <MDBInput  type='url' id='image' wrapperClass='mb-4' label='Image URL' 
                            value={image}
                            onChange={(e) => {
                                setImage(e.target.value);
                            }}/>
                <MDBInput wrapperClass='mb-4'  id='ingredients' rows={4} label='Ingredients' 
                             value={ingredients}
                             onChange={(e) => {
                                 setIngredients(e.target.value);
                             }}/>

                <MDBInput wrapperClass='mb-4'  id='instructionn' rows={10} label='Instruction' 
                           value={instruction}
                           onChange={(e) => {
                               setInstraction(e.target.value);
                           }}/>


                <MDBBtn   className='me-1' color='info'  block 
                    >
                        ADD
                </MDBBtn>
            </form>
    <Footer></Footer>
    </>
    );
}

export default AddRecipe;