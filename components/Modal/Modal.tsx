import cn from "classnames"
import {ModalProps} from "./Modal.props";
import styles from './Modal.module.css'
import {useSelector} from "react-redux";

const Modal = ({ setActive, children, size}: ModalProps): JSX.Element => {
    const isModalActive = useSelector(state => state.modal.modal.isActive)
    return (
        <div className={cn(styles.modal, {
            [styles.active]: isModalActive
        })} onClick={() => setActive(false)}>
            <div className={cn(styles["modal-dialog"], {
                [styles['s']]: size === 's',
                [styles['m']]: size === 'm',
                [styles['l']]: size === 'l',

            })} onClick={() => setActive(false)}>
                <div className={styles["modal-close"]} onClick={() => setActive(false)}>
                    x
                </div>
                <div className={styles['modal-content']} onClick={e => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </div>
    )
};

export default Modal;