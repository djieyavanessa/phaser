import {createStore} from "redux";

const initialState = { score: 0, rounds: 5, gameOver: false }

const UPDATE_SCORE = 'UPDATE_SCORE'
const GAME_OVER = 'SET_GAME_OVER'
const UPDATE_ROUNDS = 'UPDATE_ROUNDS'

export const updateScore = (score) => ({
    type: UPDATE_SCORE,
    score,
})

export const resetScore = () => ({
    type: UPDATE_SCORE,
    score: 0,
})

export const gameOver = () => ({
    type: GAME_OVER,
})

export const updateRounds = () => ({
    type: UPDATE_ROUNDS,
})

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_ROUNDS:
            return { ...state, rounds: state.rounds - 1 }
        case UPDATE_SCORE:
            return { ...state, score: action.score }
        case GAME_OVER:
            return { ...state, gameOver: true }
        default:
            return state
    }
}

export const store = createStore(reducer)