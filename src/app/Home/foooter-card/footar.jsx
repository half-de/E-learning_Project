import React from 'react'
import Image from 'next/image';
import dot from './images/dot.svg'
import pic from './images/footerpic.svg'
import './style.css'
import insta from './images/insta.svg'
import twiter from './images/twitar.svg'
import pont from './images/pont.svg'
import fb from './images/fb.svg'
import arr from './images/arr.svg'
import arro from './images/arro.svg'

const footar = (props) => {

    const data = [

        // cardNumber 1
        {
            heading: "What is dropshipping?",
            cantact: "Over 350,000 online businesses and entrepreneurs have used  Modalyst. It's the easiest way to find the best print on demand companies",


        },
          // cardNumber 2
          {
            heading: "What is refund policy?",
            cantact: "Over 350,000 online businesses and entrepreneurs have used  Modalyst. It's the easiest way to find the best print on demand companies",


        },
          // cardNumber 3
          {
            heading: "Who are your suppliers?",
            cantact: "Over 350,000 online businesses and entrepreneurs have used  Modalyst. It's the easiest way to find the best print on demand companies",


        },
          // cardNumber 4
          {
            heading: "Why choose us?",
            cantact: "Over 350,000 online businesses and entrepreneurs have used  Modalyst. It's the easiest way to find the best print on demand companies",


        },
          // cardNumber 5
          {
            heading: "What is the shipping cost?",
            cantact: "Over 350,000 online businesses and entrepreneurs have used  Modalyst. It's the easiest way to find the best print on demand companies",


        },
          // cardNumber 6
          {
            heading: "What is dropshipping?",
            cantact: "Over 350,000 online businesses and entrepreneurs have used  Modalyst. It's the easiest way to find the best print on demand companies",


        },
    ]




    return (
        <div>
            <div className='container'>



                <h6 className='learn text-center'>FAQs</h6>
                <div className='container'>
                    <Image src={dot} className='img-fluid m-3' />
                </div>
               


                <div class="row g-4  row-cols-1 row-cols-lg-2">
                    {data.map((item) => {
                        return (

                            <div class="feature col">
                                <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">

                                </div>
                                <div className=' p-4 rounded-3 border '>
                                    <h3 class="fs-2 text-body-emphasis">{item.heading}</h3>
                                    <p>{item.cantact}</p>

                                </div>
                            </div>


                        )
                    })}


                </div>             
                   
            </div>




            <div className='container mt-5'>


                <div className='row'>

                    <div className='col-md-2'></div>

                    <div className='col-md-8 position-relative  textDiv '>

                        <div className='text-center position-absolute container-fluid mt-3 '>
                            <h6 className='learn text1'>Join Us</h6>
                            <h2 className='text-white text text2'>Join Us by Creating Account <br /> or Start a Free Trial</h2>
                            <p className='text-white text3'>Install our top-rated dropshipping app to your e-commerce  site and get <br />access to US Suppliers,  AliExpress vendors, and the best dropshipping and custom products.</p>
                            <button class="btn Start-battom rounded-5  text-white m-1">Start Free Triali <Image src={arr} className='img-fluid' /></button>
                            <button type="button" class="btn btn-outline-light rounded-5 px-3  batan">Contact Us <span className='arow fw-bold'>➙</span></button>
                        </div>

                        <Image src={pic} className='img-fluid ' />

                    </div>

                    <div className='col-md-2'></div>
                </div>




            </div>


            <div className='bg-dark py-5'>
                <div className=' container py-5'>
                    <div class="container">
                        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-5  border-bottom">
                            <div class="col-md-3 mb-2 mb-md-0 text-center">
                                <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
                                    <a class="navbar-brand col-lg-3 me-0 fw-bold learn " href="#"><h5>eLearning</h5></a>
                                </a>
                            </div>

                            <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 text-white text-center">
                                <li><a href="#" class="nav-link px-2  text-white">Home</a></li>
                                <li><a href="#" class="nav-link px-2  text-white">Features</a></li>
                                <li><a href="#" class="nav-link px-2  text-white">Benefits</a></li>
                                <li><a href="#" class="nav-link px-2  text-white">Courses</a></li>
                                <li><a href="#" class="nav-link px-2  text-white">Blogs</a></li>
                                <li><a href="#" class="nav-link px-2  text-white">Login</a></li>
                            </ul>

                            <div class="col-md-3 text-end text-center">
                                <Image src={insta} />&nbsp;&nbsp;
                                <Image src={twiter} />&nbsp;&nbsp;
                                <Image src={pont} />&nbsp;&nbsp;
                                <Image src={fb} />
                            </div>
                        </div>
                    </div>
                    <div className='text-center py-4'>
                        <span className='text-white '>Copyright &copy;   2023 eLearning.com</span>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default footar