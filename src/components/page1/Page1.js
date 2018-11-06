import React, { Component } from 'react';
import Slide1 from '../slides/SlidesInTheater'
import Slide2 from '../slides/SlidesNotOut'
import Slide3 from '../slides/SlidesOutOfTheater'
import Sidebar from '../menu/SideBar'
import HeaderPoster from '../header/Header'


class Page1 extends Component{
    render(){
        return(
            <div>
                <Sidebar />
                {/* <HeaderPoster /> */}
                
                <Slide1 />
                <Slide2 />
                <Slide3 />

            </div>
        )
    }
}
export default Page1