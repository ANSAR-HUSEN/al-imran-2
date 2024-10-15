import React, {useEffect} from 'react';
import PrayTimes from 'praytimess'
import './Prayer_time.css'
import solat from '../../assets/prayer_two.png'
import AOS from 'aos';

const PrayerTime = () => {
const prayTimes = new PrayTimes();
prayTimes.setMethod('MWL');

const latitude = 9.028925730989538;
const longtude =    38.753402666834646;
const timezone = +3;
const dist = 0;
const timeformat = '12h';
const times = prayTimes.getTimes(new Date(), [latitude, longtude], timezone,dist, timeformat);
useEffect(()=>{
    AOS.init();
},[])
    return (
        <div className='large_screen'>
            <div className='solat_img' data-aos="fade-right">
                <img src={solat} alt="" />
            </div>
        <div className='main_container'>
            <div className='title'>
                <h1>የሶላት ወቅቶች በአዲስ አበባ</h1>
            </div>
            <div className='time_container' data-aos="fade-left">
                <div className='names_prayer' >
                    <ul>
                        <li>
                        <div className='prayer__time'>
                                <h4>ሶላት</h4>
                                <h4>ወቅት</h4>
                            </div>
                            <hr style={{ border: '1px dotted #05A04B', margin:'5px 0'  }}/>
                        </li>
                        <li>
                            <div className='prayer__time'>
                                <p>ፈጅር</p>
                                <p>{times.fajr}</p>
                            </div>
                            <hr style={{ border: '1px dotted #05A04B',  }}/>
                        </li>
                        <li>
                        <div className='prayer__time'>
                                <p>ፀሀይ መዉጫ</p>
                                <p>{times.sunrise}</p>
                                </div>
                                <hr style={{ border: '1px dotted #05A04B', }} />
                                </li>
                        <li>
                        <div className='prayer__time'>
                                <p>ዙህር</p>
                                <p>{times.dhuhr}</p>
                                </div>
                                <hr style={{ border: '1px dotted #05A04B' }} />
                        </li>
                        <li>
                        <div className='prayer__time'>
                                <p>ዓስር</p>
                                <p>{times.asr}</p>
                                </div>
                                <hr style={{ border: '1px dotted #05A04B' }} />
                        </li>
                        <li>
                        <div className='prayer__time'>
                                <p>መጝሪብ</p>
                                <p>{times.maghrib}</p>
                                </div>
                                <hr style={{ border: '1px dotted #05A04B', }}/>
                        </li>
                        <li>
                        <div className='prayer__time'>
                                <p>ዒሻ</p>
                                <p>{times.isha}</p>
                                </div>
                        </li>
                        
                    </ul>
                </div>
               
            </div>
        </div>
        </div>
    );
};

export default PrayerTime;