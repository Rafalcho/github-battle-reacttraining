import React from 'react';
import {SelectLanguage} from '../helpers/SelectLanguage';
import {fetchPopularRepos} from '../utils/api';


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


    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage} />
      </div>
    );
  }
}

export default Popular;
