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
const species = require('./species');
const starships = require('./starships');
const vehicles = require('./vehicles');

// Planet Type
module.exports.PlanetType = new GraphQLObjectType({
    name: 'Planet',
    fields: () => ({
        climate: {type: GraphQLString},
        diameter: {type: GraphQLString},
        gravity: {type: GraphQLString},
        name: {type: GraphQLString},
        orbital_period: {type: GraphQLString},
        population: {type: GraphQLString},
        films: {
            type: new GraphQLList(films.FilmType),
            resolve(parentValue) {
                return fetcher.resolver(parentValue.films);
            }
        },
        residents: {
            type: new GraphQLList(people.PeopleType),
            resolve(parentValue) {
                return fetcher.resolver(parentValue.residents);
            }
        },
        rotation_period: {type: GraphQLString},
        surface_water: {type: GraphQLString},
        terrain: {type: GraphQLString},
        url: {type: GraphQLString},
    })
})