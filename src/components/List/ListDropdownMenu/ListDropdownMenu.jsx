import { useEffect, useRef, useState } from 'react';
import styels from './ListDropdownMenu.module.css';

function ListDropdownMenu({ selectOptionList }) {
  const dropdownRef = useRef(null);
  const [selectedBtn, setSelectedBtn] = useState('최신순');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleClickOutside = e => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClick = (option, index) => {
    setIsDropdownVisible(false);
    setSelectedBtn(option);
    selectOptionList[index].func();
  };

  return (
    <>
      <div className={styels.wrap}>
        <div ref={dropdownRef}>
          <button
            ref={dropdownRef}
            type="button"
            className={`${styels['order-btn']} ${isDropdownVisible ? styels['sorted'] : styels['']}`}
            onClick={toggleDropdown}
          >
            {selectedBtn}
            <i className={styels.icon}></i>
          </button>
          {isDropdownVisible && (
            <div className={`${styels['dropdown-box']} ${styels['shadow-1']}`}>
              {selectOptionList.map((option, index) => (
                <button
                  type="button"
                  key={option.id}
                  className={`${styels.order} ${selectedBtn === option.option ? styels['sorting'] : styels['']}`}
                  onClick={() => handleClick(option.option, index)}
                >
                  {option.option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ListDropdownMenu;
