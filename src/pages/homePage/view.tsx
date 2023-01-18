import { useEffect } from 'react';
import { Container, Grid, Divider } from '@mui/material';
import { CardArticle } from '../../components/article-card/view';
import { SearchInput } from '../../components/search-input/view';
import { Article } from '../../store/interfaces/interfaces';
import { constants } from './constants';
import { useStoreActions, useStoreState } from '../../store/hooks/hooks';

import './styles.scss';

const { FILTER_TITLE, RESULTS } = constants;

export const HomePage: React.FC = () => {
    const actions = useStoreActions(actions => actions);
    const state = useStoreState(state => state);
    const { filteredArticles, results, searchRequest } = state;

    useEffect(() => {
        actions.loadData();
    }, []);

    return <div className="home-page-layout">
        <Container maxWidth="lg">
            <div className="filter-title">{FILTER_TITLE}</div>
            <SearchInput />
            <div className="results">{RESULTS}: {results}</div>
            <Divider />
            <Grid container spacing={1}>
                {filteredArticles.map((article: Article) => <Grid item key={article.id} xs={4} display="flex" justifyContent="center">
                    <CardArticle searchRequest={searchRequest} article={article} />
                </Grid>)}
            </Grid>
        </Container>
    </div>;
};