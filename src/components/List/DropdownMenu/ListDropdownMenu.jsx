import { useEffect, useRef, useState } from 'react';
import styels from './ListDropdownMenu.module.css';

function ListDropdownMenu({ selectOptionList }) {
  const dropdownRef = useRef(null);
  const [selectBtn, setSelectBtn] = useState('최신순');
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
      document.addEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClick = option => {
    setIsDropdownVisible(false);
    setSelectBtn(option);
    selectOptionList.forEach(selectOption => {
      if (selectOption.option === option) selectOption.func();
    });
  };

  return (
    <>
      <div ref={dropdownRef} className={styels.wrap}>
        <div>
          <button
            type="button"
            className={`${styels['order-btn']} ${isDropdownVisible ? styels['sorted'] : styels['']}`}
            onClick={toggleDropdown}
          >
            {selectBtn}
            <i className={styels.icon}></i>
          </button>
          {isDropdownVisible && (
            <div className={`${styels['dropdown-box']} ${styels['shadow-1']}`}>
              {selectOptionList.map(option => (
                <button
                  type="button"
                  key={option.id}
                  className={`${styels.order} ${selectBtn === option.option ? styels['sorting'] : styels['']}`}
                  onClick={() => handleClick(option.option)}
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
