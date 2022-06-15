import cn from 'classnames'
import Link from "next/link";

import styles from './MenuDesk.module.css'
import {useContext} from "react";
import {AppContext} from "../../context/app.context";

const MenuDesk = (): JSX.Element => {
    const {menu, setMenu} = useContext(AppContext)
    return (
        <nav className={styles['menu']}>
            <ul className={styles['menu-list']}>
                {menu.map(m => <li key={m.id}><Link href={m.alias}>{m.title}</Link></li>)}
            </ul>
        </nav>
    )
}

export default MenuDesk;