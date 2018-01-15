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
const planets = require('./planets');
const starships = require('./starships');
const vehicles = require('./vehicles');
const species = require('./species');

// People Type
module.exports.PeopleType = new GraphQLObjectType({
    name: 'People',
    fields: () => ({
        name: {type: GraphQLString},
        height: {type: GraphQLString},
        hair_color: {type: GraphQLString},
        skin_color: {type: GraphQLString},
        eye_color: {type: GraphQLString},
        birth_year: {type: GraphQLString},
        gender: {type: GraphQLString},
        homeworld: {
            type: new GraphQLList(planets.PlanetType),
            resolve(parentValue) {
                axios.get(parentValue.homeworld)
                .then(res => res)
            }  
        },
        films: {
            type: new GraphQLList(films.FilmType),
            resolve(parentValue) {
                return fetcher.resolver(parentValue.films);
            }
        },
        species: {
            type: new GraphQLList(species.SpeciesType),
            resolve(parentValue) {
                return fetcher.resolver(parentValue.species);
            }
        },
        vehicles: {
            type: new GraphQLList(vehicles.VehiclesType),
            resolve(parentValue) {
                return fetcher.resolver(parentValue.vehicles);
            }
        },
        starships: {
            type: new GraphQLList(starships.StarshipsType),
            resolve(parentValue) {
                return fetcher.resolver(parentValue.starships);
            }
        },
        created: {type: GraphQLString},
        edited: {type: GraphQLString},
        url: {type: GraphQLString},
    }),
})