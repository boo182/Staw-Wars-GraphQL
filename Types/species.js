const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,          
} = require('graphql')
const axios = require('axios');
const fetcher = require ('../fetcher');

// Types import
const films = require('./films');
const people = require('./people');
const planets = require('./planets');
const starships = require('./starships');
const vehicles = require('./vehicles');

// Species Type
module.exports.SpeciesType = new GraphQLObjectType({
    name: 'Species',
    fields: () => ({
        average_height: {type: GraphQLString},
        average_lifespan: {type: GraphQLString},
        calssification: {type: GraphQLString},
        created: {type: GraphQLString},
        designation: {type: GraphQLString},
        edited: {type: GraphQLString},
        eye_colors: {type: GraphQLString},
        hair_colors: {type: GraphQLString},
        homeworld: {
            type: new GraphQLList(planets.PlanetType),
            resolve(parentValue) {
                axios.get(parentValue.homeworld)
                .then(res => res)
            }  
        },
        language: {type: GraphQLString},
        name: {type: GraphQLString},
        people: {
            type: new GraphQLList(people.PeopleType),
            resolve(parentValue) {
                return fetcher.resolver(parentValue.people);
            }
        },
        films: {
            type: new GraphQLList(starships.StarshipsType),
            resolve(parentValue) {
                return fetcher.resolver(parentValue.films);
            }
        },
        skin_color: {type: GraphQLString},
        url: {type: GraphQLString},
    }),
})