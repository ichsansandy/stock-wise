import { Bookmark, ChevronLeft } from 'lucide-react';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

function StockDetailsPage() {
  const { id } = useParams();

  return (
    <div className="flex items-center justify-between mt-3 p-2">
      <Link to="/">
        <ChevronLeft className="w-8 h-8 " />
      </Link>
      <div className="text-center text-3xl">
        {`StockName ${id}`}
      </div>
      <Bookmark className="w-8 h-8 " />
    </div>
  );
}

export default StockDetailsPage;
