// @ts-nocheck
import Head from 'next/head'
import Script from 'next/script'
import cn from 'classnames'

import { LayoutProps } from "./Layout.props";
import styles from './Layout.module.css'
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { FunctionComponent } from "react";
import { AppContextProvider, IAppContext } from "../context/app.context";
import { YMInitializer } from 'react-yandex-metrika';


export const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <>
            <Head>
                <title>Test</title>
                <script>window.yaContextCb = window.yaContextCb || []</script>
                <YMInitializer accounts={[90053236]} options={{ webvisor: true }} version="2" />
            </Head>
            <div className={'root-container'}>
                <Header />
                <main>
                    {children}
                </main>
            </div>
        </>
    )
}

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <AppContextProvider menu={props.menu}> <Layout> <Component {...props} /> </Layout> </AppContextProvider>
        )
    }
}