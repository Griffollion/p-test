import React from "react";
import styles from './Input.module.css'


export const Input = ({type = 'text', ...props}) => {
    return (
        <input type={type} value={props.value} {...props} className={styles.input} />
    );
}

