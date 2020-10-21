import React, {FC} from "react";
import Test from '../../components/Test'

import './index.less';

const Home: FC = () => {

    return (
        <div className="home">
            <h1>TDD & BDD</h1>
            <Test/>
        </div>
    )
}

export default Home