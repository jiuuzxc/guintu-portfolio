import { useEffect } from 'react';
import { icons } from '../assets/assets';

const ThemeToggleBtn = ({ theme, setTheme }) => {

    useEffect(()=>{
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(theme || (prefersDarkMode ? 'dark' : 'light'))
    },[])

    useEffect(()=>{
        if (theme === 'dark'){
            document.documentElement.classList.add('dark')
        } else{
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        {theme === 'dark' ? (
            <img
            src={icons.sun_icon}
            className="size-8.5 p-1.5 border border-gray-500 rounded-full"
            alt="light mode"
            />
        ) : (
            <img
            src={icons.moon_icon}
            className="size-8.5 p-1.5 border border-gray-500 rounded-full"
            alt="dark mode"
            />
        )}
        </button>
    );
};

export default ThemeToggleBtn;
