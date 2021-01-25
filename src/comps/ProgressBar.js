import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';


const ProgressBar = ({ setFile, file }) => {
    const { url, progress } = useStorage(file);
    // console.log(progress, url);
    useEffect(() => {
        url && setFile(null);
    }, [url, setFile]);
    return (
        <div className="progress-bar" style={{ width: progress + "%" }} />
    );
};

export default ProgressBar;