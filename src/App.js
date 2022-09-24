import './App.css';
import Navbar from './components/Navbar';
import NewsComponent from './components/NewsComponent';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React, { Component } from 'react'
import LoadingBar from 'react-top-loading-bar'

export class App extends Component {
  pageSize='5';
  apiKey=process.env.REACT_APP_NEWS_API;
    state={
      progress:0
    }
    setProgress=(progress)=>{
      this.setState({progress:progress})
    }
    render() {
    return (
      <div>
<Router>

    <div>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}
        // onLoaderFinished={() => setProgress(0)}
      />   </div>
      <Navbar/>


  {/* <Route exact path="/about" element={<About mode={mode}/>}></Route> */}
  <Routes>
  <Route  exact path='/' element={<NewsComponent setProgress={this.setProgress}  key='general'pageSize={this.pageSize} apiKey={this.apiKey} country='in' category='General'/>}/>
  <Route  exact path='/Business'  element={<NewsComponent setProgress={this.setProgress} key='Business' pageSize={this.pageSize} apiKey={this.apiKey} country='in' category='Business'/>}/>
  <Route  exact path='/Entertainment' element={<NewsComponent setProgress={this.setProgress} key="Entertainment" pageSize={this.pageSize} apiKey={this.apiKey} country='in' category='Entertainment'/>}/>
  <Route  exact path='/Health'element={<NewsComponent setProgress={this.setProgress} key="Health"  pageSize={this.pageSize} apiKey={this.apiKey} country='in' category='Health'/>}/>
  <Route  exact path='/Science'element={<NewsComponent setProgress={this.setProgress} key="Science"  pageSize={this.pageSize} apiKey={this.apiKey} country='in' category='Science'/>}/>
  <Route  exact path='/Sports'element={<NewsComponent setProgress={this.setProgress}  key="Sports" pageSize={this.pageSize} apiKey={this.apiKey} country='in' category='Sports'/>}/>
  <Route  exact path='/Technology'element={<NewsComponent setProgress={this.setProgress} key="Technology"  pageSize={this.pageSize} apiKey={this.apiKey} country='in' category='Technology'/>}/>
  </Routes>

</Router>
      </div>
    )
  }
}

export default App
// render() {
//   return (
//     <div className="App">

//     </div>
//   );
// }
// export default App