import { Card, CardMedia, Stack } from '@mui/material';
import { constants } from '../../pages/homePage/constants';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './styles.scss';
import { Article } from '../../store/interfaces/interfaces';
import Highlighter from 'react-highlight-words';
import { dataHelpers } from '../../pages/homePage/helpers/datahelpers';
import { Link } from 'react-router-dom';

const { READ_MORE } = constants;

export const CardArticle: React.FC<{ article: Article, searchRequest: string }> = props => {
    const { article: { title, date, shortDescription, image, id }, searchRequest } = props;

    return <div className="card">
    <Card sx={{ maxWidth: 345 }}>
        <CardMedia
        component="img"
        alt={shortDescription}
        height="217"
        image={image}
        onError={(e) => dataHelpers.onErrorHandler(e)}
        />
        <div className="card-content">
            <div>
                <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={1}
                    className="card-date"
                >
                    <CalendarTodayIcon fontSize="small"/>
                    <div>{date}</div>
                </Stack>
            </div>
        <div className="card-title">
            <Highlighter
                highlightClassName="YourHighlightClass"
                searchWords={[searchRequest]}
                autoEscape={true}
                textToHighlight={title}
            />
        </div>
        <div className="card-description">
            <Highlighter
                highlightClassName="YourHighlightClass"
                searchWords={[searchRequest]}
                autoEscape={true}
                textToHighlight={shortDescription}
            />
        </div>
            <Link to={`articles-react-ts/articles/${id}`}>
                <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={1}
                    className="card-read-more"
                >
                    <div className="card-read-more">{READ_MORE}</div>
                    <ArrowForwardIcon fontSize="small"/>
                </Stack>
            </Link>
        </div>
    </Card>
  </div>
};