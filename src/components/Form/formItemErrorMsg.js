import React from "react";
import {CAN_NOT_EMPTY, VALIDATE_EMAIL, VALIDATE_PHONE, VALIDATE_USERNAME} from "../../contants/message";
import PropTypes from "prop-types";

const getErrorMsg = (type, label) => ({
    isEmpty: <span>{`${label}${CAN_NOT_EMPTY}`}</span>,
    maxLength: <span>{VALIDATE_USERNAME}</span>,
    isEmail: <span>{VALIDATE_EMAIL}</span>,
    isPhoneNumber: <span>{VALIDATE_PHONE}</span>,
})[type] || ''

const FormItemErrorMsg = ({type, label}) => getErrorMsg(type, label)

FormItemErrorMsg.propTypes = {
    type: PropTypes.any,
    label: PropTypes.string,
}

export default FormItemErrorMsg