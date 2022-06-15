import cn from 'classnames'

import {ContainerProps} from "./Container.props";
import styles from './Container.module.css'

const Container = ({size = "l", children}: ContainerProps): JSX.Element => {
    return (
        <div className={cn(styles['container'], styles[size])}>
            {children}
        </div>
    );
};

export default Container;