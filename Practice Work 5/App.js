import React, {Component} from 'react';
import Videos from './components/videos';

class App extends Component {
    
  constructor(props)
  {
    super(props)

    this.handleChange = this.handleChange.bind(this);
    this.checkboxAvailableHandle = this.checkboxAvailableHandle.bind(this);

    this.state = {
      videos:[],
      Filtered:[],
      search:"",
      checkboxAvailable : false
    }
  }

  handleChange = event => {
    this.setState({ search: event.target.value }, () =>
      this.videoSearch()
    );
  };

  checkboxAvailableHandle = () => {
    this.setState({
      ...this.state,
      checkboxAvailable: !this.state.checkboxAvailable
    })
  }

  videoSearch = () => {
    let { search } = this.state;
    let filteredData = this.state.videos.filter(value => {
      if (!this.state.checkboxAvailable) {
        return (
          value.title.toLowerCase().includes(search.toLowerCase()))
      }
      else {
        return (
          value.title.toLowerCase().includes(search.toLowerCase()) && value.available == true)
      }
    });
    this.setState({
      ...this.state,
      Filtered: filteredData
    })
  };

  componentDidMount(){
    fetch('videos.json', {
      headers : { 
        'Content-Type': 'application/json',
         'Accept': 'application/json'
      }
    })
    .then( res => res.json() )
    .then( (data) => {
        this.setState({ videos: data , Filtered : data })
        console.log( this.state.videos )
    })
    .catch(console.log)
  }

  componentDidUpdate(previousProps, previousState) {
    if (this.state.checkboxAvailable != previousState.checkboxAvailable) {
      if (this.state.checkboxAvailable) {
        this.setState({
          Filtered: this.state.videos.filter(video => {
            return video.available === this.state.checkboxAvailable
          })
        })
      }
      else {
        this.setState({
          Filtered: this.state.videos
        })
      }
    }

  }
      
      render () {
         return (
          <>
          <Videos videolist={this.state.Filtered}
            search={this.state.search}
            checkboxAvailable={this.state.checkboxAvailable}
            handleChange={(e) => this.handleChange(e)}
            checkboxAvailableHandle={() => this.checkboxAvailableHandle()}
          />
        </>
        );
 
      }
}

export default App;
