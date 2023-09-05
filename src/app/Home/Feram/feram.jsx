import React from 'react'
import Image from 'next/image';
import udemy from './images/udemy.svg'
import coursera from './images/coursera.svg'
import oxford from './images/oxford.svg'
import michigan from './images/michigan.svg'
import '../../page.module.css'


function feram() {
  return (
    <div>
        <div className='bagrand container-fluid py-5  text-center'>

<div className=' row '>
    <div className='col-md-3'>
        <Image src={coursera} className='img-fluid my-4' />
    </div>
    <div className='col-md-3'>
        <Image src={udemy} className='img-fluid my-3' />
    </div>
    <div className='col-md-3'>
        <Image src={oxford} className='img-fluid my-3' />
    </div>
    <div className='col-md-3'>
        <Image src={michigan} className='img-fluid my-3' />
    </div>
</div>

</div>



    </div>
  )
}

export default feram