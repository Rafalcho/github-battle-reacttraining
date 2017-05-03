import React from 'react';
import {SelectLanguage} from '../helpers/SelectLanguage';
import {fetchPopularRepos} from '../utils/api';
import RepoGrid from './RepoGrid.js';
import Loading from './Loading';


class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All',
      repos: null
    };
  }

  updateLanguage = (lang) => {
      this.setState({
        selectedLanguage: lang,
        repos: null
      });

      fetchPopularRepos(lang)
        .then((repos) => this.setState({
          repos
        }))
    };

  componentDidMount() {
      this.updateLanguage(this.state.selectedLanguage)
    }

  render() {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage} />
        {!this.state.repos ? <Loading /> : <RepoGrid repos={this.state.repos} />}

      </div>
    );
  }
}

export default Popular;
