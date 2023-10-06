import React from 'react';

const KategoriBeranda = () => {
  return (
    <div className=" flex sticky top-0 z-50 w-full h-16 pt-2 bg-black">
      <div className="flex overflow-x-auto text-[16px]">
        <button className=" text-white flex mx-3 px-4 py-2 rounded-[8px] h-fit w-fit bg-white/20">
          <p className="">
            Bersantai
          </p>
        </button>
        <button className="text-white flex mr-3 px-4 py-2 rounded-[8px] h-fit w-fit min-w-fit bg-white/20">
          <p className="">
            Mengisi energi
          </p>
        </button>
        <button className="text-white mr-3 px-4 py-2 rounded-[8px] h-fit w-fit bg-white/20">
          <p className="">
            Perjalanan
          </p>
        </button>
        <button className="text-white mr-3 px-4 py-2 rounded-[8px] h-fit w-fit bg-white/20">
          <p className="">
            Olahraga 
          </p>
        </button>
        <button className="text-white mr-3 px-4 py-2 rounded-[8px] h-fit w-fit bg-white/20">
          <p className="">
            Fokus
          </p>
        </button>
      </div>
    </div>
  )
}

export default KategoriBeranda;