import { Review } from './../shared/Review';

export class Dish {
    id: number;
    name: string;
    image: string;
    category: string;
    label: string;
    price: string;
    description: string;
    reviews: Review[];
}

