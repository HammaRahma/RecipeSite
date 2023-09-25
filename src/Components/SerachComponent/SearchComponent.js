import React from 'react'
import { FiSearch } from "react-icons/fi";
import './SearchComponent.css'
import BackgroundVideo from '../BackgroundVideo';

const SearchComponent = () => {
    
  return (
    <div className='SearchComponent'>
        <div className='bgContainer'>
            <div className='overlay'>
                <video src={<BackgroundVideo />} autoPlay loop muted />
                <div className='Container'>
                    <FiSearch size={'2em'} />
                    <input type='text' placeholder='advanced search (with API examples) ...'  />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchComponent