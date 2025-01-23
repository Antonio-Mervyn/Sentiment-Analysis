
import react, { Component } from 'react';
import { Button } from 'react-native';
import './App.css';
import Sentiment from 'sentiment';
const sentiment = new Sentiment();
//This is a Comment 
class App extends Component {

  constructor(props){
    super(props);
    this.state={
        sentimentScore: null,
        generalSentiment: null
    };
    this.findSentiment = this.findSentiment.bind(this);
  }

  findSentiment(event) {
    const result = sentiment.analyze(event.target.value)
    //console.log(result)
    this.setState({
      sentimentScore: result.score
    })
    if(result.score < 0 && result.score >= -3){
      this.setState({generalSentiment: 'Negative'})
    }
    else if(result.score < -3){
      this.setState({generalSentiment: 'Extremely Negative'})
    }
    else if(result.score > 0 && result.score <= 3){
      this.setState({generalSentiment: 'Positive'})
    }
    else if(result.score > 3){
      this.setState({generalSentiment: 'Extrememly Positive'})
    }
    else{
      this.setState({generalSentiment: 'Neutral'})
    }
    
  }
  
  

  render() {
    return(
      <div className="App">
       <h2> Sentiment Analyser in React </h2>
       <p>Enter Text for Analysis</p>
       <textarea onChange={this.findSentiment} />
       <Button title='Find Sentiment' onClick ={this.onClick}/>
       <p>Sentiment Score: <textfield> {this.state.sentimentScore}</textfield></p>
       <p>General Sentiment: <textfield>{this.state.generalSentiment}</textfield></p>
     </div> 

    )
  }  
 }

export default App; 