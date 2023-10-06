import React, {useEffect, useState} from 'react';

const CardGede = (props) => {
    return (
        <>
          <div className=" text-white transition duration-100 hover:scale-95 bg-black shadow-md">
            <div className=" w-48 h-72 relative">
                <img src={props.cover}
                  className="w-48 h-48 rounded-md"
                  alt={props.title}
                  />
                <div className=" text-left text-[15px] mt-2 text-sm">
                  <p className="font-bold">{props.title}</p>
                  <p className="text-neutral-400 font-bold">Lagu • {props.artist}</p>
                </div>
            </div>
          </div>
              
            {/* <div className=" border bg-black rounded-md h-44 w-28 ">
              <img src={props.cover}
                  className="w-28 h-28 rounded-b-md"
                  alt={props.title}
                  />
                <div className="text-left text-[15px] mt-3 text-sm">
                  <p className="truncate ">{props.title}</p>
                  <p className="truncate">{props.artist}</p>
                </div>
            </div> */}
        </>
      )
    }

export default CardGede;