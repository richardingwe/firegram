import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import { motion } from "framer-motion";

const ProgressBar = ({ setFile, file }) => {
    const { url, progress } = useStorage(file);
    // console.log(progress, url);
    useEffect(() => {
        url && setFile(null);
    }, [url, setFile]);
    return (
        <motion.div className="progress-bar"
            initial={{ width: 0 }}
            animate={{ width: progress + "%" }}
        />
    );
};

export default ProgressBar;