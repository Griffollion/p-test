import cn from 'classnames'
import Image from "next/image";
import Link from "next/link";

import {LogoProps} from "./Logo.props";
import styles from './Logo.module.css'

const Logo = ({size}: LogoProps): JSX.Element => {
    return (
        <Link href="/">
            <a className={cn(styles['logo'], styles[size])}>
                <Image src={'/images/logo/logo.svg'} alt={'Myfin Group'} layout={"fill"}/>
            </a>
        </Link>
    )
};

export default Logo;