const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,          
} = require('graphql')
const axios = require('axios');
const fetcher = require ('./fetcher');
const url = require('./endpoints');
// Types import
const films = require('./Types/films');
const people = require('./Types/people');
const planets = require('./Types/planets');
const starships = require('./Types/starships');
const vehicles = require('./Types/vehicles');
const species = require('./Types/species');

//CONSTANTS
const PEOPLE = 'people';
const FILM = 'film';
const STARSHIPS = 'starships';
const VEHICLES = 'vehicles';
const SPECIES = 'species';
const PLANETS = 'planets';


// Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        people: {
            type: people.PeopleType,
            args: {
                id: {type: GraphQLInt}
            },
            resolve(parentValue, args) {
                return fetcher.rootFetcher(url.endpoints(PEOPLE, args.id))
            }
        },
        film: {
            type: films.FilmType,
            args: {
                id: {type: GraphQLInt}
            },
            resolve(parentValue, args) {
                return fetcher.rootFetcher(url.endpoints(FILM, args.id))
            }
        },
        starship: {
            type: starships.StarshipsType,
            args: {
                id: {type: GraphQLInt}
            },
            resolve(parentValue, args) {
                return fetcher.rootFetcher(url.endpoints(STARSHIP, args.id))
            }
        },
        vehicle: {
            type: vehicles.VehiclesType,
            args: {
                id: {type: GraphQLInt}
            },
            resolve(parentValue, args) {
                return fetcher.rootFetcher(url.endpoints(VEHICLES, args.id))
            }
        },
        specie: {
            type: species.SpeciesType,
            args: {
                id: {type: GraphQLInt}
            },
            resolve(parentValue, args) {
                return fetcher.rootFetcher(url.endpoints(SPECIES, args.id))
            }
        },
        planet: {
            type: planets.PlanetType,
            args: {
                id: {type: GraphQLInt}
            },
            resolve(parentValue, args) {
                return fetcher.rootFetcher(url.endpoints(PLANETS, args.id))
            }
        },
        characters: {
            type: GraphQLList(people.PeopleType),
            args: {
                max: {type: GraphQLInt}
            },
            resolve(parentValue, args) {
                return fetcher.allCharResolver(args.max, PEOPLE)
                
            }
        },
        planets: {
            type: GraphQLList(planets.PlanetType),
            args: {
                max: {type: GraphQLInt}
            },
            resolve(parentValue, args) {
                return fetcher.allCharResolver(args.max, PLANETS)
                
            }
        },
        films: {
            type: GraphQLList(films.FilmType),
            args: {
                max: {type: GraphQLInt}
            },
            resolve(parentValue, args) {
                return fetcher.allCharResolver(args.max, FILMS)
                
            }
        },
        vehicles: {
            type: GraphQLList(vehicles.VehiclesType),
            args: {
                max: {type: GraphQLInt}
            },
            resolve(parentValue, args) {
                return fetcher.allCharResolver(args.max, VEHICLES)
                
            }
        },
        starships: {
            type: GraphQLList(starships.StarshipsType),
            args: {
                max: {type: GraphQLInt}
            },
            resolve(parentValue, args) {
                return fetcher.allCharResolver(args.max, STARSHIPS)
                
            }
        },
        species: {
            type: GraphQLList(species.SpeciesType),
            args: {
                max: {type: GraphQLInt}
            },
            resolve(parentValue, args) {
                return fetcher.allCharResolver(args.max, SPECIES)
                
            }
        },
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});