import React, { useEffect, useState } from 'react';

const Installation = () => {
    const [install , setInstall] = useState([])
    useEffect(() => {
         const saveList = JSON.parse(localStorage.getItem('install'))
         if(saveList) setInstall(saveList)
    },[])
    return (
        <div>
            <h3>Installation {install.length}</h3>
        </div>
    );
};

export default Installation;