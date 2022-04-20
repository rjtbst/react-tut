import React from 'react';
import User from './User';

const CompMap = () => {
    const user = [
        { name: "anil", email: "assdf@sadf.com", contact: 123456 },
        { name: "rajat", email: "rajatf@sdf.com", contact: 567894 },
        { name: "kannu", email: "kannuf@sdf.com", contact: 567892 },
        { name: "guddu", email: "gudduf@sdf.com", contact: 567891 }
    ];
    return (
        <div>
            <h1>Reuse Component with list</h1>
            {user.map((item, i) =>
                <User data={item} />
            )}
        </div>
    )
}

export default CompMap