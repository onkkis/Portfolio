import axios from 'axios'

const getProjects = () => {
    const request = axios.get('https://api.github.com/users/onkkis/repos')
    return request.then(response => response.data)
}

const getProfile = () => {
    const request = axios.get('https://api.github.com/users/onkkis')
    return request.then(response => response.data)
}

const getReadme = (projectName) => {
    const baseUrl1 = 'https://raw.githubusercontent.com/onkkis/'
    const baseUrl2 = '/master/README.md'
    const request = axios.get(`${baseUrl1}${projectName}${baseUrl2}`)
    return request.then(response => response.data)
}


export default { getProjects, getReadme, getProfile}