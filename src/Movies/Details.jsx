import React from 'react'
import { useLocation } from 'react-router-dom'
import { Data } from './Data'
import Descrip from './Descrip'



const Details = () =>  {
    const Location = useLocation()
    const Data = Location.state.Data
    return (
    <div>
        <Descrip{...Data}></Descrip>
    </div>
    )
}

export default Details