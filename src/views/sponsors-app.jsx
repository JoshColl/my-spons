import { useEffect, useState } from 'react';
import { SponsorsList } from '../cmps/sponsors-list.jsx';

export const SponsorsApp = () => {

    const [sponsData, setSponsData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch("https://youngstartup.io/api/cwebsite/get_sponsors");
        const data = await response.json();
        setSponsData(data);
    };

    return (
        <div className='sponsors-app'>
            <SponsorsList sponsData={sponsData} />
        </div>
    );
};