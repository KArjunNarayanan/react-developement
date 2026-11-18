import { useParams } from "react-router-dom"
const ProductDetails = () => {
    const { id } = useParams<{ id: string}>();
    return (
        <>
        <h1>Product Details</h1>
        <h2>Product ID: {id}</h2>
        </>
    );
}
export default ProductDetails