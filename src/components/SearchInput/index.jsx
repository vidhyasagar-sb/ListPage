import search from '../../assets/images/search.svg';
import mic from '../../assets/images/mic.svg';

import './searchInput.css';

const SearchInput = ({ placeholder }) => {
  return (
    <div className='searchInput'>
      <input placeholder={placeholder} />
      <div className='iconWrap'>
        <div className='SearchImage'>
          <img src={search} alt='Search' />
        </div>
        <div className='inputLine'></div>
        <div className='SearchImage'>
          <img src={mic} alt='Search' />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
