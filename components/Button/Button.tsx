import cn from 'classnames'

import {ButtonProps} from "./Button.props";
import styles from './Button.module.css'

const Button = ({appearance, block = false,size, children, ...props}: ButtonProps): JSX.Element => {
    return (
        <button className={cn(styles["button"], styles[appearance],styles[size], {
            [styles["block"]]: block
        })} onClick={props.onClick} type={props.type}>{children}</button>
    )
};

export default Button;