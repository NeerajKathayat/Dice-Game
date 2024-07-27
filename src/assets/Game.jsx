import React, { useState } from 'react'
import dice_1 from "./images/dice_1.png"
import dice_2 from "./images/dice_2.png"
import dice_3 from "./images/dice_3.png"
import dice_4 from "./images/dice_4.png"
import dice_5 from "./images/dice_5.png"
import dice_6 from "./images/dice_6.png"
const Game = () => {
    const [isShowRule, setIsShowRule] = useState(false)
    const [number, setNumber] = useState(null)
    const [diceImg, setDiceImg] = useState(dice_1)
    const [warning, setWarning] = useState(false)
    const [score, setScore] = useState(0)


    const numbers = [1, 2, 3, 4, 5, 6]
    const dices = [dice_1, dice_2, dice_3, dice_4, dice_5, dice_6]

    const handleNo = (no) => {
        console.log(no)
        setNumber(no)

        setWarning(false)



    }

    const handleImg =async () => {

        if (number == null) {
            setWarning(true)
            return
        }

        const randomDice = Math.floor(Math.random() * 6) + 1;

        console.log(randomDice)


        const rollDice = () => {
            let rollCount = 0;
            const rollInterval = setInterval(() => {
                setDiceImg(dices[Math.floor(Math.random() * 6)]);
                rollCount += 1;
                if (rollCount >= 10) {
                    clearInterval(rollInterval);
                    
                    setDiceImg(dices[randomDice - 1]);
                    
                  
                    if (number == randomDice) {
                        const update = score + number;
                        setScore(update);
                    } else {
                        const update = score - randomDice;
                        setScore(update);
                    }
    
                    setNumber(null);
                }
            }, 100); 
        };
    
        rollDice();


    }


    return (
        <div className='flex  flex-col items-center md:items-stretch gap-[20px] p-3 max-w-[1280px] mx-auto'>
            <div className=' flex flex-col gap-6 md:flex-row items-center md:items-end  md:justify-between '>

                <div className='flex flex-col'>
                    <div className='text-[100px] font-medium'>{score}</div>
                    <div className='text-2xl font-medium'>Total Score</div>
                </div>

                <div className='flex flex-col'>
                    {warning &&
                        <p className='text-[#FF0C0C] text-2xl pb-2 md:self-end'>You have not selected any number</p>
                    }

                    <div className='flex gap-[24px] flex-wrap'>
                        {numbers.map((ele, index) => {
                            return <button key={index} onClick={() => { handleNo(ele) }} className={`w-[72px] border-2 border-black text-2xl text-center p-3 ${number === ele ? 'bg-black text-white' : ''} `}>{ele}</button>
                        })}

                    </div>

                    <div className='text-2xl font-bold pt-4 md:self-end'>Select Number</div>
                
                </div>

            </div>



            <div className='flex flex-col gap-3 items-center mt-4'>
                <div onClick={handleImg} className="cursor-pointer">
                    <img src={diceImg} alt="" />
                </div>

                <p className='text-2xl font-medium'>Click on Dice to roll</p>

                <button onClick={() => { setScore(0) }} className='text-[16px] font-semibold w-[220px] border-2 border-black rounded-md py-3 '>Reset Score</button>
                <button onClick={() => setIsShowRule(!isShowRule)} className='text-[16px] font-semibold bg-black text-white w-[220px] py-3 '>Show Rules</button>


            </div>


            {
                isShowRule &&
                <div className='flex flex-col gap-6 bg-[#FBF1F1] p-5'>
                    <h1 className='text-2xl font-bold'>How to play dice game</h1>
                    <ul className='text-[16px] font-medium'>
                        <li>Select any number</li>
                        <li>Click on dice image</li>
                        <li>after click on dice if selected number is equal to dice number you will get same point as dice</li>
                        <li>if you get wrong guess then dice number will be deducted</li>
                    </ul>
                </div>
            }
        </div>
    )
}

export default Game
