import React from "react"
import CountUp from "react-countup";
import { motion as m } from "framer-motion"

function Counter() {

    return (
        <div
            className='grid grid-cols-3 gap-2'>

            <div className='col-span-3 sm:col-span-1 border-2 border-black bg-transparent flex flex-col items-center gap-1 justify-center py-9' >
                <h2 className="text-black font-robotoBold text-[8vw] sm:text-[5vw]">
                    <CountUp
                        start={0}
                        end={50}
                        duration={2.75}
                    />+
                </h2>
                <h4 className="text-xs lg:text-lg font-robotoMedium tracking-[0.3vw]">
                    STORIES OF LEADERS
                </h4>


            </div>

            <div className='col-span-3 sm:col-span-1 border-2 border-black bg-transparent flex flex-col items-center justify-center gap-1 py-9'>
                <h2 className="text-black font-robotoBold text-[8vw] sm:text-[5vw]">
                    <CountUp
                        start={0}
                        end={65}
                        duration={2.75}
                    />K
                </h2>
                <h4 className="text-xs lg:text-lg font-robotoMedium tracking-[0.3vw]">
                    EMAIL SUBSCRIBERS
                </h4>

            </div>

            <div className='col-span-3 sm:col-span-1 border-2 border-black bg-transparent flex flex-col items-center justify-center gap-1 py-9'>
                <h2 className="text-black font-robotoBold text-[8vw] sm:text-[5vw]">
                    <CountUp
                        start={0}
                        end={4}
                        duration={2.75}
                    />
                </h2>
                <h4 className="text-xs lg:text-lg font-robotoMedium tracking-[0.3vw]">
                    RELEASED MAGAZINES
                </h4>

            </div>

        </div>
    )
}

export default Counter