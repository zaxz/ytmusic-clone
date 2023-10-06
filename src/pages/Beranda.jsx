import React, {useEffect, useState} from 'react';
import Card from "../components/Card";
import CardGede from "../components/CardGede";
import CardHorizontal from "../components/CardHorizontal";
import KategoriBeranda from "../components/KategoriBeranda";
import DengarkanLagi from "../components/DengarkanLagi";
import axios from 'axios'

function Beranda(props) {
  const [data, setData]= useState ([]) 
  useEffect(()=>{
        axios.get('/chart/?index=10&limit=21')
        .then(res => setData(res.data.tracks.data))
        .catch(err => console.log(err))
        }, [])
        
  const [data2, setData2]= useState ([]) 
  useEffect(()=>{
        axios.get('/chart/?index=50&limit=10')
        .then(res => setData2(res.data.tracks.data))
        .catch(err => console.log(err))
        }, [])
  return (
    <>
      <KategoriBeranda />
      
      {/*card components*/}
      <div className="container mt-7">
        <div className=" flex flex-col mx-auto relative mb-5">
          <div className="flex px-5">
            <img 
              className="h-10 rounded-3xl my-auto"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrPzN0UzlRvEgdEEFQb7MjtXA18b_mSLfxRg&usqp=CAU"
              alt="profile"
            />
            <div className="flex-col text-white mx-2">
              <p className="text-neutral-400">JEKI</p>
              <h2 className="text-3xl font-ytsans font-black">Dengarkan lagi</h2>
            </div>
            <button className="absolute  rounded-3xl my-auto h-fit w-20 bg-black ring ring-1 ring-white text-white inset-y-0 right-3">Lainnya</button>
          </div>
        </div>
        <div className=" px-5 gap-x-32 grid grid-cols-10 overflow-x-scroll">
          {data.map((music, index) => (
              <Card key={index} cover={music.album.cover_medium} title={music.title_short} />
          ))}
        </div>
      </div>
      
      {/*card horizontal*/}
      <div className="container  mt-5">
        <div className=" ml-5 flex flex-col relative  mb-1">
            <div className="flex-col text-white">
              <p className="font text-neutral-400 text-[14px]">MULAI RADIO DENGAN SEBUAH LAGU </p>
              <h2 className="text-3xl font-ytsans font-black">Pilihan cepat</h2>
            </div>
        </div>
        <div className=" relative gap-x-2 grid grid-rows-3 grid-flow-col overflow-x-scroll">
          {data2.map((music, index) => (
              <CardHorizontal key={index} cover={music.album.cover_medium} title={music.title_short} artist={music.artist.name}/>
          ))}
        </div>
      </div>
      
      {/*card gede*/}
      <div className="text-white container mt-7 mb-11">
        <p className="text-3xl font-black ml-5 mb-3 font-ytsans">Favorit yang terlupakan</p>
        <div className=" w-full gap-5 flex overflow-x-auto px-5 ">
          {data2.map((music, index) => (
              <CardGede key={index} cover={music.album.cover_medium} title={music.title} artist={music.artist.name}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default Beranda;