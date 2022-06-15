import cn from 'classnames'

import {HtagProps} from "./Htag.props";
import styles from './Htag.module.css'

const Htag = ({tag = "h1", align = "left", color = "inherit", children}: HtagProps): JSX.Element => {
    switch (tag) {
        case "h1":
            return <h1 className={cn(styles["h1"], styles[color], styles[align])}>{children}</h1>
        case "h2":
            return <h2 className={cn(styles["h2"], styles[color], styles[align])}>{children}</h2>
        case "h3":
            return <h3 className={cn(styles["h3"], styles[color], styles[align])}>{children}</h3>
        case "h4":
            return <h4 className={cn(styles["h4"], styles[color], styles[align])}>{children}</h4>
        case "h5":
            return <h5 className={cn(styles["h5"], styles[color], styles[align])}>{children}</h5>
        default:
            return <></>
    }
};

export default Htag;