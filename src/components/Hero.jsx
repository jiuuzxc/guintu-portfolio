import { devData, appLogo } from "../assets/assets"
import { motion } from 'motion/react';

const Hero = ( {theme} ) => {
    return (
            <div className="flex justify-between py-8">
                <div className="flex justify-end pl-100">
                    <img src={devData.guintu} className="h-100 w-100"/>
                </div>
                <div className="flex justify-start py-8 pr-80">
                    <div className='flex flex-col h-12px justify-center items-center gap-6 text-center text-gray-700'>
                        <img src={theme === 'dark'? appLogo.logo_dark : appLogo.logo} className="w-32 sm:w-40" alt="logo"/>

                        <motion.h1 initial={{opacity: 0, y: 40}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.6, delay: 0.8}} viewport={{once: true}}
                        className="text-4x1 sm:text-5xl md:text-6x1 x1:text-[84px] font-medium x1:leading-[95px] max-w-5x1 dark:text-white"> Hello, my name is <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Julian Mathew M. Guintu</span>!</motion.h1>

                        <motion.p initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 1}} viewport={{once: true}}
                        className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5">Aspiring Software Developer, specifically in Quality Assurance Manual/Automation Testing. Currently a 4th year Computer Science student at Holy Angel University. </motion.p>
                    </div>
                </div>
            </div>

    )
}

export default Hero