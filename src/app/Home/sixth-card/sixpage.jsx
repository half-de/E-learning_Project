import React from 'react'
import Image from 'next/image';
import './style.css'
import pic1 from './images/pic1.svg'
import level from './images/level.svg'
import pic2 from './images/pic2.svg'
import pic3 from './images/pic3.svg'
import line from './images/line.svg'
import arr from './images/arr.svg'
import card from './images/card.svg'
import icon from './images/icon.svg'

const sixpage = (props) => {









  return (
    <div className='bg-dark p-4'>

      <div className='container mt-5'>
        <div className='text-center '>
          <h3 className='learn '>Our Courses</h3>
          <h1 className='text-white'>Our Best Courses Offered and Teach <br /> By Best of The Instructors</h1>
          <p className='mt-4 text-white'>Install our top-rated dropshipping app to your e-commerce site and get <br /> access to US Suppliers, AliExpress vendors, and the best.</p>
        </div>
      </div>

      {/* <div className=' '> */}
      <div className='row mt-5 m-1  ms-3'>

        &nbsp;  &nbsp; &nbsp;  &nbsp;


        <div className='col-md-1'></div>


        <div class="col-md-3 bagrandd p-3  rounded-3">
          <div className='text-center'>
            <Image src={pic1} className='img-fluid' />
          </div>
          <div className='container  mt-3'>
            <h5 className='fw-bold'>Basics of JAVA <Image src={level} className='d-flex float-end img-fluid' /></h5>
            <p>Java is a class-based object-oriented simple programming language. Though we can not consider it to be fully ... </p>
            <h1 className='price-color mt-5'>125.65 <span className='aed'>AED</span> </h1>
            <div className='d-flex '>
              <button class="btn Start-battom rounded-5 py-3 px-4 text-white  ">Start Free Triali </button>
              <Image src={icon} className='img-fluid ms-2' />
            </div>
          </div>
        </div>


        &nbsp;  &nbsp; &nbsp;  &nbsp;

        <div class="col-md-3 bagrandd p-3 rounded-3">
          <div className='text-center'>
            <Image src={pic2} className='img-fluid' />
          </div>
          <div className='container  mt-3'>
            <h6 className='fw-bold'>OOP Fundamentals<Image src={level} className='d-flex float-end img-fluid ' /></h6>
            <p>Java is a class-based object-oriented simple programming language. Though we can not consider it to be fully ... </p>
            <h1 className='price-color mt-5'>125.65 <span className='aed'>AED</span> </h1>
            <div className='d-flex '>
              <button class="btn Start-battom rounded-5 py-3 px-4 text-white  ">Start Free Triali </button>
              <Image src={icon} className='img-fluid ms-2' />
            </div>

            <div>

            </div>
          </div>

        </div>

        &nbsp;  &nbsp; &nbsp;  &nbsp;

        <div class="col-md-3 bagrandd p-3 rounded-3">
          <div className='text-center'>
            <Image src={pic3} className='img-fluid' />
          </div>
          <div className='container  mt-3'>
            <h5>Intro to UI/UX<Image src={level} className='d-flex float-end img-fluid mt-2' /></h5>
            <p>Java is a class-based object-oriented simple programming language. Though we can not consider it to be fully ... </p>
            <h1 className='price-color '>125.65 <span className='aed'>AED</span> </h1>
            <div className='d-flex '>
              <button class="btn Start-battom rounded-5 py-3 px-4 text-white  ">Start Free Triali </button>
              <Image src={icon} className='img-fluid ms-2' />
            </div>

          </div>

        </div>

        &nbsp;  &nbsp; &nbsp;



        <div class="col-md-1 last-card">
          <Image src={card} />

        </div>







      </div>
      {/* 
      </div> */}





















      <div className='container mt-4'>
        <div className='row'>

          <div className='col-md-2 text-center'>
            <h6 className='fw-bold text-white'>View All Features</h6>
          </div>

          <div className='col-md-8 text-center'>
            <Image src={line} className='img-fluid' />
          </div>

          <div className='col-md-2 text-center'>
            <button type="button" class="btn btn-outline-light rounded-5 ">All Courses <Image src={arr} className='img-fluid' /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default sixpage