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
const species = require('./species');

// Vehicles Type
module.exports.VehiclesType = new GraphQLObjectType({
    name: 'Vehicles',
    fields: () => ({
        cargo_capacity: {type: GraphQLString},
        consumables: {type: GraphQLString},
        created: {type: GraphQLString},
        crew: {type: GraphQLString},
        edited: {type: GraphQLString},
        length: {type: GraphQLString},
        manufacturer: {type: GraphQLString},
        max_atmosphering_speed: {type: GraphQLString},
        model: {type: GraphQLString},
        name: {type: GraphQLString},
        passengers: {type: GraphQLString},
        pilots: {
            type: new GraphQLList(people.PeopleType),
            resolve(parentValue) {
                return fetcher.resolver(parentValue.pilots);
            }
        },
        films: {
            type: new GraphQLList(films.FilmType),
            resolve(parentValue) {
                return fetcher.resolver(parentValue.films);
            }
        },
        vehicle_class: {type: GraphQLString},
        url: {type: GraphQLString},
    }),
});