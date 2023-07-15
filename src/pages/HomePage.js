import React from 'react';
import { useSelector } from 'react-redux';
import StockCard from '../components/StockCard';

function HomePage() {
  const theme = useSelector((state) => state.changeTheme.value);

  const dataDummy = [
    {
      id: 1,
      title: 'Apple inc',
      symbol: 'AAPL',
      category: 'tech',
      img: '',
    },
    {
      id: 2,
      title: 'Apple inc',
      symbol: 'AAPL',
      category: 'tech',
      img: '',
    },
    {
      id: 3,
      title: 'Apple inc',
      symbol: 'AAPL',
      category: 'tech',
      img: '',
    },
    {
      id: 4,
      title: 'Google inc',
      symbol: 'AAPL',
      category: 'tech',
      img: '',
    },
    {
      id: 5,
      title: 'Google inc',
      symbol: 'AAPL',
      category: 'tech',
      img: '',
    },
    {
      id: 6,
      title: 'Google inc',
      symbol: 'AAPL',
      category: 'tech',
      img: '',
    },
    {
      id: 7,
      title: 'Google inc',
      symbol: 'AAPL',
      category: 'tech',
      img: '',
    },
  ];

  return (
    <>
      <div className={`h-[40vh] bg-primary ${theme}`}>Container Landing Image</div>
      <div className={`h-[10vh] bg-gradient-to-r from-secondary from-40% to-primary ${theme}`}>stock filter</div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:flex-wrap lg:justify-center lg:gap-3 [&>*:nth-child(4n+0)]:max-sm:bg-secondary [&>*:nth-child(4n+1)]:max-sm:bg-secondary sm:[&>*:nth-child(2n)]:bg-secondary">
        {dataDummy.map((data) => (
          <StockCard data={data} key={data.id} />
        ))}
      </div>
    </>
  );
}

export default HomePage;
