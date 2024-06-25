import React from 'react'
import { Sidebar } from "@/Components"
import { ChevronRightIcon, ChevronLeftIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'

export const Catalog = () => {
 
 return (
    <div className="flex gap-4 justify-center">
      <Sidebar />
      <div className="grid grid-cols-12 w-full gap-4">
        <div className="col-span-9 p-4 w-full bg-primary-1 rounded-xl">
          <h1 className="font-StyreneAWebBold text-lg">
            Games <span className="text-primary-4"> Bet Win </span>
          </h1>
          <div className="flex justify-between items-center w-full border-b border-b-zinc-700">
            <div className="flex gap-6 py-2 font-StyreneAWebRegular text-zinc-600 text-sm">
              <p className="">All Games</p>
              <p className="">Slot games</p>
              <p className="">Casino games</p>
              <p className="">Live. casino</p>
              <p className="">Qwest</p>
            </div>
            <div className="flex items-center gap-6 py-2 font-StyreneAWebRegular text-white">
              <div className="flex items-center gap-2">
                <MagnifyingGlassIcon className="w-4 h-4"/>
                <p className="text-zinc-600">Search</p>
              </div>
              <div className="flex items-center">
                <ChevronLeftIcon className="w-4 h-4"/>
                <ChevronRightIcon className="w-4 h-4"/>
              </div>
            </div>
          </div>
          <div className="">
            
          </div>
        </div>
      </div>
    </div>
  )
}
