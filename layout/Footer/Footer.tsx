import cn from 'classnames'

import styles from './Footer.module.css'
import {Container, Social} from "../../components";
import {useContext} from "react";
import {AppContext} from "../../context/app.context";

export const Footer = (): JSX.Element => {
    return (
        <>
            <footer className={styles['footer']}>
                <Container size={"l"}>

                    {/*{social ?? social.map(s => <Social key={s.id} img={s.img} alias={s.alias} size={"m"}/>)}*/}

                </Container>
            </footer>
        </>
    )
}