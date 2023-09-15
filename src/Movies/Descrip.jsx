import React from 'react'
import './inde.css';
// import Data from './Data'

const Descrip = (props) => {
    const { id, tire, hp, h1, nex, h2, news, h3, newss, h4, newsss, exs,dash,back,video, info,type,seater}=props
    return (
        <>
            <div className='cen'>
                <div className='pa'>
            <div className="intro">
                <span className='ligh'>
                    <h2>This is a {type} and having a {seater} seater that will be comfortable for the family</h2>
                </span>
                <span className='ligh'>
                    <h4>Short inform about this wonderful vehicle</h4>
                    <p>{info}</p>
                </span>
                <span className='ligh'>
                    <p> This has a wooping amount of Horse-Power of  {hp}</p>
                </span>
                <span className='ligh'>
                    <h3>{h1}</h3>
                    <span>{nex}</span>
                </span>
                <span className='ligh'>
                    <h3>{h2}</h3>
                    <span>{news}</span>
                </span>
                <span className='ligh'>
                    <h3>{h3}</h3>
                    <span>{newss}</span>
                </span>
                <span className='ligh'>
                    <h3>{h4}</h3>
                    <span>{newsss}</span>
                </span>
            </div>
                </div>
            
                <div className='cenm'>
                    <div className='pam'>
                        <div className='shi'>
            <div className='gal'>
                {/* <p className='boys'>About</p> */}
                <img className='agl'  src={exs} alt='pics' />
                <img  className='agl' src={dash} alt='pics' />
                <img className='agl'  src={tire} alt='pics' />
                            <img className='agl' src={back} alt='pics' />
            </div>
                        </div>
                        <div className='shi'>
                            <div className='sha'>
                <video  className='ttt' src={video}
                    controls="controls" mute loop="false" autoplay='false' />
                            </div>
                            </div>
                    </div>
                </div>
        </div>
        </>
    );
}

export default Descrip