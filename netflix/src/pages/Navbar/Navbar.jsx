import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search from '../../assets/search_icon.svg'
import bellIcon from '../../assets/bell_icon.svg'
import profileImg from '../../assets/profile_img.png'
import carateIcon from '../../assets/caret_icon.svg'
const Navbar = () => {
  return (
    <div className='navbar'>
<div className="navbar-left">
    <img src={logo} alt="" />
    <ul>
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>News & Popular</li>
        <li>My List</li>
        <li>Browse by Language</li>
    </ul>

</div>
<div className="navbar-right">
<img src={search} alt=''/>
<p>Children</p>
<img src={bellIcon} alt=''/>
</div>
<div className="navbar-profile">
<img src={profileImg} alt=''/>
<img src={carateIcon} alt=''/>
</div>
    </div>
  )
}

export default Navbar