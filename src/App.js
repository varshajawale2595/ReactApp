import React from 'react';
import './App.css';
import Button from './components/button'


class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { categoryList: [] };
  }

  componentDidMount() {
    fetch('https://api.chucknorris.io/jokes/categories')
      .then(response => response.json())
      .then(resData => {
        this.setState({ categoryList: resData }); //this is an asynchronous function
      })
  }

  render() {
    return (
      <div className="container">
        <div align="center">
          <h1>Categories</h1>
        </div>
        <div><br /></div>
        <table align="center">
          <tbody>
            <tr>
              {
                this.state.categoryList.map(
                  (category,index) => {
                    return (
                      <td key={index} align="center">
                        <div align="center">
                          <Button lebel={category} type="button" />
                        </div>
                      </td>
                    );
                  })
              }
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export { CategoryList };
