import React from 'react'
import Data from './Data'
import { useNavigate } from 'react-router-dom'
import './inde.css'

const Mobiles = ({ Data }) => {
  const navigate = useNavigate()
  const handleCars = () => {
    navigate(`/details`,
      {
        state: {
          Data
        }
      })
  }
  return (
    <div className='fan'>
      <span className='sp' ><img onClick={handleCars} className='image' src={Data.img} alt='logo' /></span>
      <div className='overlay'>
        
      <h1 className='name' onClick={handleCars}>{Data.Name}</h1>
        <h3 className='price' onClick={handleCars} >{Data.Price}</h3>
      <h4 className='year' onClick={handleCars} >{Data.year}</h4>
</div>
    </div>
  )
}

export default Mobiles


        