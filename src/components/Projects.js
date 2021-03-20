/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import ImageCarousel from './ImageCarousel'
import dataService from '../services/dataservice'

//Component for project text formatting
const ProjectText = (props) => {
    const string = props.string
    const splitted = string.split('\n')

    let text = []
    for(let i = 0; i<splitted.length;i++){
        text.push(<Card.Text key={i}>{splitted[i]}</Card.Text>)
    }

    return (
        <div>
            {text}
        </div>
    )
}

//Component which generates card components (1-3) depending on how many indexes there are in props
const ProjectGroup = (props) => {
    const projects = props.projects
    
    switch(projects.length){
    case 0:
        return (
            <></>
        )
    case 1:
        return (
            <>
                <Card>
                    <Card.Body>
                        <Card.Title>{projects[0].name} | {projects[0].language}</Card.Title>
                        <ProjectText string={projects[0].readme}/>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"><a href={projects[0].html_url}>Project link here</a></small>
                    </Card.Footer>
                    <ImageCarousel img1={projects[0].img1} img2={projects[0].img2} img3={projects[0].img3}/>
                </Card>
                <Card>
                
                </Card>
                <Card>
                
                </Card>
            </>
        )
    case 2:
        return (
            <>
                <Card>
                    <Card.Body>
                        <Card.Title>{projects[0].name} | {projects[0].language}</Card.Title>
                        <ProjectText string={projects[0].readme}/>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"><a href={projects[0].html_url}>Project link here</a></small>
                    </Card.Footer>
                    <ImageCarousel img1={projects[0].img1} img2={projects[0].img2} img3={projects[0].img3}/>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>{projects[1].name} | {projects[1].language}</Card.Title>
                        <ProjectText string={projects[1].readme}/>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"><a href={projects[1].html_url}>Project link here</a></small>
                    </Card.Footer>
                    <ImageCarousel img1={projects[1].img1} img2={projects[1].img2} img3={projects[1].img3}/>
                </Card>
                <Card>
                
                </Card>
            </>
        )
    case 3:
        return (
            <>
                <Card>
                    <Card.Body>
                        <Card.Title>{projects[0].name} | {projects[0].language}</Card.Title>
                        <ProjectText string={projects[0].readme}/>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"><a href={projects[0].html_url}>Project link here</a></small>
                    </Card.Footer>
                    <ImageCarousel img1={projects[0].img1} img2={projects[0].img2} img3={projects[0].img3}/>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>{projects[1].name} | {projects[1].language}</Card.Title>
                        <ProjectText string={projects[1].readme}/>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"><a href={projects[1].html_url}>Project link here</a></small>
                    </Card.Footer>
                    <ImageCarousel img1={projects[1].img1} img2={projects[1].img2} img3={projects[1].img3}/>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>{projects[2].name} | {projects[2].language}</Card.Title>
                        <ProjectText string={projects[2].readme}/>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted"><a href={projects[2].html_url}>Project link here</a></small>
                    </Card.Footer>
                    <ImageCarousel img1={projects[2].img1} img2={projects[2].img2} img3={projects[2].img3}/>
                </Card>
            </>
        )
    default:
        break
    }

    
}

//Component which generates cardgroups depending on how many indexes there are in props
const GroupedProjects = (props) => {
    const projects = props.projects

    let groups = []
    for(let i = 0;i < projects.length;i++){
        groups.push(<CardGroup key={i}><ProjectGroup projects={projects[i]}/></CardGroup>)
        
    }
    return (
        <div>
            {groups}
        </div>
    )
}

//Main component in this file
const Projects = () => {    
    const [ projects, setProjects] = useState([]) 

    
    //Function that chunks data array to groups of 3 for cardgroup layout
    function chunk(arr, chunkSize) {
        var R = []
        for (var i=0,len=arr.length; i<len; i+=chunkSize)
            R.push(arr.slice(i,i+chunkSize))
        return R
    }

    //Here service gets data from github api and updates state
    useEffect(() => {
        dataService
            .getProjects()
            .then( data => {
                //Async function that gets README.md files and adds them into data
                const getReadmetexts = async () => {
                    for(let i = 0;i<data.length;i++){
                        await dataService
                            .getReadme(data[i].name)
                            .then( data2 => {
                                data[i].readme = data2
                                //Add image links for imagecarousel
                                data[i].img1 = `https://raw.githubusercontent.com/onkkis/${data[i].name}/master/img1.jpg`
                                data[i].img2 = `https://raw.githubusercontent.com/onkkis/${data[i].name}/master/img2.jpg`
                                data[i].img3 = `https://raw.githubusercontent.com/onkkis/${data[i].name}/master/img3.jpg`
                                console.log(i , data[i].readme)
                            })
                    }
                }
                
                //Call function and wait for it to finish then split data into groups of 3
                getReadmetexts().then(() => {
                    const groupedProjects = chunk(data,3)
                    setProjects(groupedProjects)  
                })
                
                
            })
    }, [])
    
    return (
        <div className="base">
            <GroupedProjects projects={projects}/>
        </div>
    )
}

export default Projects