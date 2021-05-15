import React, {useContext} from "react";
import PropTypes from "prop-types";
import formContext from "./formContext";
import FormItemErrorMsg from "./formItemErrorMsg";
import userIcon from "../../assets/images/users/user.png"
import emailIcon from "../../assets/images/users/email.png"
import phoneIcon from "../../assets/images/users/phone.png"

const FormItem = ({children, label, name = 'formName',}) => {
    const {errors} = useContext(formContext);
    return <>
        <div className="form-item-wrap">
            <div className="iconImg">
                <img src={name === 'name' ? userIcon : name === 'email' ? emailIcon : phoneIcon} />
                <label form={name}>{label}</label>
            </div>
            <div className={'input-error-container'}>
                {children}
                <FormItemErrorMsg type={errors[name]?.type} label={label}/>
            </div>
        </div>
    </>
}

FormItem.propTypes = {
    children: PropTypes.any,
    label: PropTypes.string,
    name: PropTypes.string,
}

FormItem.defaultProps = {
    name:  'formName',
}

export default FormItem