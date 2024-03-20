import React from 'react, {useState}'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

export const Header = () => { 

    return (
        <nav className="p-4 flex justify-between items-center w-full" >
            <div className="flex gap-6">
              //  <img src="/images/logo.png" className="w-14" />
                <div className="flex justify-center items-center">
                    <button className="py-2 px-4 rounded group transition-all duration-150 ease-in-out flex items-center gap-1 bg-primary-1 hover:bg-primary-2" type="button" >
                        <img src="/images/icons/casino.png" className="w-6 group-hover:saturate-100 group-hover:hue-rotate-90 group-hover:brightness-200 group-hover:contrast-200 transition-all duration-150 ease-in-out" />
                        <p className="text-zinc-500 group-hover:text-white transition-all duration-150 ease-in-out">Casino</p>
                    </button>
                </div>
                <div className="flex justify-center items-center">
                    <button className="rounded group transition-all duration-150 ease-in-out flex items-center gap-1" type="button" >
                        <img src="/images/icons/ball.png" className="w-6 group-hover:saturate-100 group-hover:hue-rotate-90 group-hover:brightness-200 group-hover:contrast-200 transition-all duration-150 ease-in-out" />
                        <p className="text-zinc-500 group-hover:text-white transition-all duration-150 ease-in-out">Sports</p>
                    </button>
                </div>
            </div>
            <div className="flex gap-6">
                <div className="flex justify-center items-center">
                    <button className="rounded flex items-center gap-1 text-white" type="button" >
                        <MagnifyingGlassIcon className="h-5 w-5" />
                        <p className="text-white">Sports</p>
                    </button>
                </div>
                <div className="flex justify-center items-center">
                    <button className="py-2 px-8 rounded group transition-all duration-150 ease-in-out flex items-center gap-1 bg-color" type="button">
                        <p className="text-white">Sign up </p>
                    </button>
                </div>
            </div>
        </nav>
    )
}
