import './styles.scss';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useStoreActions, useStoreState } from '../../store/hooks/hooks';
import { Article } from '../../store/interfaces/interfaces';
import { Grid, Card, CardMedia, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const ArticlePage: React.FC = () => {
    const params = useParams();
    const articles = useStoreState(state => state.articles);
    const actions = useStoreActions(actions => actions);
    const article: Article | undefined = articles.find((article: Article) => article.id === Number(params.articleId));

    useEffect(() => {
        actions.loadData();
    }, []);

    return <div className="article-page-layout">
        <Grid container spacing={1}>
            <Grid xl display="flex" justifyContent="center">
                <Card className="card">
                    <CardMedia
                        component="img"
                        alt={article?.title}
                        height="245"
                        image={article?.image}
                    />
                    <div className="card-content">
                        <div className="card-content-title">
                            {article?.title}
                        </div>
                        <div className="card-content-description">
                            {article?.fullDescription}
                        </div>
                        <div className="card-content-back">
                            <Link to='articles-react-ts/'>
                                <Stack
                                    direction="row"
                                    justifyContent="flex-start"
                                    alignItems="center"
                                    spacing={1}
                                >
                                    <ArrowBackIcon fontSize="small"/>
                                    <div className="card-read-more">Back to Homepage</div>
                                </Stack>
                            </Link>
                        </div>
                    </div>
                </Card>
            </Grid>
        </Grid>
    </div>;
};