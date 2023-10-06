import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Card = (props) => {
    return (
        <>
            <div className="text-white h-44 w-28  transition duration-100 hover:scale-95 bg-black rounded-md overflow-hidden shadow-md">
              <div className="w-28 h-28 flex relative ">
                <div className="absolute flex h-8 w-8 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-white rounded-full">
                  <i className="text-black m-auto text-[15px] fa-solid fa-play"/>
                </div>
                <img src={props.cover}
                  className=" rounded-b-md"
                  alt={props.title}
                  />
              </div>
              <div className=" text-left font-bold text-[15px] mt-2 text-sm">
                <p className="line-clamp-2">{props.title}</p>
              </div>
            </div>
        </>
      )
    }

export default Card;