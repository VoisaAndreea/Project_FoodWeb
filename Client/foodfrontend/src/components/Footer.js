import React, {Component} from "react";
import {
    MDBFooter
} from "mdb-react-ui-kit";


const Footer = () => {
    return(
        <MDBFooter className='bg-light text-center text-white fixed-bottom'>
            
          <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2023 Project in Spring Boot and React
          </div>
      </MDBFooter>

    )

}

export default Footer;
