
import React, { useRef, useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logo from '../../assets/logo_only.png';
import lawh from '../../assets/lawh.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup'
import Scroll from 'react-scroll-trigger';
import './Banner.css';


gsap.registerPlugin(ScrollTrigger);

function Banner() {

  // ref for gsap
  const name = useRef(null);
  const law = useRef(null);
  // detecting scroll using the react-scroll-trigger lib
  const [counterOn , setCounterOn] = useState(false)

  useEffect(() => {
    
      const animation = gsap.fromTo(
        name.current,
        { fontSize: '2.5rem'}, // Starting font size
        {
          fontSize: '1rem',
          duration: 1,
          scrollTrigger: {
            trigger: name.current,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: true,
            // Optional: markers for debugging
            
          },
        }
      );

    const animation_2 = gsap.fromTo(
        law.current,
        { opacity : 0 }, // Starting font size
        {
          opacity: 0.5,
          duration: 2,
          scrollTrigger: {
            trigger: name.current,
            start: 'top 60%',
            end: 'bottom 20%',
            scrub: true,
            // Optional: markers for debugging
            
          },
        }
      );
     
    return () => {
      // Clean up ScrollTrigger on unmount
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
   
  }, [counterOn]);

  useEffect(()=>{
    AOS.init({ duration: 1000, // Animation duration
      once: false,});
      AOS.refresh();
  },[counterOn])
   
  
  return (
    <section className='banner-container'>
    <div className='banner'>
      <div className='logo'>
        <img src={logo} alt="Logo" />
        <Scroll onEnter={()=>setCounterOn(true)} onExit={()=> setCounterOn(false)}>
        <h1 ref={name}>አል-ኢምራን(CMC) የቁርአን ኣና ኢስላማዊ ትምህርት ተቋም</h1>
        </Scroll>
      </div>
    </div>
    <div className='data'>
       <div className='pop_left' >
          <div className='madrasas' data-aos="fade-right">
          <Scroll onEnter={()=>setCounterOn(true)} onExit={()=> setCounterOn(false)}>
            {counterOn &&   <CountUp className='middle' start={0} end={200} duration={5} delay={0}/>}
            <p>በላይ መድረሳዎች</p>
            </Scroll>
          </div>
          
          <div className='teachers' data-aos="fade-right" >
          <Scroll onEnter={()=>setCounterOn(true)} onExit={()=> setCounterOn(false)}>
            {counterOn && <CountUp className='middle' start={0} end={150} duration={5} delay={0}/> }
            <p>በላይ መምህራን</p>
            </Scroll>
          </div>
          <div className='graduates_mobile' data-aos="zoom-in">
          <Scroll onEnter={()=>setCounterOn(true)} onExit={()=> setCounterOn(false)}>
            {counterOn &&   <CountUp className='middle' start={0} end={5000} duration={5} delay={0}/>}
            <p >በላይ ምሩቃን</p>
            </Scroll>
          </div>
        </div>
      <div className='mid'>
         <div className='image'>
          <img  ref={law} src={lawh} alt=''/>
         </div>
         <div className='graduates' data-aos="zoom-in">
          <Scroll onEnter={()=>setCounterOn(true)} onExit={()=> setCounterOn(false)}>
            {counterOn &&   <CountUp className='middle' start={0} end={5000} duration={5} delay={0}/>}
            <p >በላይ ምሩቃን</p>
            </Scroll>
          </div>
      </div>
      
      <div className='pop_right'>
          <div className='years' data-aos="fade-left">
          <Scroll onEnter={()=>setCounterOn(true)} onExit={()=> setCounterOn(false)}>
            {counterOn &&   <CountUp className='middle' start={0} end={15} duration={5} delay={0}/>}
            <p>አመታት ያስቆጠረ</p>
            </Scroll>
          </div>
          <div className='students' data-aos="fade-left">
          <Scroll onEnter={()=>setCounterOn(true)} onExit={()=> setCounterOn(false)}>
            {counterOn &&   <CountUp className='middle' start={0} end={5000} duration={5} delay={0}/>}
            <p>በላይ ተማሪዎች</p>
            </Scroll> 
          </div>
          <div>

          </div>
      </div>

    </div>
    </section>
  );
}

export default Banner;

