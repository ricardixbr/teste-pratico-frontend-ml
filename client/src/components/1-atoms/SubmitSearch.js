import React, { Component } from 'react';

class SubmitSearch extends Component {
  render() {
    return (
     <button type="submit"  className="form-submit-search" id="form-submit-search">
      <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 0 512 512" width="25"><path d="M344.5 298c15-23.6 23.8-51.6 23.8-81.7 0-84.1-68.1-152.3-152.1-152.3C132.1 64 64 132.2 64 216.3c0 84.1 68.1 152.3 152.1 152.3 30.5 0 58.9-9 82.7-24.4l6.9-4.8L414.3 448l33.7-34.3L339.5 305.1 344.5 298zM301.4 131.2c22.7 22.7 35.2 52.9 35.2 85 0 32.1-12.5 62.3-35.2 85 -22.7 22.7-52.9 35.2-85 35.2 -32.1 0-62.3-12.5-85-35.2 -22.7-22.7-35.2-52.9-35.2-85 0-32.1 12.5-62.3 35.2-85 22.7-22.7 52.9-35.2 85-35.2C248.5 96 278.7 108.5 301.4 131.2z"/></svg>
     </button>
     );
  }
}

export default SubmitSearch;
