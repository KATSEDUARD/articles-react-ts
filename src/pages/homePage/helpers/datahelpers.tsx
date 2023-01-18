import { Article } from '../../../store/interfaces/interfaces';

function formatData (data: any): Article {
    return data.map((item: any) => {
        return {
            id: item.id,
            title: item.title,
            image: item.imageUrl,
            shortDescription: `${item.summary.split(' ').slice(0, 9).join(' ')}...`,
            fullDescription: item.summary,
            date: item.publishedAt
        }
    });
};

const onErrorHandler = (e: any) => {
    e.target.onerror = null;
    e.target.src = 'https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg';
};

export const dataHelpers = {
    formatData,
    onErrorHandler
};