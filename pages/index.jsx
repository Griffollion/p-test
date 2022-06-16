import Link from 'next/link'
import axios from "axios";
import {GetServerSideProps} from 'next'
// import Product from '../components/Product/Product'
import RequestForm from '../forms/RequestForm/RequestForm'
import styles from './index.module.css'

import {
    Container, Modal
} from "../components";

import {withLayout} from "../layout/Layout";
import {useEffect, useRef, useState} from "react";
import dynamic from 'next/dynamic'
import useOnScreen from "../hooks/useOnScreen";

const DynamicComponent1 = dynamic(() => import('../blocks/Pr/Pr'))


function Home({products, menu, social}) {
    const DynamicComponent2Ref = useRef();
    const DynamicComponent2RefValue = useOnScreen(DynamicComponent2Ref);
    const DynamicComponent3Ref = useRef();
    const DynamicComponent3RefValue = useOnScreen(DynamicComponent3Ref);
    const DynamicComponent4Ref = useRef();
    const DynamicComponent4RefValue = useOnScreen(DynamicComponent4Ref);


    const [modalActive, setModalActive] = useState(false)
    return (
        <>
            <div className={styles.wrapper}>
                <Container size="xl">
                    <DynamicComponent1 items={products.products}/>
                    <div ref={DynamicComponent2Ref}>
                        {DynamicComponent2RefValue && <DynamicComponent1 items={products.products}/>}
                    </div>
                    <div ref={DynamicComponent3Ref}>
                        {DynamicComponent3RefValue && <DynamicComponent1 items={products.products}/>}
                    </div>
                    <div ref={DynamicComponent4Ref}>
                        {DynamicComponent4RefValue && <DynamicComponent1 items={products.products}/>}
                    </div>
                    {/*<DynamicComponent1 items={products.products}/>*/}
                    {/*{products.products.map(product => <Product key={product.id + 2} data={product} onClick={() => setModalActive(true)}/>)}*/}
                    {/*{products.products.map(product => <Product key={product.id + 3} data={product} onClick={() => setModalActive(true)}/>)}*/}
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