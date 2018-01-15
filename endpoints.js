const url = 'https://swapi.co/api'
module.exports.endpoints = (query, params) => {
        return `${url}/${query}/${params}`
    }