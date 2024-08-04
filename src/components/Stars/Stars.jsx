import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';

const App = ({ stars }) => {
  const raitingStars = Array.from({ length: 5 }, (_, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className="text-black" />
        ) : stars >= number ? (
          <FaStarHalfAlt className="text-black" />
        ) : (
          <AiOutlineStar className="text-black" />
        )}
      </span>
    );
  });

  return <div style={{ display: 'flex', flexDirection: 'row' }}>{raitingStars}</div>;
}

export default App;