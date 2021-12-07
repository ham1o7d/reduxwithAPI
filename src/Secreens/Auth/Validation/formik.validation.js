
import * as yup from 'yup';

export function validate(){

    return yup.object({
        firstName:yup.string()
            .required("firstName is required"),
    })
}
