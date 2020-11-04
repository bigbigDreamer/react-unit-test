import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { asyncAdd, syncAdd } from "../../store";

const ReduxContainer: FC = () => {

    const state = useSelector<{num: number;}, {num: number;}>(state => state);


    console.log(state)
    const dispatch = useDispatch();


    return (
        <div>
            <button onClick={() => dispatch(asyncAdd())}>异步增加</button>
            <button onClick={() => dispatch(syncAdd(999))}>同步增加</button>
            <p>数据： {
                state?.num
            }</p>
        </div>
    )

};

export default ReduxContainer;