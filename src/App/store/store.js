import { createStore } from 'redux';
import { REST_ADR_SRV } from '../config/config'

export const initialState = {
	current: { titre: '', x: 0, y: 0, text: '', imageId: 0, color: "#000000", fontSize: 15 }
}
export const PUBLIC_ACTION_CURRENT = Object.freeze({
	SET_CURRENT: 'SET_CURRENT',
	SAVE_CURRENT: 'SAVE_CURRENT',
	LOAD_CURRENT: 'LOAD_CURRENT',
	CLEAR_CURRENT: 'CLEAR_CURRENT'
})

const currentReducer = (state = initialState, action) => {
	console.log(action)
	switch (action.type) {

		case PUBLIC_ACTION_CURRENT.SET_CURRENT:
			return { ...state, current: action.value }
		case PUBLIC_ACTION_CURRENT.CLEAR_CURRENT:
			return { ...initialState }


		case PUBLIC_ACTION_CURRENT.SAVE_CURRENT:
			fetch(`${REST_ADR_SRV}/memes${state.id ? '/' + state.current.id : ''}`, {
				headers: {
					"Content-Type": "application/json"
				},
				method: (state.current.id ? 'PUT' : 'POST'),
				body: JSON.stringify(state.current)
			}).then(flux => flux.json())
				.then(obj => { store.dispatch({ type: PUBLIC_ACTION_CURRENT.SET_CURRENT, value: obj }) })
			return state
		case PUBLIC_ACTION_CURRENT.LOAD_CURRENT:
			fetch(`${REST_ADR_SRV}/memes${action.value}`, {
				headers: {
					"Content-Type": "application/json"
				},
				method: (state.current.id ? 'PUT' : 'POST'),
				body: JSON.stringify(state.current)
			}).then(flux => flux.json())
				.then(obj => { store.dispatch({ type: PUBLIC_ACTION_CURRENT.SET_CURRENT, value: obj }) })
			return state


		default:
			return state
	}
};

const store = createStore(currentReducer);
console.log(store)
// abonnement aux changements du store
store.subscribe(() => {
	console.log(store.getState())
})
store.dispatch({ type: PUBLIC_ACTION_CURRENT.SET_CURRENT, value: { titre: '', x: 10, y: 20, text: 'Hello', imageId: 0, color: "#000000", fontSize: 17 } })

export default store
/**
let monState = undefined;
// un changement
monState = currentReducer(monState, { type: PUBLIC_ACTION_CURRENT.SET_CURRENT, value: { titre: '', x: 10, y: 20, text: 'Hello', imageId: 0, color: "#000000", fontSize: 17 } })
console.log(monState)

monState = currentReducer(monState, { type: PUBLIC_ACTION_CURRENT.SET_CURRENT, value: { titre: '', x: 10, y: 20, text: 'Un autre changement', imageId: 0, color: "#000000", fontSize: 17 } })
console.log(monState)
*/