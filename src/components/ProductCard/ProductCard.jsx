import React from 'react';
import { BsHeart } from 'react-icons/bs';
import StarsRaiting from '../Stars/Stars'; // Adjust the import path as necessary

const ProductCard = ({
  imageSrc,
  productName,
  price,
  originalPrice,
  stars,
  isNew,
  discount
}) => {
  return (
    <div className="w-[262px] h-[433px] relative group mb-10 "> 
      <div className="w-[262px] h-[349px] absolute left-0 top-0">
        <div className="w-[262px] h-[349px] absolute left-0 top-0 overflow-hidden">
          <img
            className="w-[262px] h-[349px] absolute left-[-1px] top-[-1px]"
            src={imageSrc}
            alt={productName}
          />
        </div>
        <div
          className="flex justify-center items-center w-[230px] h-[46px] absolute left-4 top-[287px] gap-1 px-6 py-2 rounded-lg bg-[#141718] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ boxShadow: "0px 8px 16px 0 rgba(0,0,0,0.04)" }}
        >
          <p className="text-base font-medium text-center text-[#fefefe]">
            Add to cart
          </p>
        </div>
        <div
          className="flex justify-center items-center w-8 h-8 absolute left-[214px] top-4 gap-2.5 p-1.5 rounded-[32px] bg-white"
          style={{ boxShadow: "0px 8px 16px -8px rgba(15,15,15,0.12)" }}
        >
          <BsHeart width={20} height={20} className="self-stretch flex-grow relative text-[#6C7275]" />
        </div>
        <div className="flex flex-col justify-start items-start absolute left-4 top-4 gap-2">
          {isNew && (
            <div className="flex justify-center items-center relative gap-2 px-3.5 py-1 rounded bg-white">
              <p className="text-base font-bold text-center uppercase text-[#141718]">
                NEW
              </p>
            </div>
          )}
          {discount && (
            <div className="flex justify-center items-center relative gap-2 px-3.5 py-1 rounded bg-[#38cb89]">
              <p className="text-base font-bold text-center uppercase text-[#fefefe]">
                {discount}
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-start items-start w-[262px] h-[72px] absolute left-0 top-[361px] gap-3">
        <div className="flex flex-col justify-start items-start self-stretch gap-3">
          <div className="flex flex-col justify-start items-start self-stretch relative gap-1">
            <StarsRaiting stars={stars} />
            <p className="self-stretch w-[262px] text-base font-semibold text-left text-[#141718]">
              {productName}
            </p>
            <div className="flex justify-start items-start relative gap-3">
              <p className="text-sm font-semibold text-left text-[#141718]">
                ${price}
              </p>
              {originalPrice && (
                <p className="text-sm text-left text-[#6c7275]">
                  ${originalPrice}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;