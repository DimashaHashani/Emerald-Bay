
import React from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
const Register = () => {
  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'}}>
    <div className='mask gradient-custom-3'></div>
    <MDBCard className='m-5' style={{maxWidth: '600px'}}>
      <MDBCardBody className='px-5'>
        <h2 className="text-uppercase text-center mb-5">Create an account</h2>
        <MDBInput wrapperClass='mb-4' label=' Name' size='lg' id='form1' type='text'/>
        <MDBInput wrapperClass='mb-4' label=' Address' size='lg' id='form2' type='text'/>
        <MDBInput wrapperClass='mb-4' label=' Email' size='lg' id='form2' type='email'/>
        <MDBInput wrapperClass='mb-4' label=' Phone Number' size='lg' id='form2' type='tel'/>
        <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password'/>
        <MDBInput wrapperClass='mb-4' label='ReEnter  password' size='lg' id='form4' type='password'/>
        <div className='d-flex flex-row justify-content-center mb-4'>
          <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
        </div>
        <MDBBtn className=' fw-bold' size='lg'>Register</MDBBtn>
        <br></br>
        <br></br>
        <p className="fst-normal">Have already an account?    
        <a href="#" className="text-decoration-none">Login here</a></p>
      </MDBCardBody>
    </MDBCard>
  </MDBContainer>);
}






export default Register;