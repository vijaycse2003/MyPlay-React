import React from 'react'
import '../styles/MainBar.css'
import Card from './Cards/Card'

const MainBar = () => {
  return (
    <div className='row'>
        <Card name="A R Rahman"/>
        <Card name="Haaris Jayaraj"/>
        <Card name="Yuvan Sankar Raja"/>
        <Card name="D Imman"/>
        <Card name="Vijay Anotony"/>
        <Card name="Santhosh Naryanan"/>
        <Card name="Anirudh Ravichander"/>
        <Card name="G V Prakesh"/>
        <Card name="Sam"/>
    </div>
  )
}

export default MainBar;