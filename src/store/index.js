// import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import ReduxThunk from 'redux-thunk'
import heroes from '../components/heroesList/heroesSlice';
import filters from '../components/heroesFilters/filtersSlice';


// так это все внутри middleware
// const stringMiddleWare = ({dispatch, getState}) => (dispatch) => (action) => {
//     if (typeof action === 'string') {
//         return dispatch({
//             type: action
//         })
//     }
//     return dispatch(action)
// }

// более лаконичное представление
const stringMiddleWare = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
}

// store enhancer усилитель стора
// const enhancer = (createStore) => (...args) => {
//     const store = createStore(...args);

//     const oldDispatch = store.dispatch;
//     store.dispatch = (action) => {
//         if (typeof action === 'string') {
//             return oldDispatch({
//                 type: action
//             })
//         }
//         return oldDispatch(action)
//     }
//     return store;
// }

// const store = createStore(
//                 combineReducers({heroes, filters}), 
//                 compose(applyMiddleware(ReduxThunk, stringMiddleWare),
//                 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
//                 );

// создание store через Redux Toolkit
const store = configureStore({
    reducer: {heroes, filters},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleWare),
    devTools: process.env.NODE_ENV !== 'production',
    
})

export default store;