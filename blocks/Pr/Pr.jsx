import {Product} from "../../components/Product/Product";
import styles from "./Pr.module.css";
import {useEffect} from "react";

const Pr = ({items, callback, id}) => {
    return (
        <>
            <div className={styles.grid}>
                {items.map(product => <Product key={product.id+id} onClick ={callback} data={product}/>)}
            </div>
        </>
    );
};

export default Pr;