import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';


const Foo = () => {
    return (
        <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
            {/*<section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>*/}
                {/*<div className='me-5 d-none d-lg-block'>*/}
                {/*    <span>Get connected with us on social networks!:</span>*/}
                {/*</div>*/}

            {/*    <div>*/}
            {/*        <a href='' className='me-4 text-reset'>*/}
            {/*            <MDBIcon color='secondary' fab icon='facebook-f' />*/}
            {/*        </a>*/}
            {/*        <a href='' className='me-4 text-reset'>*/}
            {/*            <MDBIcon color='secondary' fab icon='twitter' />*/}
            {/*        </a>*/}
            {/*        <a href='' className='me-4 text-reset'>*/}
            {/*            <MDBIcon color='secondary' fab icon='google' />*/}
            {/*        </a>*/}
            {/*        <a href='' className='me-4 text-reset'>*/}
            {/*            <MDBIcon color='secondary' fab icon='instagram' />*/}
            {/*        </a>*/}
            {/*        <a href='' className='me-4 text-reset'>*/}
            {/*            <MDBIcon color='secondary' fab icon='linkedin' />*/}
            {/*        </a>*/}
            {/*        <a href='' className='me-4 text-reset'>*/}
            {/*            <MDBIcon color='secondary' fab icon='github' />*/}
            {/*        </a>*/}
            {/*    </div>*/}
            {/*</section>*/}

            <section className='py-4'>
                <MDBContainer className='text-center text-md-start'>
                    <MDBRow className='mt-1'>
                        <MDBCol md='1' lg='1' xl='3' className=' mb-5'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <MDBIcon color='secondary' icon='gem' className='me-0' />
                                Everything store
                            </h6>
                            <p>
                                The best store you ever could find in whole internet
                            </p>
                        </MDBCol>


                        <MDBCol md='4' lg='5' xl='3' className='mx-auto mb-md-0 mb-2'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <MDBIcon color='secondary' icon='envelope' className='me-0' />
                                nickony.ee@gmail.com
                            </p>
                            <p>
                                <MDBIcon color='secondary' icon='phone' className='me-0' /> + 01 234 567 88
                            </p>
                            <p>
                                <MDBIcon color='secondary' icon='print' className='me-0' /> + 01 234 567 89
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2023 Copyright: nickony.ee@gmail.com
            </div>
        </MDBFooter>
    );
};

export default Foo;