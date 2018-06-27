import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5],
      searchCount: 0,
      error: ''
    }
  }

  linearSearch(array, value) {    
    for (let i = 0; i < array.length; i++) {
      if (array[i] === value) {
        return i + 1;
      }
    }

    return -1;
  }

  onSubmit(event) {
    event.preventDefault();
    const text = this.textInput.value.trim();
    // this.textInput.value = '';

    // if not good input, set state error message
    // else run algorithm 
    let searchNum = parseInt(text, 10);
    console.log(searchNum);
    if (isNaN(searchNum)) {
      this.setState({
        searchCount: 0,
        error: 'Please enter a number'
      });
    }
    else {
      console.log('Searching for ', searchNum);
      let searchCount = this.linearSearch(this.state.data, searchNum);
      this.setState({
        searchCount: searchCount,
        error: ''
      });
    }
  }

  render() {
    return (
      <main>
        <h1>Linear Search App</h1>
        <form className="search-form" onSubmit={(e) => this.onSubmit(e)}>
          <input
            type='text'
            ref={input => this.textInput = input}
          />
          <button>Search</button>
        </form>
        {this.state.error !== '' ? <p>{this.state.error}</p> : ''}
        {this.state.searchCount === -1 ? <p>Not Found</p> : ''}
        {this.state.searchCount > 0 ? <p>Search Count: {this.state.searchCount}</p> : ''}
      </main>
    );
  }
}
