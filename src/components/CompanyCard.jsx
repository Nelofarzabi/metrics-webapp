import React from 'react';
import PropTypes from 'prop-types';
import { HiOutlineArrowRightCircle } from 'react-icons/hi2';

const CompanyCard = ({ name, price, symbol }) => (
  <li className="card text-white flex flex-col items-end justify-between h-[250px] bg-center bg-no-repeat bg-cover p-3 ">
    <div>
      <HiOutlineArrowRightCircle style={{ fontSize: '1.6rem' }} />
    </div>
    <h2 className=" flex flex-col gap-2">
      <p className=" text-2xl ">
        {name}
      </p>
      <span className="bg-slate-600 self-end rounded-md py-1 px-3 tracking-widest">{symbol}</span>
      <span className="self-end text-2xl">
        $
        {price}
      </span>
    </h2>
  </li>
);

CompanyCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
};

export default CompanyCard;