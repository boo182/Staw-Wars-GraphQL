const axios = require('axios');
const url = require('./endpoints');

const rootFetcher = function (url) {
    console.log(url);
    return axios.get(url)
    .then(res => res.data)
    .catch(err => console.log(err))
}

const resolver = function (value) {
    return Promise.all(value.map(url => {
        return axios.get(url)
        .then(res => {
            return res.data;
        })
    }))
    .then(res => {
        return res
    })
}

const allCharResolver = function (max, query) {
    const range = [...Array(max).keys()];
    const answer = Promise.all(range.map(item => {
        return axios.get(url.endpoints(query, item + 1))
        .then(res => {
            return res.data
        })
        .catch(err => console.log(err))
    }))
    .then(res => res);
    return answer;
  
}

module.exports = {
    rootFetcher,
    resolver,
    allCharResolver,
}

