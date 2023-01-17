import React from 'react'
import styled from 'styled-components'


const NavBar = styled.div`
    height: 4rem;
    background-color:#2F494D;
    display: flex;
`
const tagLinks = styled.li`
    
`

const ImgBackground = styled.div`
    height:600px;
    width: 100%;
    background-image: url('https://res.cloudinary.com/cmacha2/image/upload/v1673057020/frontpage_wadadg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 60% 39%;
`

function First() {
  return (
    <div width={window.innerHeight}>
       <NavBar>
  
       </NavBar>

       <ImgBackground />
    </div>
  )
}

export default First

