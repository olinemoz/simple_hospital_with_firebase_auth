import {useEffect, useState} from 'react';

const useConsultants = () => {
    const [consultants, setConsultants] = useState([])
    useEffect(() => {
        fetch(`/consultants.json`)
            .then(response => response.json())
            .then(data => setConsultants(data))
    }, [])
    return [consultants]
};

export default useConsultants;