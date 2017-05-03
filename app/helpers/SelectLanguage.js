import React from 'react';
import PropTypes from 'prop-types';

export const SelectLanguage = (props) => {
  const languages = ['All', 'JavaScript', 'Python', 'Ruby', 'Java', 'CSS', 'React'];

  return (
    <ul className='languages'>{
        languages.map((lang) => {
          return (
            <li
              key={lang}
              style={lang === props.selectedLanguage ? {color: '#d0021b'} : null}
              onClick={() => props.onSelect(lang)}>
            {lang}
          </li>);
        })

      }
    </ul>
  );
};

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};
