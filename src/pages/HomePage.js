import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown } from 'antd';
import { Filter } from 'lucide-react';
import StockCard from '../components/StockCard';
import { sectors } from '../assets/stockData';
import { fetchStockPriceChange } from '../redux/stockDatas/stockDatasSlice';

function HomePage() {
  const theme = useSelector((state) => state.changeTheme.value);
  const { status, stockData } = useSelector((state) => state.stockDatas);
  const dispatch = useDispatch();

  const [isScrolled, setIsScrolled] = useState(true);
  const [nameInput, setNameInput] = useState('');
  const [selectedSector, setSelectedSector] = useState('');

  const handleFilter = (e) => {
    const value = sectors.find((i) => i.key === e.key).label;
    if (value === 'All') {
      setSelectedSector('');
    } else {
      setSelectedSector(value);
    }
  };

  const filterProps = {
    items: sectors,
    onClick: handleFilter,
    selectable: true,
    defaultSelectedKeys: ['All'],
    type: 'button',
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition <= 260);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    dispatch(fetchStockPriceChange());
  }, [dispatch]);

  return (
    <>
      <div className={`h-[40vh] bg-primary ${theme}`}>Container Landing Image</div>
      <div className={`flex justify-center lg:pt-4 items-center z-10 sticky top-[78.6px] ${isScrolled ? 'lg:-translate-y-11 ' : 'backdrop-blur-md'}`}>
        <div className={`h-[10vh] w-full drop-shadow-2xl max-w-filter flex gap-2  items-center lg:rounded-xl px-7 py-4 lg:w-[80%] bg-gradient-to-r from-secondary from-40% to-primary lg:mb-3 ${theme}`}>
          <input className="px-4 py-2 w-[80%] placeholder:text-xs sm:placeholder:text-base rounded-xl" onChange={(e) => setNameInput(e.target.value)} value={nameInput} type="text" placeholder="Type company name or stock symbol you want to find " />
          <Dropdown
            menu={filterProps}
            overlayClassName="h-[200px] overflow-scroll"
            placement="bottomRight"
            trigger={['click']}
          >
            <div className={`${theme} cursor-pointer w-[20%] bg-white justify-center flex items-center gap-2 border-accent border-2 p-2 rounded-xl hover:text-textClr hover:bg-accent transition`}>
              <Filter />
              <div className="hidden md:block">Sector</div>
            </div>
          </Dropdown>
        </div>
      </div>
      <div className="grid lg:place-content-center mb-7">
        <div className="max-w-wrap grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap lg:justify-center lg:gap-3 [&>*:nth-child(4n+0)]:max-sm:bg-secondary [&>*:nth-child(4n+1)]:max-sm:bg-secondary sm:[&>*:nth-child(2n)]:bg-secondary">
          {status === 'pending' ? <div>Loading ...</div> : stockData.map((data) => <StockCard data={data} key={data.cik} nameInput={nameInput} selectedSector={selectedSector} />)}
        </div>
      </div>
    </>
  );
}

export default HomePage;
