import cn from 'classnames'

import {PtagProps} from "./Ptag.props";
import styles from './Ptag.module.css'

const Ptag = ({align = "left", weight = 400, color = "inherit",fontSize ,children}: PtagProps): JSX.Element => {
    return (<p className={cn(styles['p'], styles['fw-' + weight], styles[color], styles[align])} style={{'fontSize': fontSize}}>{children}</p>)
};

export default Ptag;