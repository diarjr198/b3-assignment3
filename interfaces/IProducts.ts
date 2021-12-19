interface IProducts {
    title: string;
    description: string;
    imagePath: string;
    stock: number;
    price: number;
    weight: number;
    rating: number;
    category: { id: string; category: string };
    courier: { id: string; courier: string };
    review: Array<Review>;
}

interface Review {
    id: string;
    name: string;
    comment: string;
    rating: number;
}

export default IProducts;
