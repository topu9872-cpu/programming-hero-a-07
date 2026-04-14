


import AllFriends from '../allfriends/AllFriends';
import Banner from '../MainPage/banner/Banner';

import NonDynamicCards from './nonDynamicCards/NonDynamicCards';

import { useLoaderData } from 'react-router';

const FontPage = () => {
    const data=useLoaderData();
   
    return (
        <div>
          <Banner/>  
          <NonDynamicCards/>
    <AllFriends data={data}/>
        </div>
    );
};

export default FontPage;