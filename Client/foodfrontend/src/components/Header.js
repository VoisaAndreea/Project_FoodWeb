import React from 'react';
import {
  MDBBtn
} from 'mdb-react-ui-kit';

const Header = () => {

    return (
        <>
      <div
        id='intro-example'
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://www.mashed.com/img/gallery/the-best-french-cooking-tips-you-never-knew-you-needed/l-intro-1673458588.jpg')",  height: 730 }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <MDBBtn
                className="m-2"
                tag="a"
                outline
                size="lg"
                href={`/view-all-recipes`}
              >
                Go to recipe
              </MDBBtn>
              <MDBBtn
                className="m-2"
                tag="a"
                outline
                size="lg"
                target="_blank"
                href=''
              >
                Sing in
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
    </>
    );

}

export default Header;