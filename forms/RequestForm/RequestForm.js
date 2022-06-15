import {useForm, Controller} from "react-hook-form";
import {Input} from '../../components/Input/Input'
import {Button, Htag} from "../../components";
import {useSelector} from "react-redux";
import styles from './RequestForm.module.css'

const RequestForm = () => {
    const {register, control, handleSubmit, watch, formState: {errors}} = useForm();
    const activeOrder = useSelector(state => state.order.order)
    const onSubmit = data => alert("Send Form");
    console.log(activeOrder.title)
    return (
        <>
            <Htag tag="h2">Request Form</Htag>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.row}>
                    <Controller
                        render={({field}) => <Input {...field} />}
                        name="field1"
                        control={control}
                        defaultValue={activeOrder.title}
                    />
                    {errors.field1 && <span>This field is required</span>}
                </div>


                <div className={styles.row}>
                    <Controller
                        render={({field}) => <Input {...field} />}
                        name="field2"
                        control={control}
                        defaultValue={activeOrder.title}
                    />

                    {errors.field2 && <span>This field is required</span>}
                </div>

                <div className={styles.row}>
                    <Controller
                        render={({field}) => <Input {...field} />}
                        name="field3"
                        control={control}
                        defaultValue={activeOrder.title}
                    />

                    {errors.field3 && <span>This field is required</span>}
                </div>


                <Button appearance="primary" type="submit" size="s">Send</Button>
            </form>
        </>
    );
};

export default RequestForm;