
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import News_holder from './News_holder';
import axios, { Axios } from 'axios';
import Filter from './Filter';
const Wrapper = styled.div`
 margin: 0px 120px;
 height:600px;
 background-color: wheat;
 padding: 10px 15px;
 display: flex;
 flex-direction: row;
 overflow: auto;
 flex-wrap: wrap;
 padding: 5px;
 `

const Body = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ca81373a7e384840be54fcde05382ea7`)
      setData(res.data.articles)
    }
    getData();
  }, [])
  console.log(data)
  return (
    <>
      <Filter/>
    <Wrapper>
      {
        data && data.map((item) => {
          return (<News_holder key={item.title}item={item} />);
      })}
    </Wrapper>
    </>
  )
}

export default Body