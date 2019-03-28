import React from "react";
import Popup from './popup';
import './style.css';


var Button = class Button extends React.Component {

  constructor(props) {
    super(props);
    this.state = { categoryImgUrl: '', categoryValue: '' };
    this.state = { showPopup: false };
  }

  togglePopup() {
    this.showDetails(this.props.lebel);
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  showDetails = (name) => {
    fetch('https://api.chucknorris.io/jokes/random?category=' + name)
      .then(response => response.json())
      .then(resData => {
        this.setState({
          categoryImgUrl: JSON.stringify(resData.icon_url),
          categoryValue: JSON.stringify(resData.value)
        });
      })
  }

  render() {
    return (
      <div>
        <button className={"btn"} onClick={this.togglePopup.bind(this)}>{this.props.lebel}</button>
        <div id="content">
          <div>
            {this.state.showPopup ?
              <Popup
                categoryName={this.props.lebel}
                categoryImgUrl={this.state.categoryImgUrl}
                categoryValue={this.state.categoryValue}
                closePopup={this.togglePopup.bind(this)}
              />
              : null
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Button