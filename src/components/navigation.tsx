import React from 'react'
import Link from "next/link";
import '../app/global.css'

const Navigation = () => {
  return (
    <div>
        <nav className='header'>
            <div className="links">
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/about/teams'>Teams</Link>
            </div>
        </nav>
    </div>
  )
}

export default Navigation