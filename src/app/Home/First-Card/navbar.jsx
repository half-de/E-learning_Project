import React from 'react'
import Image from 'next/image';
import search from "./images/search.svg";
import arr from './images/arr.svg'
import line from './images/line.svg'
import arro from './images/arro.svg'
import down from './images/down.svg'
import girl from './images/Frame.svg'
import '../First-Card/style.css'





function navbar() {
    return (





        <div className='container '>
            <nav class="navbar navbar-expand-lg  rounded" aria-label="Thirteenth navbar example">
                <div class="container-fluid">
                    <a class="navbar-brand col-lg-3 me-0 fw-bold learn" href="#">eLearning</a>
                    <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="navbar-collapse d-lg-flex collapse" id="navbarsExample11" >

                        <ul class="navbar-nav col-lg-6 justify-content-lg-center">
                            <li class="nav-item">
                                <a class="nav-link active  home" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled " aria-disabled="true">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" aria-disabled="true">Benefits</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" aria-disabled="true">Courses</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" aria-disabled="true">Blogs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" aria-disabled="true">Login</a>
                            </li>

                        </ul>

                        <div className='float-end main-button d-flex'>
                            <a href=""><Image src={search} className='img-fluid  m-1 search-button ' /></a>
                            <button class="btn Start-battom rounded-5 px-2 py-2 text-white next-button border ms-2">Start Free Triali<Image src={arr} className='img-fluid' /> </button>
                        </div>
                    </div>
                </div>
            </nav>

            <div className='row'>

                <div className='col-md-6'>
                    <div className='mt-5 pt-3 fw-bold '>
                        <h1 className=''>You bring the <br />
                            <span className='expertise'> expertise</span>, we'll make <br />
                            it unforgettable.</h1>
                    </div>
                    <div className='mt-4'>
                        <p>Using highly personalised activities, videos and
                            animations you can energise your students and motivate them to achieve their learning goals as  they progress through a journey.</p>
                    </div>
                    <div class="mt-4">
                        <button type="button" class="btn Start-battom text-white rounded-5 px-4  py-3">Register <Image src={arr} className='img-fluid' /></button>
                        <button type="button" class="btn m-2 Login-button rounded-5 px-4 py-3">Login <Image src={arro} className='img-fluid' /> </button>
                    </div>

                 


                    <div className='row dropdown ' >
                        <div className='col-md-4 pt-4  text-center'>
                        Select Instructor <Image src={down} className='img-fluid  ' />
                        </div>

                        <div className='col-md-1'><Image src={line} className='img-fluid line' /></div>

                        <div className='col-md-4 pt-4 text-center'>
                        Select Instructor <Image src={down} className='img-fluid ' />
                        </div>

                        <div className='col-md-1'><Image src={line} className='img-fluid line' /></div>

                        <div className='col-md-2  pt-3 px-0 text-center'>
                            <button type="button" class="btn Start-battom text-white rounded-5 p-2 text-center">Search <Image src={arr} /></button>
                        </div>
                    </div>





                </div>


                <div className='col-md-6'>
                    <Image src={girl} className='img-fluid' />
                </div>

            </div>
        </div>
    )
}

export default navbar
