import { Action, Thunk } from 'easy-peasy';

export interface Article {
    id: number,
    title: string,
    image: string,
    date: string,
    shortDescription: string,
    fullDescription: string
};

export interface ArticlesModel {
    articles: Article[],
    results: number,
    searchRequest: string,
    filteredArticles: Article[],
    loadData: Thunk<ArticlesModel>,
    successData: Action<ArticlesModel, Article>,
    filter: Action<ArticlesModel, string>,
};