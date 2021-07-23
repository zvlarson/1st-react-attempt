import React from 'react'
import MenuItem from './MenuItem'
function Menu(){
    return(
        <ul>
            <MenuItem item="Hamburgers" />
            <MenuItem item="Chicken Fingers" />
            <MenuItem item="Fries" />
            <MenuItem item="Chicken Patty" />
            <MenuItem item="Steak" />
        </ul>
    )
}

export default Menu