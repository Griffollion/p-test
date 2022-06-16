import {Product} from "../../components/Product/Product";
import styles from "./Pr.module.css";

const Pr = (items) => {
    console.log(items.items.length)
    return (
        <>
            <div className={styles.grid}>
                {items.items.map(product => <Product key={product.id+4} data={product}/>)}
            </div>
        </>
    );
};

export default Pr;