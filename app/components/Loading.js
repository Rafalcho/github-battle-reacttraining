import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  content: {
    textAlign: 'center',
    fontSize: '35px'
  }
};

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text

    };
  }

  componentDidMount() {
    let stoper = this.props.text + '...';
    this.interval = setInterval(()=> {
      if (this.state.text === stoper) {
        this.setState({
          text: this.props.text
        });
      } else {
        this.setState(function(prevState) {
          return {
            text: prevState.text + '.'
          };
        });
      }
    }, 300);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <p style={styles.content}>
        {this.state.text}
      </p>
    );
  }
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired
};

Loading.defaultProps = {
  text: 'Loading',
  speed: 300
};

export default Loading;
