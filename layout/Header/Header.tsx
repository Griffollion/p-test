import cn from 'classnames'
import Link from "next/link";

import styles from './Header.module.css'
import {Button, Container, Logo} from "../../components";
import MenuDesk from "../MenuDesk/MenuDesk";

export const Header = (): JSX.Element => {
    return (
        <>
            <header className={styles['header']}>
                <Container size={"l"}>
                    <div className={styles['header-content']}>
                        <Logo size={'m'}/>
                        <MenuDesk/>
                    </div>
                </Container>
            </header>
        </>
    )
}

