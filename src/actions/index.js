// import { createAction } from "@reduxjs/toolkit";
// import { heroesFetching, heroesFetched, heroesFetchingError } from "../components/heroesList/heroesSlice";
// import {filtersFetching, filtersFetched, filtersFetchingError} from '../components/heroesFilters/filtersSlice';

// export const fetchHeroes = (request) => (dispatch) => {
//     dispatch(heroesFetching);
//     request("http://localhost:3001/heroes")
//         .then(data => dispatch(heroesFetched(data)))
//         .catch(() => dispatch(heroesFetchingError()))
// }

// создание через createAction 
// export const heroesFetching = createAction('HEROES_FETCHING');

// // export const heroesFetching = () => {
// //     return {
// //         type: 'HEROES_FETCHING'
// //     }
// // }

// export const heroesFetched = createAction('HEROES_FETCHED');
// // export const heroesFetched = (heroes) => {
// //     return {
// //         type: 'HEROES_FETCHED',
// //         payload: heroes
// //     }
// // }

// export const heroesFetchingError = createAction('HEROES_FETCHING_ERROR');
// // export const heroesFetchingError = () => {
// //     return {
// //         type: 'HEROES_FETCHING_ERROR'
// //     }
// // }

// export const heroRemove = createAction('HERO_REMOVE');
// // export const heroRemove = (id) => {
// //     return {
// //         type: 'HERO_REMOVE',
// //         payload: id
// //     }
// // }

// export const heroCreated = createAction('HERO_CREATED');
// // export const heroCreated = (hero) => {
// //     return {
// //         type: 'HERO_CREATED',
// //         payload: hero
// //     }
// // }

// export const fetchFilters = (request) => (dispatch) => {
//     dispatch(filtersFetching());
//     request("http://localhost:3001/filters")
//         .then(data => dispatch(filtersFetched(data)))
//         .catch(() => dispatch(filtersFetchingError()))
// }

// export const filtersFetching = () => {
//     return {
//         type: 'FILTERS_FETCHING'
//     }
// }
// export const filtersFetched = (filters) => {
//     return {
//         type: 'FILTERS_FETCHED',
//         payload: filters
//     }
// }
// export const filtersFetchingError = () => {
//     return {
//         type: 'FILTERS_FETCHING_ERROR'
//     }
// }
// export const activeFiltersChanged = (filter) => {
//     return {
//         type: 'ACTIVE_FILTER_CHANGED',
//         payload: filter
//     }
// }

// export const activeFiltersChanged = (filter) => (dispatch) => {
//     setTimeout(() => {
//         dispatch({
//             type: 'ACTIVE_FILTER_CHANGED',
//             payload: filter
//         })
//     }, 1000)
// }


// этот файл больше не нужен, сохранен для памяти