import Link from 'next/link'
import axios from "axios";
import {GetServerSideProps} from 'next'
import {Product} from '../components/Product/Product'
import RequestForm from '../forms/RequestForm/RequestForm'
import styles from './index.module.css'

import {
    Container, Modal
} from "../components";

import {withLayout} from "../layout/Layout";
import {useState} from "react";




function Home({products, menu, social}) {
    const [modalActive, setModalActive] = useState(false)
    return (
        <>
            <div className={styles.wrapper}>
                <Container size="xl">
                    <div className={styles.grid}>
                        {products.products.map(product => <Product key={product.id} data={product} onClick={() => setModalActive(true)}/>)}
                        {products.products.map(product => <Product key={product.id + 1} data={product} onClick={() => setModalActive(true)}/>)}
                        {/*{products.products.map(product => <Product key={product.id + 2} data={product} onClick={() => setModalActive(true)}/>)}*/}
                        {/*{products.products.map(product => <Product key={product.id + 3} data={product} onClick={() => setModalActive(true)}/>)}*/}
                    </div>
                    {/*{products.products.map(product => <Product key={product.id+4} data={product}/>)}*/}
                    {/*{products.products.map(product => <Product key={product.id+5} data={product}/>)}*/}
                    {/*{products.products.map(product => <Product key={product.id+6} data={product}/>)}*/}
                    {/*{products.products.map(product => <Product key={product.id+7} data={product}/>)}*/}
                    {/*{products.products.map(product => <Product key={product.id+8} data={product}/>)}*/}
                    {/*{products.products.map(product => <Product key={product.id+9} data={product}/>)}*/}
                </Container>
            </div>

            <Modal size="m" active={modalActive} setActive={setModalActive}>
                <RequestForm/>
            </Modal>
        </>
    )
}

export const getServerSideProps = async (context) => {
    const {data: products} = await axios.get("https://dummyjson.com/products")
    const {data: menu} = await axios.get(process.env.API_URL + '/menu')
    const {data: social} = await axios.get(process.env.API_URL + '/social')
    return {props: {products, menu, social}}
}


export default withLayout(Home)