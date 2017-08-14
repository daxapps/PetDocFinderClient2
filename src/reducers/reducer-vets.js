// import { ADD_PRICE } from "../actions/prices";

// const initialState = {
// 	prices: [{
// 			service: "Boarding",
// 			price: "$20.00"
// 		},
// 		{
// 			service: "Shampoo",
// 			price: "$20.00"
// 		},
// 		{
// 			service: "Vaccines",
// 			price: "$40.00"
// 		}
// 	]
// };

// export default function(state = initialState, action) {
// 	switch (action.type) {
// 		case ADD_PRICE:
// 			return Object.assign({}, state, {
// 				prices: [
// 					...state.prices,
// 					{
// 						service: action.name,
// 						price: action.price
// 					}
// 				]
// 			});

// 		default:
// 			return state;
// 	}
// }
