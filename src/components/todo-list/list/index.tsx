import React, {FC} from 'react';

interface ListProps {
    list: Array<string>;
}

const List: FC<ListProps> = ({list}) => {
    return (
        <ul>
            {
                list?.map((item, index) => (
                    <li key={index}>{item}</li>
                ))
            }
        </ul>
    )
};

export default List;