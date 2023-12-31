import React, { useEffect, useState } from 'react';
import { Dropdown } from 'antd';
import { Filter } from 'lucide-react';
import StockCard from '../components/StockCard';
import { sectors } from '../assets/stockData';
import { fetchStockPriceChange, selectStockDatas } from '../redux/stockDatas/stockDatasSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { selectTheme } from '../redux/theme/changeThemeSlice';

function HomePage() {
  const theme = useAppSelector(selectTheme);
  const { status, stockData } = useAppSelector(selectStockDatas);
  const dispatch = useAppDispatch();

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
      <div className={`h-[40vh] lg:h-[50vh] bg-primary flex justify-center ${theme}`}>
        <div
          className={`${theme} w-full max-w-wrap text-textClr flex items-center px-1 justify-center `}
        >
          <h1 className="text-3xl lg:text-5xl leading-relaxed lg:leading-[1.6]">
            <span className="font-bold">Uncover</span>
            <span className="bg-textClr m-2 rounded-2xl pb-1 px-2 lg:pb-3"><img className="inline w-[80px] lg:w-[120px] " alt="nasdaq-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/NASDAQ_Logo.svg/1280px-NASDAQ_Logo.svg.png" /></span>
            <br />
            <span className="text-6xl lg:text-8xl font-extrabold underline decoration-accent ">Wisely.</span>
          </h1>
        </div>
      </div>
      <div
        className={`flex justify-center lg:pt-4 items-center z-10 sticky top-[78.6px] ${
          isScrolled ? 'lg:-translate-y-11 ' : 'backdrop-blur-md'
        }`}
      >
        <div
          className={`h-[10vh] w-full drop-shadow-2xl max-w-filter flex gap-2  items-center lg:rounded-xl px-7 py-4 lg:w-[80%] bg-gradient-to-r from-secondary from-40% to-primary lg:mb-3 ${theme}`}
        >
          <input
            className="px-4 py-2 w-[80%] placeholder:text-xs sm:placeholder:text-base rounded-xl"
            onChange={(e) => setNameInput(e.target.value)}
            value={nameInput}
            type="text"
            placeholder="Type company name or stock symbol you want to find "
          />
          <Dropdown
            menu={filterProps}
            overlayClassName="h-[200px] overflow-scroll"
            placement="bottomRight"
            trigger={['click']}
          >
            <div
              className={`${theme} cursor-pointer w-[20%] bg-white justify-center flex items-center gap-2 border-accent border-2 p-2 rounded-xl hover:text-textClr hover:bg-accent transition`}
            >
              <Filter />
              <div className="hidden md:block">Sector</div>
            </div>
          </Dropdown>
        </div>
      </div>
      <div className="grid lg:place-content-center mb-7">
        <div className="max-w-wrap grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap lg:justify-center lg:gap-3 [&>*:nth-child(4n+0)]:max-sm:bg-secondary [&>*:nth-child(4n+1)]:max-sm:bg-secondary sm:[&>*:nth-child(2n)]:bg-secondary">
          {status === 'pending' ? (
            <div>Loading ...</div>
          ) : (
            stockData.map((data) => (
              <StockCard
                data={data}
                key={data.cik}
                nameInput={nameInput}
                selectedSector={selectedSector}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default HomePage;
