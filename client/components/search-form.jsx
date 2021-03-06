import React from 'react';

const foodTypeList = [
  {
    id: 'korean',
    position: 'left',
    text: 'Korean'
  },
  {
    id: 'italian',
    position: 'center',
    text: 'Italian'
  },
  {
    id: 'chinese',
    position: 'right',
    text: 'Chinese'
  },
  {
    id: 'burgers',
    position: 'left',
    text: 'Burgers'
  },
  {
    id: 'japanese',
    position: 'center',
    text: 'Japanese'
  },
  {
    id: 'thai',
    position: 'right',
    text: 'Thai'
  },
  {
    id: 'mexican',
    position: 'left',
    text: 'Mexican'
  },
  {
    id: 'pizza',
    position: 'center',
    text: 'Pizza'
  },
  {
    id: 'vietnamese',
    position: 'right',
    text: 'Vietnamese'
  }
];

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      foodType: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value.toLowerCase() });
  }

  handleClick(event) {
    const id = event.target.getAttribute('data-foodtype');
    this.setState({ foodType: id });
  }

  handleSubmit(event) {
    event.preventDefault();
    window.location.hash = `searchResults?location=${this.state.location}&foodType=${this.state.foodType}`;
  }

  render() {
    const divItemsMobile = foodTypeList.map(foodType => {
      if (foodType.id === this.state.foodType) {
        return (
          <button type="button" onClick={this.handleClick} className="food-type selected" data-foodtype={foodType.id} key={foodType.id}>{foodType.text}</button>
        );
      } else {
        return (
          <button type="button" onClick={this.handleClick} className="food-type" data-foodtype={foodType.id} key={foodType.id}>{foodType.text}</button>
        );
      }
    });
    const divItemsDesktop = foodTypeList.map(foodType => {
      if (foodType.id === this.state.foodType) {
        return (
          <div key={foodType.id} className={`column-one-third ${foodType.position}`}>
            <button type="button" onClick={this.handleClick} className="food-type selected" data-foodtype={foodType.id}>{foodType.text}</button>
          </div>
        );
      } else {
        return (
          <div key={foodType.id} className={`column-one-third ${foodType.position}`}>
            <button type="button" onClick={this.handleClick} className="food-type" data-foodtype={foodType.id}>{foodType.text}</button>
          </div>
        );
      }
    });
    return (
      <>
        <form onSubmit={this.handleSubmit} className="search-form mobile">
          <div className="location-container">
            <input
              required
              id="location-mobile"
              type="text"
              name="location"
              className="location-search"
              placeholder="Location"
              onChange={this.handleChange}
              value={this.state.value} />
          </div>
          <div className="food-type-container">
            {divItemsMobile}
          </div>
          <div className="search-button-container">
            <button className="search-button" type="submit">Search</button>
          </div>
        </form>
        <form onSubmit={this.handleSubmit} className="search-form desktop">
          <div className="location-container">
            <input
              required
              id="location-desktop"
              type="text"
              name="location"
              className="location-search"
              placeholder="Location"
              onChange={this.handleChange} />
            <button className="search-button" type="submit">Search</button>
          </div>
          <div className="food-type-container">
            {divItemsDesktop}
          </div>
        </form>
      </>
    );
  }
}
