import React from 'react'
import Image from 'next/image';
import './style.css'
import dot1 from './images/dot1.svg'
import dot2 from './images/dot2.svg'
import one from './images/one.svg'
import two from './images/two.svg'
import three from './images/three.svg'
import four from './images/four.svg'
import five from './images/five.svg'
import six from './images/six.svg'
import line from './images/line.svg'
import arr from './images/arr.svg'


const page = (props) => {

    const data = [

        // cardNumber 1
        {
            
            numberimage: one,
            heading: "Standardization",
            cantact: "When working in a global workplace, it’s often difficult to gauge learners’ training experiences, which are ...",


        },


        // cardNumber 2
        {

            numberimage: two,
            heading: "Reduced Costs",
            cantact: "With eLearning, there’s no cost to reproduce materials and, thanks to mobile learning and microlearning, learners can ...",


        },
        {

            // cardNumber 3  
            numberimage: three,
            heading: "More Customization",
            cantact: "ust like learners aren’t one-size-fits-all, learning is not a one-size-fits-all experience. By using different ...",


        },
        {

            // cardNumber 4  
            numberimage: four,
            heading: "Affordable Pricing",
            cantact: "With eLearning, there’s no cost to reproduce materials and, thanks to mobile learning and microlearning, learners can ...",


        },

        {

            // cardNumber 5 
            numberimage: five,
            heading: "Learner Satisfaction",
            cantact: "If you really want students to retain what they learn, you’ll need to aim for high satisfaction rates. Bad ... ",


        },
        {

            // cardNumber 6 
            numberimage: six,
            heading: "Multimedia Materials",
            cantact: "One of the main reasons why custom eLearning is effective is that it’s the perfect delivery method for ...",


        },
      




    ]



    return (
        <div>

            <div className='container mt-5'>

                <div className='text-end'>
                    <Image src={dot1} className='img-fluid' />
                </div>
                <div>
                    <Image src={dot2} />
                </div>


                <div className='text-center'>
                    <h6 className='learn'>Our Benefits</h6>
                    <h1>By Joining eLearning Platform, One <br /> Can Avail a Lot Of Benefits.</h1>
                    <p className='mt-4'>Install our top-rated dropshipping app to your e-commerce site and get <br /> access to US Suppliers, AliExpress vendors, and the best.</p>
                </div>


                <div class="row g-4  row-cols-1 row-cols-lg-3">
                    {data.map((item) => {
                        return (
                            <div class=" feature col" >
                                <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">

                                </div>
                                <div className=' p-2 rounded-3 border '>
                                    <Image src={item.numberimage} className='img-fluid my-3' />
                                    <h3 class="fs-2 text-body-emphasis">{item.heading}</h3>
                                    <p>{item.cantact}</p>
                                    <a href="#" class="icon-link learn">
                                        Read More

                                    </a>
                                </div>
                            </div>
                        )
                    })}

                </div>





                <div className='row mt-5'>

                    <div className='col-md-2 text-center'>
                        <h6 className='fw-bold'>View All Features</h6>
                    </div>

                    <div className='col-md-8 text-center'>
                        <Image src={line} className='img-fluid' />
                    </div>

                    <div className='col-md-2 text-center'>
                        <button type="button" class="btn Start-battom text-white rounded-5 ">Learn More <Image src={arr} /></button>

                    </div>
                </div>


                <div className='m-3'>
                    <Image src={dot2} />
                </div>



            </div>
        </div>
    )
}

export default page