import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Container, Navbar, Text, Button, Grid, Col } from '@nextui-org/react'
import { NextPage } from 'next'

const Home: NextPage = () => {
  return (

    <Container>
      {/* Navbar */}
      <Navbar isCompact variant={'static'}>
        <Navbar.Brand>
          <Text b color='inherit'>
            LeaarnToCode
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="md">
          <Navbar.Link href='#'>Learning Platform</Navbar.Link>
          <Navbar.Link href='#'>Comunity</Navbar.Link>
          <Navbar.Link href='#'>Contact Us</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link href='#'>Login</Navbar.Link>
          <Navbar.Item>
            <Button auto flat href='#'>
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
         
      {/* Jumbotron */}
      <Grid.Container 
        justify='center'
        css={{ 
          "height": '500px',
          "backgroundImage": 'url(https://littlevisuals.co/images/sunset.jpg)',
        }}
      >
        <Grid xs={12} sm={6} alignItems='center'>
          <Col css={{ "width" : '100%' }}>
            <Text weight={"bold"} size={70} css={{ "textAlign": 'center' }}>
              The Education Platform
            </Text>
            <Text weight={"bold"} size={70} css={{ "textAlign": 'center' }}>
              Of The Future
            </Text>

      </Grid.Container>


      {/* 3 Displaying Product Cards */}
      
    </Container>

    


  )
}

export default Home
