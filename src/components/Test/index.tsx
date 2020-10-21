import React, {FC, Fragment, useEffect, useState} from 'react';

const Test: FC = () => {

    const [count, setCount] = useState(0);
    const [t, st] = useState(0);
    const [y, sst] = useState(0);

    const handleClick = () => {
        setCount(1)
        st(1)
        sst(4)
    }

    useEffect(() => {
        setCount(1)
        st(1)
        // sst(4)
    }, [])
    useEffect(() => {
        setCount(1)
        st(1)
        // sst(4)
    }, [count])

    console.log('较好的积分')

    return (
        <Fragment>
            <h1>
                Hello World
            </h1>
            <button onClick={handleClick}>
                sfsf
            </button>
        </Fragment>
    )
}

export default Test