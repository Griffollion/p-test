import styles from './FilterContainer.module.css'

const FilterContainer = ({children}) => {
    return (
        <div className={styles['filterContainer']}>
            {children}
        </div>
    );
};

export default FilterContainer;