import React from 'react';

const KategoriEksplorasi = () => {
  return (
  <>
    <div className="flex container justify-center gap-4 ">
      <div className="text-white relative container rounded-md flex w-[110px] h-28 bg-white/10 mt-2">
          <i/>
          <p 
          className="text-[15px] absolute ml-2 mb-2 bottom-0 font-medium ">
          Rilisan <br/> terbaru</p>
      </div>
      <div className="text-white relative container rounded-md flex w-[110px] h-28 bg-white/10 mt-2">
          <i/>
          <p 
          className="text-[15px] absolute ml-2 mb-2 bottom-0 font-medium  ">
          Tangga <br/> lagu
          </p>
      </div>
      <div className="text-white relative container rounded-md flex w-[110px] h-28 bg-white/10 mt-2">
          <i/>
          <p 
          className="text-[15px] absolute ml-2 mb-2 bottom-0 font-medium ">
          Jenis musik & suasana</p>
      </div>
    </div>
  </>
  )
}

export default KategoriEksplorasi;