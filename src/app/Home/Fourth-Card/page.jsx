import React from 'react'
import './style.css'
import Image from 'next/image';
import bg from './images/bg.svg'
import arr from './images/arr.svg'


function page() {
    return (
        <div>
            <div className='container mt-5'>


                <div className='row'>

                    <div className='col-md-2'></div>

                    <div className='col-md-8 position-relative  textDiv '>

                        <div className='text-center position-absolute container-fluid mt-3 '>
                            <h6 className='learn text1'>Join Us</h6>
                            <h2 className='text-white text text2'>Join Us by Creating Account <br /> or Start a Free Trial</h2>
                            <p className='text-white text3'>Install our top-rated dropshipping app to your e-commerce  site and get <br />access to US Suppliers,  AliExpress vendors, and the best dropshipping and custom products.</p>
                            <button class="btn Start-battom rounded-5 px-3 text-white m-1">Start Free Triali <Image src={arr} /></button>
                            <button type="button" class="btn btn-outline-light rounded-5 px-3  batan">Contact Us <span className='arow fw-bold'>➙</span></button>
                        </div>

                        <Image src={bg} className='img-fluid ' />
                    </div>

                    <div className='col-md-2'></div>
                </div>




            </div>
        </div>
    )
}

export default page