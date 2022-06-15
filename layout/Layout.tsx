import Head from 'next/head'
import cn from 'classnames'

import {LayoutProps} from "./Layout.props";
import styles from './Layout.module.css'
import {Header} from "./Header/Header";
import {Footer} from "./Footer/Footer";
import {FunctionComponent} from "react";
import {AppContextProvider, IAppContext} from "../context/app.context";


export const Layout = ({children}:LayoutProps): JSX.Element => {
    return (
        <>
            <Head>
                <title>Test</title>
            </Head>
            <div className={'root-container'}>
                <Header/>
                <main>
                    {children}
                </main>
            </div>
        </>
    )
}

export const withLayout = <T extends Record<string, unknown>& IAppContext> (Component:FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <AppContextProvider menu={props.menu}>
                <Layout>
                    <Component {...props} />
                </Layout>
            </AppContextProvider>
        )
    }
}