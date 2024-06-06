// eslint-disable-next-line no-unused-vars
import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Browse Our Food Selection</h1>
      <p className='explore-menu-text '>
        Indulge in a range of delectable dishes, each artfully prepared with
        premium ingredients and culinary finesse. Our commitment is to fulfill
        your cravings and enrich your dining experience, one exceptional meal at
        a time.
          </p>
          <div className='explore-menu-list'>
              {menu_list.map((item,index) => {
                  return (
                      <div onClick={()=>setCategory(prev=>prev===item.menu_name? "All":item.menu_name)} key={index} className='explore-menu-list-item'>
                          <img className={category===item.menu_name? "active":""} src={item.menu_image} alt='' />
                          <p>{item.menu_name}</p>
                      </div>
                  )
              })}
          </div>
          <hr/>
    </div>
  );
}

export default ExploreMenu
