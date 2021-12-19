import Products from "../interfaces/IProducts";
import Users from "../interfaces/IUsers";

interface ICarts {
    product: Products;
    user: string | Users;
}

export default ICarts;
