import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StockCard from '../components/StockCard';
import { fetchStockPriceChange } from '../redux/stockDatas/stockDatasSlice';

function HomePage() {
  const theme = useSelector((state) => state.changeTheme.value);
  const { status, stockData } = useSelector((state) => state.stockDatas);
  const dispatch = useDispatch();

  const [isScrolled, setIsScrolled] = useState(true);

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
      <div className={`flex justify-center z-10  sticky top-[76.8px] ${isScrolled ? 'lg:-translate-y-5' : ''}`}>
        <div className={`h-[10vh] w-full max-w-wrap  lg:rounded-xl p-4 lg:w-[80%] bg-gradient-to-r from-secondary from-40% to-primary lg:mb-3 ${theme}`}>stock filter</div>
      </div>
      <div className="grid lg:place-content-center mb-7">
        <div className="max-w-wrap grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap lg:justify-center lg:gap-3 [&>*:nth-child(4n+0)]:max-sm:bg-secondary [&>*:nth-child(4n+1)]:max-sm:bg-secondary sm:[&>*:nth-child(2n)]:bg-secondary">
          {status === 'pending' ? <div>Loading ...</div> : stockData.map((data) => <StockCard data={data} key={data.cik} />)}
        </div>
      </div>
    </>
  );
}

export default HomePage;
