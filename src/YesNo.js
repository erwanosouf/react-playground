import React from 'react';

class YesNo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      answer : null,
      url : null,
      error : null
    }
  }

  think() {
    fetch("https://yesno.wtf/api")
    .then(response => response.json())
    .then(payload => {
      console.log(payload)
      this.setState({
        answer : payload.answer,
        url : payload.image
      });
    })
    .catch(error => {
      console.error(error);
    })
  }

  componentDidMount() {
    this.think();
  }

  componentWillUnmount() {
    // TODO cancel an ongoing request
  }

  render() {
    var content;
    if (this.state.answer) {
      content =  (
        <div>
          <p>{ this.state.answer } !</p>
          <div>
            <img src={this.state.url} className="image-yes-no" alt={ 'gif-' + this.state.answer} />
          </div>
        </div>
        )
    } else {
      content = <p>Thinking...</p>
    }
    return (
      <div>
        { content }
      </div>
    )
  }

}

export default YesNo;
