import React, { Component } from 'react'
import slidePic1 from './img/slidePic1.jpg'
import slidePic2 from './img/slidePic2.jpg'
import slidePic3 from './img/slidePic3.jpg'
import slidePic4 from './img/slidePic4.jpg'
import slidePic5 from './img/slidePic5.jpg'
import slidePic6 from './img/slidePic6.png'



import './style.css';



 class Products extends Component {
    render() {
        let picArr = [slidePic1,slidePic2,slidePic3,slidePic4,slidePic6,slidePic5];
        
        const img = document.querySelector('.img');

        let position = 0;

        

    const navRight = ()=>{
        position++
        if(position > picArr.length - 1){
            position = 0;
        }
        display(position);
    }
    const navLeft = ()=>{
        position--
    if(position < 0){
        position = picArr.length-1;
    }
    display(position)
    }

    const display = (position)=>{
        const active = document.querySelector('.active');
        active.src = picArr[position];
        }

       

// y.forEach((btn, i, e) =>{
//     btn.addEventListener('click', ()=>{
//         position = i;
//         display(position);

//     })
// })


const imgClick = (index)=>{
    position = index;
    display(position);
  
}

const showPro = (index)=>{
    const pro = document.querySelector('.pro');
    pro.classList.add('showPro')
    position = index;
    display(position);

}

const closePro = ()=>{
    const pro = document.querySelector('.pro');
    pro.classList.remove('showPro')

}


        return (
            <div >
            <div className='productsContainer'>
                <div className="box1">
                   <img className='proImg' src={slidePic1} alt=""
                    onClick={()=> showPro(0)}
                   />

                </div>
                <div className="box2 ">
                   <img className='proImg' src={slidePic2} alt=""
                   onClick={()=> showPro(1)}
                   />

                </div>
                <div className="box3 ">
                   <img className='proImg' src={slidePic3} alt=""
                   onClick={()=> showPro(2)}/>

                </div>
                <div className="box4 ">
                   <img className='proImg' src={slidePic4} alt=""
                   onClick={()=> showPro(3)}/>

                </div>
                <div className="box5 ">
                   <img className='proImg' src={slidePic6} alt=""
                   onClick={()=> showPro(4)}/>

                </div>
                <div className="box6 ">
                   <img className='proImg' src={slidePic5} alt=""
                   onClick={()=> showPro(5)}/>

                </div>
                </div>
                <div className="pro">
                <div className="mainPro">
                  <i className="fas fa-window-close close" 
                  onClick={closePro}
                  ></i>
                   <img className='active' src={slidePic1} alt=""/>
                 <div className="picNav">
                  <i className="fas fa-chevron-left" onClick={navLeft}></i>
                  <div className="img">
                  {picArr.map((pix , index) =>(
                 <img key={index} className='navImg' src={pix} alt=""
                 onClick={()=> imgClick(index)}
                 />
                  ))}
        </div>
            <i className="fas fa-chevron-right" onClick={navRight}></i>
        </div>
    </div>
    </div>
    </div>
            
        )
    }
}


export default  Products;