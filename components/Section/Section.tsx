import cn from 'classnames'

import {SectionProps} from "./Section.props";
import styles from './Section.module.css'

const Section = ({
                     tag = "section",
                     paddings = "l",
                     indentTop = false,
                     indentBottom = false,
                     children,
                     background,
                     ...props
                 }: SectionProps): JSX.Element => {

    switch (tag) {
        case "div":
            return (
                <div className={cn(styles['section'], styles[background], styles[paddings], {
                    [styles['indent-top']]: indentTop === true,
                    [styles['indent-bottom']]: indentBottom === true,
                })}
                     {...props}
                >
                    {children}
                </div>
            )
        case "section":
            return (
                <section className={cn(styles['section'], styles[background], styles[paddings], {
                    [styles['indent-top']]: indentTop === true,
                    [styles['indent-bottom']]: indentBottom === true,
                })}
                         {...props}
                >
                    {children}
                </section>
            )
        default:
            return <></>
    }
};

export default Section;