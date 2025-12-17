import logo from '../assets/logo.svg'
import leftEffect from '../assets/left-effect.svg'
import rightEffect from '../assets/right-effect.svg'

export function Header() {
    return (
        <header className='bg-base-profile w-full min-h-74 p-6 flex items-baseline justify-center relative'>
            <img src={leftEffect} alt="efeito esquerdo" className='absolute left-0 top-1/2 -translate-y-1/2' />
            <img src={logo} alt="logo do site github blog" className='mt-8' />
            <img src={rightEffect} alt="efeito direito" className='absolute right-0 top-1/2 -translate-y-1/2' />
            <div className='absolute w-1/2 bg-blue/25 h-5 bottom-0 shadow-[0px_-60px_140px_20px_#3294f8]' />
        </header>
    )
}