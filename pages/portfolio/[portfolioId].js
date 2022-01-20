import { useRouter } from 'next/router';
import React from 'react';

const PortfolioProjectPage = () => {
    const router = useRouter()

    console.log(router.pathname);
    console.log(router.query);

    return <div>This is Portofolio Dynamic Routing Pages</div>;
};

export default PortfolioProjectPage;
