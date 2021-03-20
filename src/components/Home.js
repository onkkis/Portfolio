/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'
import dataService from '../services/dataservice'
import '../App.css'

//Component for homepage avatar
const Avatar = (props) => {
    const img = props.url
    return (
        <>
            <Col xs={12} md={6} lg={4}>
                <Image src={img} thumbnail fluid className="avatar"/>
            </Col>
        </>
    )
} 

//Component for homepage text
const HomeText = (props) => {
    const profile = props.profile

    return (
        <>
            <Col xs={12} md={6} lg={8}> 
                <h2> {profile.name} </h2>
                <p> {profile.bio} </p>
            </Col>
        </>
    )
}

const Home = () => {
    const [ profile, setProfile] = useState([]) 

    //Here service gets data from github api and updates state
    useEffect(() => {
        dataService
            .getProfile()
            .then(data => {
                setProfile(data)
            })
    }, [])

    return (
        <div className="base">
            <Container fluid>
                <Row>
                    <Avatar url={profile.avatar_url}/>
                    <HomeText profile={profile}/>
                </Row>
            </Container>
        </div>
    )
    
}

export default Home