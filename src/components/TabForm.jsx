import React from 'react'

const TabForm = (props) => {

  const {tab} = props;

  const tabContent = [
    'Tab 1 - information goes here',
    'Tab 2 - too lazy to do anything more fancy',
    'Tab 3 - Just display this info'
    ]

  const formStyle = {
    borderStyle: "solid",
    borderColor: "black",
    width: '340px',
    height: '200px',
    marginLeft: '20px'
  }
  

  return (
    <div style={formStyle}>{tabContent[tab]}</div>
  )
}

export default TabForm