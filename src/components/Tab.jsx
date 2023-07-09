import React from 'react'

const Tab = (props) => {
  
  const {name, index, selectTab, active} = props

  const tabStyle = {
    borderStyle: "solid",
    borderColor: "black",
    width: '100px',
    height: '50px'
  }

  const activeStyle = {
    backgroundColor: "black",
    color: "white",
    width: '100px',
    height: '50px'
  }

  const handleChange = (e) => {
    e.preventDefault();
    selectTab(index)
  }
  
  return (
    <>
      <button style={active == index? activeStyle: tabStyle} onClick={handleChange}>{name}</button>      
    </>
  )
}

export default Tab