import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5],
      searchCount: 0,
      found: false,
      error: ''
    }
  }

  binarySearch(array, value, start, end) {
    let sstart = start === undefined ? 0 : start;
    let eend = end === undefined ? array.length : end;

    // start = start === undefined ? 0 : start;
    // end = end === undefined ? array.length : end;

    if (sstart > eend) {
      this.found = true;
      return -1;
    }

    const index = Math.floor((sstart + eend) / 2);
    const item = array[index];
    this.count++

    console.log(sstart, eend);
    if (item == value) {
      this.found = true;
      return index;
    }
    else if (item < value) {
      return this.binarySearch(array, value, index + 1, eend);
    }
    else if (item > value) {
      return this.binarySearch(array, value, sstart, index - 1);
    }
  };

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
      this.found = false;
      this.count = 0;
      let searchIndex = this.binarySearch(this.state.data.sort(), searchNum);
      this.setState({
        searchCount: this.count,
        found: this.found,
        error: ''
      });
    }
  }

  render() {
    console.log(this.state.searchCount);
    return (
      <main>
        <h1>Binary Search App</h1>
        <form className="search-form" onSubmit={(e) => this.onSubmit(e)}>
          <input
            type='text'
            ref={input => this.textInput = input}
          />
          <button>Search</button>
        </form>
        {this.state.error !== '' ? <p>{this.state.error}</p> : ''}
        {this.state.found ? <p>Found</p> : <p>Not Found</p>}
        {this.state.searchCount === undefined ? <p>Not Found</p> : ''}
        {this.state.searchCount >= -1 ? <p>Search Count: {this.state.searchCount}</p> : ''}
      </main>
    );
  }
}
