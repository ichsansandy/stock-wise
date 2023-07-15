import React from 'react';
import { useSelector } from 'react-redux';
import StockCard from '../components/StockCard';
import { stockData, stockSymbol } from '../assets/stockData';

function HomePage() {
  const theme = useSelector((state) => state.changeTheme.value);

  const sectors = new Set();

  stockData.forEach((item) => {
    sectors.add(item.sector);
  });

  console.log(stockSymbol);

  return (
    <>
      <div className={`h-[40vh] bg-primary ${theme}`}>Container Landing Image</div>
      <div className={`h-[10vh] bg-gradient-to-r from-secondary from-40% to-primary lg:mb-3 ${theme}`}>stock filter</div>
      <div className="grid lg:place-content-center">
        <div className="max-w-wrap grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap lg:justify-center lg:gap-3 [&>*:nth-child(4n+0)]:max-sm:bg-secondary [&>*:nth-child(4n+1)]:max-sm:bg-secondary sm:[&>*:nth-child(2n)]:bg-secondary">
          {stockData.map((data) => (
            <StockCard data={data} key={data.cik} />
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
