import React from 'react'
import Image from 'next/image';
import pic1 from './images/pic1.svg'
import pic2 from './images/pic2.svg'
import pic3 from './images/pic3.svg'
import arro from './images/arro.svg'
import pic4 from './images/pic4.svg'
import pic5 from './images/pic5.svg'
import pic6 from './images/pic6.svg'
import dot from './images/dot.svg'


const sevanth = (props) => {

  const data = [

    // cardNumber 1
    {
      numberimage: pic1,
      heading: "Why Java is best programming language?",
      cantact: "When working in a global workplace, it’s often difficult to gauge learners’ training experiences, which are ...",
    },
     // cardNumber 2
     {
      numberimage: pic2,
      heading: "Why Java is best programming language?",
      cantact: "When working in a global workplace, it’s often difficult to gauge learners’ training experiences, which are ...",


    },
     // cardNumber 3
     {
      numberimage: pic3,
      heading: "Why Java is best programming language?",
      cantact: "When working in a global workplace, it’s often difficult to gauge learners’ training experiences, which are ...",


    },
     // cardNumber 4
     {
      numberimage: pic4,
      heading: "Why Java is best programming language?",
      cantact: "When working in a global workplace, it’s often difficult to gauge learners’ training experiences, which are ...",


    },
     // cardNumber 5
     {
      numberimage: pic5,
      heading: "Why Java is best programming language?",
      cantact: "When working in a global workplace, it’s often difficult to gauge learners’ training experiences, which are ...",


    },
     // cardNumber 6
     {
      numberimage: pic6,
      heading: "Why Java is best programming language?",
      cantact: "When working in a global workplace, it’s often difficult to gauge learners’ training experiences, which are ...",


    },
  ]












  return (
    <div>

      <div className='container mt-5'>
        <div className='text-center '>
          <h6 className='learn '>Blog Posts</h6>
          <h1 className=''>Articles will help to to stay up to <br /> date with all the knowledge</h1>
          <p className='mt-4 '>Install our top-rated dropshipping app to your e-commerce site and get <br /> access to US Suppliers, AliExpress vendors, and the best.</p>
        </div>
      </div>

      <div className='container'>


        <div class="row g-4  row-cols-1 row-cols-lg-3">
          {data.map((item) => {
            return (
              <div class="feature col">
                <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">

                </div>
                <div className=' p-2  '>
                  <Image src={item.numberimage} className='img-fluid my-3' />
                  <h3 class="fs-2 text-body-emphasis">{item.heading}</h3>
                 <p>{item.cantact}</p>
                  <button type="button" class="btn  Login-button rounded-5 px-4 py-3">Read Article <Image src={arro} className='img-fluid' /> </button>

                </div>
              </div>


            )
          })}






        </div>



      </div>

      <Image src={dot} className='m-5 img-fluid' />

    </div>
  )
}

export default sevanth