import React, {useCallback,Memo} from "react";
import {useForm} from 'react-hook-form';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import Form from "../../components/Form";
import FormItem from "../../components/Form/formItem";
import RippleButton from "../../components/RippleButton";
import {createThrottleProxy} from "../../util";
import {
    EMAIL,
    EMAIL_PLACEHOLDER,
    PHONE,
    PHONE_PLACEHOLDER,
    SUBMIT_BUTTON,
    USER_NAME, USER_NAME_PLACEHOLDER
} from "../../contants/message";
import {
    emailValidator,
    isRequiredValidator,
    phoneValidator,
    userMaxLengthValidator,
} from "../../components/Form/validator";

function UserList({postUser}) {
    console.log('UserList------渲染中');
    const {register, handleSubmit, errors, reset} = useForm();
    const onSubmitHandler = useCallback(formValue => {
        postUser(JSON.stringify(formValue));
        reset();
    }, []);
    return (
        <>
            <Form errors={errors} onSubmit={handleSubmit(createThrottleProxy(onSubmitHandler, 1000))}>
                <FormItem label={USER_NAME} name={`name`}>
                    <input
                        className={errors.name && 'red-border'}
                        type="text"
                        placeholder={USER_NAME_PLACEHOLDER}
                        name="name"
                        ref={register({
                            validate: {
                                isEmpty: isRequiredValidator,
                                maxLength: userMaxLengthValidator,
                            }
                        })}/>
                </FormItem>
                <FormItem label={EMAIL} name={`email`}>
                    <input
                        className={errors.email && 'red-border'}
                        type="text"
                        placeholder={EMAIL_PLACEHOLDER}
                        name="email"
                        ref={register({
                            validate: {
                                isEmpty: isRequiredValidator,
                                isEmail: emailValidator,
                            }
                        })}/>
                </FormItem>
                <FormItem label={PHONE} name={`phone`}>
                    <input
                        className={errors.phone && 'red-border'}
                        type="tel"
                        placeholder={PHONE_PLACEHOLDER}
                        name="phone"
                        ref={register({
                            validate: {
                                isEmpty: isRequiredValidator,
                                isPhoneNumber: phoneValidator,
                            }
                        })}/>
                </FormItem>
                <RippleButton>{SUBMIT_BUTTON}</RippleButton>
            </Form>
        </>
    );
}


UserList.propTypes = {
    postUser: PropTypes.func
}

const mapStateToProps = ({todoReducer}) => ({
    dataSource: todoReducer,
});

export default connect(mapStateToProps, null)(React.memo(UserList));

