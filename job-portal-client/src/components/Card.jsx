import React from 'react'
import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from 'react-icons/fi';
import {Link} from'react-router-dom'

const Card = ({data}) => {
    const {companyName,jobTitle,companyLogo,minPrice,maxPrice,salaryType,jobLocation
        ,postingDate,employmentType,description}=data;

  return (
    <section className='card shadow-lg rounded-md bg-white'>
        <Link to={"/"} className='flex gap-4 flex-col sm:flex-row items-start'>
         <img src={companyLogo} alt="" className="w-[100px] h-[100px]"/>
         <div>
            <h4 className='mb-1'>{companyName}</h4>
            <h3 className='text-lg font-semibold mb-2'>{jobTitle}</h3>

            <div className='flex-wrap flex text-black/70 text-base gap-3 mb-2'>
                <span className='flex items-center gap-2'><FiMapPin/>{jobLocation}</span>
                <span className='flex items-center gap-2'><FiClock/>{employmentType}</span>
                <span className='flex items-center gap-2'><FiDollarSign/>{minPrice}</span>
                <span className='flex items-center gap-2'><FiCalendar/>{postingDate}</span>
            </div>

            <p className='text-base text-black/70  '>{description}</p>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold  mt-10 py-2 px-4 rounded'>
            Read more
          </button>

         </div>
        </Link>
    </section>
  )
}

export default Card
