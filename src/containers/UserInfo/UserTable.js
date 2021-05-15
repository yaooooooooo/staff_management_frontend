import React, {useMemo, useState} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Table from "../../components/Table"
import Empty from "../../components/Empty"
import RippleButton from "../../components/RippleButton"
import {createThrottleProxy} from "../../util";
import {DELETE_BUTTON, DELETE_MODAL_CONTENT, COMFIRM_BUTTON, DELETE_MODAL_TITLE, CONCEL_BUTTON} from "../../contants/message";
import Modal from "../../components/Modal";
import deleteIcon from "../../assets/images/users/delete.png"

function UserTable({data, deleteHandler}) {
    console.log('UserTable------渲染中');
    const [isModal, setModal] = useState(false);
    const [name, setName] = useState({})
    const columns = useMemo(() => [
        {
            title: '用户名',
            name: 'name',
            width: 100,
        },
        {
            title: '邮箱',
            name: 'email',
            width: 250,
        },
        {
            title: '电话',
            name: 'phone',
            width: 150,
        },
        {
            title: '操作',
            name: 'operation',
            width: 100,
            Cell: tbodyItem => (
                <RippleButton onClick={createThrottleProxy(() => {
                    setName(tbodyItem.name);
                    setModal(true);
                }, 300)}>{DELETE_BUTTON}</RippleButton>
            ),
        }
    ], []);

    const footer = () => {
        return (
            <div className="footer">
                <RippleButton onClick={() => {
                    setModal(false);
                }}>{CONCEL_BUTTON}</RippleButton>
                <RippleButton onClick={() => {
                    setModal(false);
                    deleteHandler(name)
                }}>{COMFIRM_BUTTON}</RippleButton>
            </div>
        )
    }

    const content = () => {
        return (
            <>
                <img src={deleteIcon} />
                <p>{ `${DELETE_MODAL_CONTENT}${name}?` }</p>
            </>
        )
    }


    return (
        <>
            <Table
                columns={columns}
                data={data}
            />
            {(!data?.length) && <Empty/>}
            <Modal
                isVisible={isModal}
                // title={`${DELETE_MODAL_TITLE}`}
                content={content()}
                footer={footer()}
                onClose={() => setModal(false)}
            />
        </>
    )
}

UserTable.propTypes = {
    data: PropTypes.array,
    deleteHandler: PropTypes.func
}

const mapStateToProps = state => {
    return ({
        data: state.userReducer.dataSource,
    })
};

export default connect(mapStateToProps, null)(React.memo(UserTable));
