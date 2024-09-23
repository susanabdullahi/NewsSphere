import React from 'react'

const Navbar = ({setCategory}) => {
  return (
    <div className='flex  justify-between items-center bg-gray-500 text-2xl shadow-lg '>
        {/* Logo */}
        <div className='mx-5 my-5 px-5 py-5 bg-gradient-to-r from-blue-500 to-red-600 text-white rounded-lg shadow-lg flex items-center justify-center transform transition-transform hover:scale-105'>
        <a href="#" onClick={() => window.location.reload()}>
  <h1 className='text-4xl font-extrabold drop-shadow-md'>Latest News</h1>
</a>
        </div>
        {/* Navbar */}
        <div className='mx-5 my-5 px-5 py-5 gap-5 flex text-stone-50' >
            <a href="#" onClick={() => setCategory("technology")}>Technology</a>
            <a href="#" onClick={() => setCategory("business")}>Business</a>
            <a href="#" onClick={() => setCategory("health")}>Health</a> 
            <a href="#"onClick={() => setCategory("sports")} >Sports</a>
            <a href="#" onClick={() => setCategory("entertainment")}>Entertainment</a>
        </div>
    </div>
  )
}

export default Navbar