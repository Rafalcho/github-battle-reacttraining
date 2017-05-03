import React from 'react';

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All'
    };
  }

  updateLanguage = (lang) => {
      this.setState({
        selectedLanguage: lang
      });
    };

  render() {
    const languages = ['All', 'JavaScript', 'Python', 'Ruby', 'Java', 'CSS', 'React'];

    return (
      <ul className='languages'>{
          languages.map((lang) => {
            return <li
              key={lang}
              style={lang === this.state.selectedLanguage ? {color: '#d0021b'} : null}
              onClick={() => this.updateLanguage(lang)}

              >{lang}</li>;
          })

        }
      </ul>
    );
  }
}

export default Popular;
