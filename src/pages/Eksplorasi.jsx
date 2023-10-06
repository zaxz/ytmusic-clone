import React, {useEffect, useState} from 'react';
import axios from 'axios';
import KategoriEksplorasi from "../components/KategoriEksplorasi";
import CardGede from "../components/CardGede";
import CardTrending from "../components/CardTrending";

const Eksplorasi = () => {
  const [data2, setData2]= useState ([]) 
  useEffect(()=>{
        axios.get('/chart/?index=1&limit=10')
        .then(res => setData2(res.data.tracks.data))
        .catch(err => console.log(err))
        }, [])
  return (
  <>
    <KategoriEksplorasi />
      <div className="container mt-10">
        <div className=" mx-5 flex relative mb-1">
          <h2 className="text-3xl font-ytsans font-black">Album & single terbaru</h2>
          <button className="absolute  rounded-3xl my-auto h-fit w-20 bg-black ring ring-1 ring-white text-white inset-y-0 right-3">Lainnya</button>
        </div>
        <div className=" w-full gap-5 flex overflow-x-auto px-5 mt-2">
          {data2.map((music, index) => (
              <CardGede key={index} cover={music.album.cover_medium} title={music.title} artist={music.artist.name}/>
          ))}
        </div>
      </div>
      
      <div className=" mx-5 flex relative mb-1">
          <h2 className="text-3xl font-ytsans font-black">Trending</h2>
          <button className="absolute  rounded-3xl my-auto h-fit w-20 bg-black ring ring-1 ring-white text-white inset-y-0 right-3">Lainnya</button>
      </div>
      <div className="relative mb-20 gap-x-2 gap-y-3 grid grid-rows-3 grid-flow-col overflow-x-auto">
        {data2.map((music, index) => (
              <CardTrending key={index} index={index+1} cover={music.album.cover_medium} title={music.title_short} artist={music.artist.name}/>
          ))}
      </div>
  </>
  )
}

export default Eksplorasi;