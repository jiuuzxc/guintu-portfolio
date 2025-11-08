import { useState } from 'react'
import { appLogo, icons, devData } from '../assets/assets'
import ThemeToggleBtn from './ThemeToggleBtn'
import { motion } from 'motion/react'

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 font-medium bg-white dark:bg-gray-900 drop-shadow-lg">
      <img src={theme === 'dark' ? appLogo.logoText_dark : appLogo.logoText} className="w-32 sm:w-40" alt="logo"/>

      <div className={`text-gray-700 dark:text-white sm:text-sm ${!sidebarOpen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}>
        <img src={icons.close_icon} alt="close" className="w-5 absolute right-4 top-4 sm:hidden cursor-pointer" onClick={() => setSidebarOpen(false)}/>

        <a onClick={()=>setSidebarOpen(false)} href="#" className="sm:hover:border-b">About</a>
        <a onClick={()=>setSidebarOpen(false)} href="#projects" className="sm:hover:border-b">Projects</a>
        <a onClick={()=>setSidebarOpen(false)} href="#certifications" className="sm:hover:border-b">Certifications</a>
        <a onClick={()=>setSidebarOpen(false)} href="#skills" className="sm:hover:border-b">Skills</a>
        <a onClick={()=>setSidebarOpen(false)} href="#contact" className="sm:hover:border-b">Contact</a>

        <div className="sm:hidden mt-3 relative">
          <div className="flex items-center">
            <a href={devData.resume} className="text-sm flex items-center gap-2 bg-white text-primary font-semibold px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all" download>Resume</a>
          </div>
        </div>
      </div>

      <div className='flex items-center gap-2 sm:gap-4'>
        <ThemeToggleBtn theme={theme} setTheme={setTheme}/>
        <img src={theme === 'dark' ? icons.menu_icon_dark : icons.menu_icon} alt="menu" onClick={() => setSidebarOpen(true)} className="w-8 sm:hidden cursor-pointer"/>

        <div className="hidden sm:flex items-center relative">
          <a href="https://drive.google.com/file/d/1Ae70oEIK5M1fpF_T38phJAOAqAwPyajj/view?usp=sharing" target="_blank" className="text-sm flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all" download>Resume</a>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
