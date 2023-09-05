import React from 'react'
import Image from 'next/image';
import balab from './images/balab.svg'
import arr from './images/arr.svg'
function page() {

  return (

    <div>




      <div className='container'>

        <div className='row '>

          <div className='col-md-6 mt-3'>
            <Image src={balab} className='img-fluid' />
          </div>

          <div className='col-md-6 mt-5'>
            <h5 className='learn'>About Us</h5>
            <h1>eLearning providing the best opportunities
              to the students around the glob.</h1>

            <p className='mt-2'>Install our top-rated dropshipping app
              to your e-commerce site and get access
              to US Suppliers, AliExpress vendors, and the
              best dropshipping and custom products. Start selling the
              right products to the customer base that you know best. We
              connect you to inventory,
              so you can focus on creating a
              catalog of profitable products for your
              online store.</p>
            <p className='mt-2'>Install our top-rated dropshipping app
              to your e-commerce site and get access
              to US Suppliers, AliExpress vendors, and the
              best dropshipping and custom products. Start selling the
              right products to the customer base that you know best. We
              connect you to inventory,
              so you can focus on creating a
              catalog of profitable products for your
              online store.</p>
            <button type="button" class="btn Start-battom text-white rounded-5 px-4  py-3">Learn More <Image src={arr} /></button>
          </div>


        </div>


      </div>


    </div>

  )
}

export default page