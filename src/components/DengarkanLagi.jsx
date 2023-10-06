import React from 'react';
import Card from "./Card";

const DengarkanLagi = () => {
  return (
    <>
      <div className="container flex flex-col mx-auto relative mt-10">
        <div className="flex px-3">
          <img 
            className="h-10 rounded-3xl my-auto"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrPzN0UzlRvEgdEEFQb7MjtXA18b_mSLfxRg&usqp=CAU"
            alt="profile"
          />
          <div className="flex-col text-white mx-2">
            <p className="">JEKI</p>
            <h2 className="text-2xl font-black">Dengarkan Lagi</h2>
          </div>
          <button className="absolute  rounded-3xl my-auto h-fit w-20 bg-slate-300 text-white inset-y-0 right-3">Lainnya</button>
        </div>
      </div>
      <div className="mt-2 ml-3">
          <Card />
      </div>
    </>
  )
}

export default DengarkanLagi;