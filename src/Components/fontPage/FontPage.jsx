import React from 'react';
import Banner from '../MainPage/banner/Banner';
import NonDynamicCards from './nonDynamicCards/NonDynamicCards';
import DynamicCards from './dynamicCards/DynamicCards';

const FontPage = () => {
    return (
        <div>
          <Banner/>  
          <NonDynamicCards/>
          <DynamicCards/>
        </div>
    );
};

export default FontPage;