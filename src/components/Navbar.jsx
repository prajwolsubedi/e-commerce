import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between py-3 bg-[#131921] text-white' >
        <h2 className='text-3xl w-5/12 pl-20 font-roboto'>Best Version</h2>
        <ul className='flex w-7/12 justify-between text-xl px-20'>
            <li>Home</li>
            <li>About</li>
            <li>Offers</li>
            <li>Cart</li>
        </ul>
    </div>
  )
}

export default Navbar