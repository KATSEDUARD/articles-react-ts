import { ArticlesModel } from './interfaces/interfaces';
import { createStore, thunk, action } from 'easy-peasy';
import { articlesActions } from '../pages/homePage/actions/articlesActions';

export const store = createStore<ArticlesModel>({
    articles: [],
    filteredArticles: [],
    results: 0,
    searchRequest: '',
    successData: action((state, payload) => articlesActions.successData(state, payload)),
    loadData: thunk(async (actions, payload) => articlesActions.loadData(actions, payload)),
    filter: action((state, payload) => articlesActions.filter(state, payload))
});