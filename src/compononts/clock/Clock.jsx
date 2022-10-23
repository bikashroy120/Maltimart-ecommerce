import React,{useState,useEffect} from 'react'
import './clock.css'

const Clock = () => {

    const [days,setdays] = useState()
    const [hours,sethours] = useState()
    const [minites,setminites] = useState()
    const [seconds,setseconds] = useState()

    let interval;

    const countDown = ()=>{
        const distenasion = new Date("Oct 27,2022").getTime()

        interval = setInterval(() => {
            const now = new Date().getTime()

            const different = distenasion - now

            const days = Math.floor(different / (100 * 60 * 60 * 24))

            const hours = Math.floor(different % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));

            const minutes = Math.floor(different % (1000 * 60 * 60 ) / (1000 * 60))

            const seconds = Math.floor(different % (1000 * 60 ) / 1000)


            if(distenasion < 0){
                clearInterval(interval.current)
            }else{
                setdays(days);
                sethours(hours);
                setminites(minutes);
                setseconds(seconds);
            }
        });
    }


    useEffect(() => {
        countDown()
    })


  return (
    <div className='clock_wapper'>
        <div className="clock_data">
            <div className="text-center">
                <h1 className='text-white fs-3'>{days}</h1>
                <h5 className='text-white fs-6'>Days</h5>
            </div>
            <span className='text-white fs-3'> :</span>
        </div>

        <div className="clock_data">
            <div className="text-center">
                <h1 className='text-white fs-3'>{hours}</h1>
                <h5 className='text-white fs-6'>Horus</h5>
            </div>
            <span className='text-white fs-3'> :</span>
        </div>

        <div className="clock_data">
            <div className="text-center">
                <h1 className='text-white fs-3'>{minites}</h1>
                <h5 className='text-white fs-6'>Minutes</h5>
            </div>
            <span className='text-white fs-3'> :</span>
        </div>

        <div className="clock_data">
            <div className="text-center">
                <h1 className='text-white fs-3'>{seconds}</h1>
                <h5 className='text-white fs-6'>Seconds</h5>
            </div>
        </div>
    </div>
  )
}

export default Clock