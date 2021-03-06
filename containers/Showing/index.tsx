import React, { useEffect, useState } from 'react';
import { Search } from 'react-feather';

import Cards from 'components/ListCard';
import { useSearch } from 'helper/hooks';

type Props = {
  data: any;
}

const ShowingPage: React.FC<Props> = ({ data }) => {
  const [searchKey, setSearch] = useState('');
  const [dataInit, setData] = useState(data);

  useEffect(() => {
    const newData = data?.filter((item) => item.name.toLowerCase().includes(searchKey.toLowerCase()));
    setData(newData);
  }, [searchKey]);

  useEffect(() => {
    setData(data)
  }, [data]);

  return (
    <>
      {/* Header */}
      <div className='top-bar'>
        <div className="-intro-x text-gradient text-2xl font-bold">
          Showing Soon
        </div>
      </div>

      <div className="w-64 relative text-gray-700 mt-5">
        <input onChange={(e) => setSearch(e.target.value)}
          value={searchKey}
          type="text" placeholder="Search"
          className="input w-full box pr-10 placeholder-theme-13 focus:border-theme-100" />
        <Search className='w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0'></Search>
      </div>

      {/* Conttent */}
      <div className="grid grid-cols-12 gap-6 mt-5 intro-x">
        <Cards data={dataInit} className='col-span-3' />
      </div>
    </>
  );
}

export default ShowingPage;
