import Products from "../interfaces/IProducts";
import Users from "../interfaces/IUsers";

interface IOrders {
    product: Products;
    user: string | Users;
    amount: number;
    total: number;
    nameReceive: string;
    address: string;
    status: string;
}

export default IOrders;
