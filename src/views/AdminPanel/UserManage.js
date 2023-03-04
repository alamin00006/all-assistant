import React, {  } from 'react';
import useAllUser from '../../Hooks/useAllUser';

const UserManage = () => {
    const [allUser] = useAllUser();
       console.log(allUser);
    return (
        <div>
            <h3>hello</h3>
        </div>
    );
};

export default UserManage;