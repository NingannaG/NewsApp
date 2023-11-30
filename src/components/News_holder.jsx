import React from 'react'
import styled from 'styled-components'
import {format} from 'timeago.js'
const Wrapper = styled.div`
  width: 250px;
  height: 350px;
  background-color: #939e9e;
  color: white;
  font-size: medium;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: 200;
  border-radius: 5px;
  margin: 10px;
  padding: 7px;
  overflow: auto;
  cursor: pointer;


`
const Heading = styled.div`
  font-size: larger;
  padding: 5px 5px;
  justify-content: center;
  align-items: center;
  align-content: center;
`
const Body = styled.div`
margin: 5px 0px;
height:fit-content;
  
`
const Footer = styled.div`
margin: 5px 0xp;
margin: 15px 0px;
  
`
const Image = styled.img`
  height: fit-content;
  width: fit-content;
  object-fit:cover;
  margin-bottom: 10px;
  align-items:center`
const Text = styled.p`
overflow-y: hidden;  
`

const News_holder = ({ item }) => {
  console.log(item)
  return (
    <a href={item.url}>
      <Wrapper>
        <Heading>{item?.title}</Heading>
        <Body>
          <Image src={item?.urlToImage===null?"No image":item.urlToImage}></Image>
          <Text>
            {item?.description === null ? "No description" : item?.description}
          </Text>

        </Body>
        <Footer>
        <p>
        Author : {item.author}
        </p>
        <p>Published : {format(item.publishedAt)}</p>
        </Footer>
      </Wrapper>
    </a>
  )
}

export default News_holder