import React from 'react';
import { FaThermometerEmpty } from 'react-icons/fa';
import { BiSolidDropletHalf } from 'react-icons/bi';
import { FiWind } from 'react-icons/fi';
import { GiSunset, GiSunrise } from 'react-icons/gi';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

function Temprature() {
    const verticaldetails = [
        {
            id: 1,
            Icon: FaThermometerEmpty,
            title: "Real Feel",
            value: "30°"
        },
        {
            id: 2,
            Icon: BiSolidDropletHalf,
            title: "Humidity",
            value: "346%"
        },
        {
            id: 1,
            Icon: FiWind,
            title: "Wind",
            value: "10 Km/hr"
        },
    ]
    const horizontaldetails = [
        {
            id: 1,
            Icon: GiSunrise,
            title: "Sunrise",
            value: "06:45 AM"
        },
        {
            id: 2,
            Icon: GiSunset,
            title: "Sunset",
            value: "07:45 PM"
        },
        {
            id: 3,
            Icon: MdKeyboardArrowUp,
            title: "High",
            value: "35°"
        },
        {
            id: 4,
            Icon: MdKeyboardArrowDown,
            title: "Low",
            value: "7°"
        },
    ]
    return (
        <div>
            <div className='flex items-center justify-center my-6 text-xl text-cyan-300'>
                <p>Rain</p>
            </div>
            <div className='flex flex-row items-center justify-between py-3'>
                <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="weather icon" className='w-20' />
                <p className='text-5xl'>36°</p>

                <div className='flex flex-col space-y-3 items-start '>
                    {verticaldetails.map(({ id, Icon, title, value }) => (
                        <div key={id} className='flex font-light text-sm items-center justify-center '>
                            <Icon size={18} className='mr-1' />
                            {`${title}:`}<span className='font-medium ml-1'>{value}</span>
                        </div>

                    ))}
                </div>

            </div>
            <div className='flex flex-row items-center justify-center space-x-10 text-sm py-3'>
                    {
                        horizontaldetails.map(({id, title ,Icon , value}) => (
                            
                            <div key={id} className='flex flex-row items-center'>
                                <Icon size={30} />
                                <p className='font-light ml-1'>
                                    {`${title}:`}<span className='font-medium ml-1'>{value}</span>
                                </p>
                            </div>

                        ))
                    }
                </div>
        </div>
    )
}

export default Temprature
