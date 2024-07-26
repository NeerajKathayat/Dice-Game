import React from 'react'
import dice from './images/dices 1.png'
const Home = ({handleGame}) => {

    return (
        <div className='flex h-lvh justify-center items-center px-3 '>
            <div className='flex flex-col md:flex-row items-center max-w-[1182px] mx-auto'>
                <div className='flex-1 max-w-[649px]'>
                    <img className='' src={dice} alt="" />
                </div>
                <div className='flex-1  flex flex-col gap-4 items-end'>
                    <h1 className='text-[58px] md:text-[96px] font-bold text-right'>DICE GAME</h1>
                    <button onClick={handleGame} className='text-[16px] font-semibold bg-black text-white w-[220px] py-3 '>Play Now</button>

                </div>
            </div>
        </div>
    )
}

export default Home
