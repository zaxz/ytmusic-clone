import React from 'react';

const NavbarBawah = (props) => {
  return (
   <>
    <nav className="fixed bottom-0 z-50 w-screen h-14 bg-neutral-900">
      <div className="text-white flex justify-between pt-1 px-14 ">
        <button className="" onClick={props.toggleBeranda}>
          <i className="text-2xl far fa-home" />
          <p className=" text-[10px] font-light">Beranda</p>
        </button>
        <button className="" onClick={props.toggleEksplorasi}>
          <i className="text-2xl fa-regular fa-compass" />
          <p className=" text-[10px] font-light">Eksplorasi</p>
        </button>
        <button className="" >
          <i className="text-2xl far fa-album-collection" />
          <p className=" text-[10px] font-light">Koleksi</p>
        </button>
      </div>
    </nav>
   </>
  )
}

export default NavbarBawah;