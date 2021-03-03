import React, { Component, useEffect } from 'react'
import './style.css';


import pic1 from './img/stella.png'
import pic2 from './img/desperado.png'
import pic3 from './img/bud.png'


 function SlideShow()  {
    
            let imgArray = [pic1, pic2, pic3];

            let imgPosition = 0
            const next = ()=>{
                imgPosition++
                if(imgPosition > imgArray.length -1){
                    imgPosition = 0;
                }
            showImg(imgPosition)
            }
            const prev = ()=>{
                imgPosition--;
                if(imgPosition < 0){
                    imgPosition = imgArray.length -1;
                }
            showImg(imgPosition)
            

            }


            const showImg = (img)=>{
                    const image = imgArray[img]
                    let DomImg = document.getElementById('img');
                    DomImg.src = image;
            }
            // const timer = ()=>{
            //     imgPosition++
    
            //     if(imgPosition > imgArray.length -1){
            //         imgPosition = 0;
            //     }
            // showImg(imgPosition)

            // }

            
                
            useEffect(()=>{
                const interval = setInterval(()=>{
                    next()
                },7000);
                return () => clearInterval(interval);
            },[])
           

        return (
            <div className='slideshow'>
                <div className="slide">
                    <img id='img' src={imgArray[imgPosition]} alt=""/>
                    <i className="fa fa-arrow-left" onClick={prev}></i>
                    <i className="fa fa-arrow-right" onClick={next}></i>

                </div>
               
            </div>
        )
    
}
export default  SlideShow;
