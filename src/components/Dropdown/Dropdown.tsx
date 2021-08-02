import React, { useMemo, useRef, useEffect, useState } from 'react';
import s from './Dropdown.module.scss';

interface Props {
   activeOption: string | undefined;
   setActiveOption: React.Dispatch<React.SetStateAction<string | undefined>>;
   options: string[];
   placeHolder: string;
}

export const Dropdown: React.FC<Props> = ({ activeOption, setActiveOption, options, placeHolder }) => {
   const dropdownOptions = useMemo(() => options, [options]);

   const [visibleDropdown, setVisibleDropdown] = useState<boolean>(false);
   const toggleVisibleDropdown = () => setVisibleDropdown(!visibleDropdown);

   const setOption = (payload: string) => {
      setActiveOption(payload);
      toggleVisibleDropdown();
   };

   const dropdownRef = useRef<HTMLDivElement>(null);
   const nonDropdownClick = (event: any) => {
      const path = event.path || (event.composedPath && event.composedPath());
      if (!path.includes(dropdownRef.current)) setVisibleDropdown(false);
   };
   useEffect(() => {
      document.body.addEventListener('click', nonDropdownClick);
      return () => document.body.removeEventListener('click', nonDropdownClick);
   }, []);

   return (
      <div ref={dropdownRef} className={s.dropdown}>
         <button onClick={toggleVisibleDropdown} type="button">
            <span>{activeOption ? `Selected: ${activeOption}` : placeHolder}</span>
         </button>
         {visibleDropdown ? (
            <ul className={s.dropdown__list}>
               {dropdownOptions.map((name, index) => (
                  <li
                     onClick={() => setOption(name)}
                     key={name + index}
                     style={activeOption === name ? { border: '1px solid #000' } : undefined}>
                     {name}
                  </li>
               ))}
            </ul>
         ) : undefined}
      </div>
   );
};
