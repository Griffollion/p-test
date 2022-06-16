import cn from "classnames"
import Image from "next/image";
import styles from './Product.module.css'
import {Button} from "../index";
import {useDispatch} from "react-redux";
import {getOrder} from '../../store/orderSlice'

export const Product = ({data, ...props}) => {
    const dispatch = useDispatch()


    const zz = () => {
        dispatch(getOrder(data))
        props.onClick()
    }

    console.log('Rerender Product')
    return (
        <div className={cn(styles['product'])}>
            <div className={styles['image']}>
                <Image layout="fill" src={data.thumbnail}/>
            </div>
            <div className={styles['content']}>
                <div className={styles['head']}>
                    <div className={styles['brand']}>
                        {data.brand}
                    </div>
                    <div className={styles['category']}>
                        {data.category}
                    </div>
                </div>
                <h2 className={styles['title']}>{data.title}</h2>

                <div className={styles['head']}>
                    <div className={styles['rating']}>
                        rating: {data.rating}
                    </div>
                    <div className={styles['stock']}>
                        stock: {data.stock}
                    </div>

                </div>
                <p className={styles['description']}>
                    {data.description}
                </p>
                <div className={styles['order-container']}>
                    <div className={styles['price-block']}>
                        <div className={styles['price']}>
                            ${data.price}
                        </div>
                        <div className={styles['discount-percentage']}>
                            ${data.discountPercentage}
                        </div>
                    </div>
                    <Button appearance='primary' size="m" onClick={zz}>Order</Button>
                </div>
            </div>
        </div>
    );
};