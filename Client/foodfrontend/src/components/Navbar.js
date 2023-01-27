import React, { useState } from 'react';
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
    MDBInputGroup,
    MDBCollapse,
} from 'mdb-react-ui-kit';
import Search from './Search';

const Navbar = () => {
    const [showBasic, setShowBasic] = useState(false);

    const {searchRecipe} = Search();

    return (
        <>
      <MDBNavbar floating sticky expand='lg' light bgColor='light' className='p-0 mb-8'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='http://localhost:3000/'>
            <img
              src='/girl.png'
              height='40'
              alt=''
              loading='lazy'
              
            />
            YumiFood
          </MDBNavbarBrand>

          <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
            <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                <MDBNavbarItem>
                    <MDBNavbarLink active aria-current='page' href='http://localhost:3000/view-all-recipes'>
                        Show Recipes
                    </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                    <MDBNavbarLink active aria-current='page' href='http://localhost:3000/add-recipes'>
                        Add Recipes
                    </MDBNavbarLink>
                </MDBNavbarItem>
            </MDBNavbarNav>

            <MDBInputGroup tag="form" className='d-flex w-auto mb-1'>
                    <input className='form-control' placeholder="Type title"  aria-label="Search" type='Search' 
                    onChange={(event) => {
                      const value = event.target.value;
                      searchRecipe(value);
                    }}
                   
                    />
                    <MDBBtn color="info" outline >Search</MDBBtn>
            </MDBInputGroup>

        </MDBCollapse>   

        </MDBContainer>
      </MDBNavbar>
    </>
    );
}

export default Navbar;