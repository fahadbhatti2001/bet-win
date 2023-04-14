import React from 'react'

export const Header = () => {
    return (
        <nav className="p-4 flex justify-between items-center w-full" >
            <div className="flex gap-8">
                <img src="/images/logo.png" className="w-14" />
                <div className="flex justify-center items-center">
                    <button className="py-3 px-4 rounded group transition-all duration-75 ease-in-out flex items-center gap-1 bg-primary-1 hover:bg-color" type="button" >
                        <img src="/images/icons/casino.png" className="w-6 group-hover:saturate-100 group-hover:hue-rotate-90 group-hover:brightness-200 group-hover:contrast-200 transition-all duration-75 ease-in-out" />
                        <p className="text-zinc-500 group-hover:text-white transition-all duration-75 ease-in-out">Casino</p>
                    </button>
                </div>
            </div>
            <div className="flex gap-4"></div>
        </nav>
    )
}
