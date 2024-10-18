import React, {useState} from 'react'
import Uadil from '../../assets/U-adil.jpg';
import Uaslam from '../../assets/U-aslam.jpg';
import UMuhammadA from '../../assets/U-muhammadA.jpg';
import UMuhammadJ from '../../assets/U-muhammadJ.jpg';
import UMuhammadZ from '../../assets/U-muhammadZ.jpg';
import Uabdulfetah from '../../assets/U-abdulfetah.jpg';
import Uabubekr from '../../assets/U-abubekr.jpg';
import SSherif from '../../assets/S-sherif.jpg';
// import { useState } from 'react';
import './Scholars.css'

const four = [
    { 
        name : 'ኡስታዝ ዓዲል አህመድ',
        photo : Uadil
    },
     { 
        name : 'ኡስታዝ አስለም ዩሱፍ',
        photo : Uaslam
    },
    { 
        name : 'ሸኽ ሸሪፍ ሁሴን',
        photo : SSherif
    },
    { 
        name : 'ኡስታዝ አቡ-በክር አብደሏህ',
        photo : Uabubekr
    }
];
const eight  = [
    { 
        name : 'ኡስታዝ ዓዲል አህመድ',
        photo : Uadil
    },
    { 
        name : 'ኡስታዝ አስለም ዩሱፍ',
        photo : Uaslam
    },
     { 
        name : 'ሸኽ ሸሪፍ ሁሴን',
        photo : SSherif
    },
     { 
        name : 'ኡስታዝ አቡ-በክር አብደሏህ',
        photo : Uabubekr
    },
     { 
        name : 'ኡስታዝ ሙሐመድ ጅማል',
        photo : UMuhammadJ
    },
    { 
        name : 'ኡስታዝ ሙሐመድ ዚያድ',
        photo : UMuhammadZ
    },
    { 
        name : 'ኡስታዝ ሙሐመድ አብዱሰላም',
        photo : UMuhammadA
    },
     { 
        name : 'ኡስታዝ አብዱልፈታህ',
        photo : Uabdulfetah
    }
]

function Scholars() {
   
    const [visible, setVisible] = useState(false)
  return (
    <div className='scholar_b'>
    <div className='photoes_wrapper'> 
    {visible?eight.map((photo, i)=>(
         <div key={i} className='photo_name'>
         <div className="photo">
          <img src={photo.photo} alt="" />
          </div>
         <p>{photo.name}</p>
      </div>
    )):four.map((photo, i)=>(
        <div key={i} className='photo_name'>
        <div className="photo">
         <img src={photo.photo} alt="" />
         </div>
        <p>{photo.name}</p>
     </div>
   ))}
   </div>
   {visible?<button onClick={()=> setVisible(false)}>ቀንስ</button>:
   <button onClick={()=>setVisible(true)}>ተጨማሪ ለማየት</button>}  
    </div>
  )
}
export default Scholars;