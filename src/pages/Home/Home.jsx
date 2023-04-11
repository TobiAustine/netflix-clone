import React from 'react'
import Main from '../../components/Header'
import Row from '../../components/Row'
import requests from '../../components/requests'


const Home = () => {

    


  return (
    <div>
      
      <Main></Main>
      <Row rowId='1' title='Upcoming Movies' fetchUrl={requests.requestUpcoming} ></Row>
      <Row rowId='2' title='Popular Movies' fetchUrl={requests.requestUpcoming} ></Row>
      <Row rowId='3' title='Top Movies' fetchUrl={requests.requestUpcoming} ></Row>
      <Row rowId='4' title='Trending Movies' fetchUrl={requests.requestUpcoming} ></Row>
     


    </div>
  )
}

export default Home