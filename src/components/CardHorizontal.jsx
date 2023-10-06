import React from 'react';

const CardHorizontal = (props) => {
  return (
    <>
      <div className="container w-[370px] flex flex-col mx-auto relative mt-3">
        <div className="flex px-5">
          <img 
            className="h-12 my-auto rounded-sm"
            src={props.cover}
            alt={props.title}
          />
          <div className="flex-col text-white mx-4 ">
            <p className="font-medium text-[15px]">{props.title}</p>
            <p className="text-neutral-400 text-[14px]">{props.artist}</p>
          </div>
          <button className="absolute  rounded-3xl my-auto h-8 w-8 text-white inset-y-0 right-3">
          <i className="fa-solid fa-ellipsis-vertical"/>
          </button>
        </div>
      </div>
    </>
  )
}

export default CardHorizontal;