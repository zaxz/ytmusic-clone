function NavbarAtas() {
  return (
    <>
    <nav className="z-50 bg-black top-0 left-0 right-0">
      <div className=" max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16 ">
          <div className="absolute inset-y-0 right-0 flex items-center ">
            <button
              className="inline-flex items-center justify-center m-3 p-1 rounded-md text-white hover:text-slate-300 hover:scale-95 transition">
              <i className="text-xl fa-solid fa-magnifying-glass"></i>
            </button>
            <button
              className="inline-flex items-center justify-center m-3 rounded-md text-white hover:text-slate-300 hover:scale-95 transition">
              <img 
              className="h-7 rounded-3xl"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrPzN0UzlRvEgdEEFQb7MjtXA18b_mSLfxRg&usqp=CAU"
              alt="profile"
              />
            </button>
          </div>
          <div className="flex-1 flex items-center mx-2 justify-start sm:justify-between">
            <div className="flex-shrink-0">
              <img
                className="block lg:hidden h-10 w-auto"
                src="https://upload.wikimedia.org/wikipedia/commons/d/d8/YouTubeMusic_Logo.png"
                alt="ini gambar"
              />
              <img
                className="hidden lg:block h-12 w-auto"
                src="https://upload.wikimedia.org/wikipedia/commons/d/d8/YouTubeMusic_Logo.border-spacing-12"
                alt="Workflow"
              />
            </div>
        </div>
      </div>
    </div>
</nav>
</>
  )
}

export default NavbarAtas;