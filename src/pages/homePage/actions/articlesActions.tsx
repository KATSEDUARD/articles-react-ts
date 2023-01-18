import axios from 'axios';
import { isEmpty } from 'lodash';
import { Article } from '../../../store/interfaces/interfaces';
import { dataHelpers } from '../helpers/datahelpers';

const URL: string = 'https://api.spaceflightnewsapi.net/v3/articles?_limit=100';

const loadData = (actions: any, payload: any) => {
    axios.get(URL)
    .then(function (response) {
      actions.successData(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

const successData = (state: any, payload: any) => {
    const { data } = payload;

    state.articles = dataHelpers.formatData(data);
    state.filteredArticles = state.articles;
    state.results = state.filteredArticles.length;
};

function filter (state: any, payload: any): void {
    const searchQuery: string = payload.toLowerCase();

    const displayedArticlesByTitle: Article[] = state.articles.filter((article: Article) => {
        const searchValue: string = article.title.toLowerCase();
        
        return searchValue.indexOf(searchQuery) !== -1;
    });

    const displayedArticles: Article[] = isEmpty(displayedArticlesByTitle) ? state.articles.filter((article: Article) => {
        const searchValue: string = article.shortDescription.toLowerCase();
        
        return searchValue.indexOf(searchQuery) !== -1;
    }) : displayedArticlesByTitle;

    state.searchRequest = searchQuery;
    state.filteredArticles = displayedArticles;
    state.results = state.filteredArticles.length;
};

export const articlesActions = {
    loadData,
    successData,
    filter
};