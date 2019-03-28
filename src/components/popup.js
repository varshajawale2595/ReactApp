import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class Popup extends React.Component {

    render() {
        var categoryName = this.props.categoryName;
        var categoryImgUrl = (this.props.categoryImgUrl);
        var categoryValue = this.props.categoryValue;
        var imageSrc = String(categoryImgUrl);
        imageSrc = imageSrc.replace('"', '')
        imageSrc = imageSrc.slice(0, (imageSrc.length - 1))

        return (
            <div className='popup'>
                <div className='popupInner'>
                    <div align="center" >
                        <h2>{categoryName.toUpperCase()}</h2>
                        {<img src={imageSrc} style={{ height: 100 }} alt={"Avatar"} />}
                        <br />
                        {categoryValue}
                        <br />
                        <br />
                        <button className={"btn"} onClick={this.props.closePopup}>Back</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Popup;