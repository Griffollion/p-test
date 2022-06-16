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
import {useEffect, useRef} from "react";
import dynamic from 'next/dynamic'
import useOnScreen from "../hooks/useOnScreen";
import {useDispatch, useSelector} from "react-redux";
import {toggleModal} from "../store/modalSlice";


const DynamicComponent1 = dynamic(() => import('../blocks/Pr/Pr'))


function Home({products, menu, social}) {
    const DynamicComponent2Ref = useRef();
    const DynamicComponent2RefValue = useOnScreen(DynamicComponent2Ref);
    const DynamicComponent3Ref = useRef();
    const DynamicComponent3RefValue = useOnScreen(DynamicComponent3Ref);
    const DynamicComponent4Ref = useRef();
    const DynamicComponent4RefValue = useOnScreen(DynamicComponent4Ref);
    const dispatch = useDispatch()

    const xx= () => {
        dispatch(toggleModal())
    }
    return (
        <>
            <div className={styles.wrapper}>
                <Container size="xl">
                    <DynamicComponent1 callback={xx} id="0" items={products.products}/>
                    <div ref={DynamicComponent2Ref}>
                        {DynamicComponent2RefValue && <DynamicComponent1 callback={xx} id="1" items={products.products}/>}
                    </div>
                    <div ref={DynamicComponent3Ref}>
                        {DynamicComponent3RefValue && <DynamicComponent1 callback={xx} id="2" items={products.products}/>}
                    </div>
                    <div ref={DynamicComponent4Ref}>
                        {DynamicComponent4RefValue && <DynamicComponent1 callback={xx} id="3" items={products.products}/>}
                    </div>

                </Container>
            </div>

            <Modal size="m" setActive={xx} >
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