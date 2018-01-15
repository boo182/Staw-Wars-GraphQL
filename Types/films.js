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
const people = require('./people');
const planets = require('./planets');
const starships = require('./starships');
const vehicles = require('./vehicles');
const species = require('./species');

// Film Type
module.exports.FilmType = new GraphQLObjectType({
    name: 'Film',
    fields: () => ({
        characters: {
            type: new GraphQLList(people.PeopleType),
            resolve(parentValue) {
                return fetcher.resolver(parentValue.characters);
            }
        },
        created: {type: GraphQLString},
        director: {type: GraphQLString},
        edited: {type: GraphQLString},
        episode_id: {type: GraphQLInt},
        opening_crawl: {type: GraphQLString},
        planets: {
            type: new GraphQLList(planets.PlanetType),
            resolve(parentValue) {
                return fetcher.resolver(parentValue.planets);
            }
        },
        producer: {type: GraphQLString},
        starships: {
            type: new GraphQLList(starships.StarshipsType),
            resolve(parentValue) {
                return fetcher.resolver(parentValue.starships);
            }
        },
        species: {
            type: new GraphQLList(species.SpeciesType),
            resolve(parentValue) {
                return fetcher.resolver(parentValue.species);
            }
        },
        title: {type: GraphQLString},
        url: {type: GraphQLString},
        vehicles: {
            type: new GraphQLList(vehicles.VehiclesType),
            resolve(parentValue) {
                return fetcher.resolver(parentValue.vehicles);
            }
        },
    })
})