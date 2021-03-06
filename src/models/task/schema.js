
import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLID,
	GraphQLInt,
} from 'graphql';


const ColorType = new GraphQLObjectType({
	name: 'task',
	description: 'Color details ',

	fields: () => ({
		id: {
			type: GraphQLID,
			description: 'ID of the Color',
		},
		name: {
			type: GraphQLString,
			description: 'name of the Color',
		},
		code: {
			type: GraphQLString,
			description: 'name of the user',
		},
		preview: {
			type: GraphQLString,
			description: 'Username of the user',
		}
	})

});


module.exports = ColorType;

