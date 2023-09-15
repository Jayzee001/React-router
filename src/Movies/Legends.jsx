import React from 'react'
import Data from './Data'
import './inde.css'
import Mobile from './Mobiles'

function Legends({Data}) {
  return (
    <div className='cen'>
      <div className='pa'>
        <div className='product-styl'>
          {Data.map((Data, index) => (<Mobile key={Data.id} Data={Data} />))}
        </div>
      </div>
    </div>
  );
}

export default Legends

