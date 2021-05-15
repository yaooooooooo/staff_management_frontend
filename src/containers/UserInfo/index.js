import React, {useEffect, useMemo} from "react";
import UserList from "./UserList";
import UserTable from "./UserTable";
import {deleteUserAction, getUserAction, postUserAction} from "../../actions/users";
import {connect} from "react-redux";
import Loading from "../../components/Loading";
import './index.css'
import PropTypes from "prop-types";


function UserInfo({dataSource, getUser, deleteUser, postUser, loading, error}) {
    useEffect(() => {
        getUser();
    }, [])

    const memoData = useMemo(() => dataSource,[dataSource])
    return (
        <>
            <Loading loading={loading} error={error}/>
            <UserList postUser={postUser} getUser={getUser}/>
            <UserTable data={memoData} deleteHandler={deleteUser}/>
        </>
    );
}

UserInfo.propTypes = {
    dataSource: PropTypes.array,
    getUser: PropTypes.func,
    deleteUser: PropTypes.func,
    postUser: PropTypes.func,
    loading: PropTypes.bool,
    error: PropTypes.any,
}

const mapStateToProps = state => {
    return ({
        dataSource: state.userReducer.dataSource,
        error: state.userReducer.error,
        loading: state.userReducer.loading
    })
};


const mapDispatchToProps = dispatch => ({
    getUser: username => dispatch(getUserAction(username)),
    deleteUser: index => dispatch(deleteUserAction(index)),
    postUser: formValue => dispatch(postUserAction(formValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
