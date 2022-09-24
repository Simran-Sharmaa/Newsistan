import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
export default class NewsComponent extends Component {
  
  constructor(props){
    super(props);
    this.state={
      articles:[],
      loading:false,
      page:1,
      totalResults:0
    }
    document.title=this.props.category==='General'?'Home - Newsistan':this.props.category+' - Newsistan';
  }
  async updateNews(){
    this.props.setProgress(30);
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.props.page}&pageSize=${this.props.pageSize} `
    this.setState({loading:true})
    let data =await fetch(url);
    this.props.setProgress(50);
    let parsedData=await data.json();
    this.props.setProgress(70);

    this.setState({articles : parsedData.articles,totalResults:parsedData.totalResults,loading:false})
    this.props.setProgress(100);

  }
  async componentDidMount(){
    this.updateNews();
  }
  // handleNextClick=async()=>{
  //   console.log('next')
   
  //   this.setState({page:this.state.page+1});
  //   this.updateNews();
  // }
  // handlePrevClick=async()=>{
  //   console.log('Prev')
  //   this.setState({page:this.state.page-1});
  //   this.updateNews();
  // }
  // Adding infinite scroll
  fetchMoreData = async() => {
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cc8fa6fcf7d040fe8c2d6c65d61e9dd8&page=${this.state.page+1}&pageSize=${this.props.pageSize} `
    this.setState({page:this.state.page+1});
    this.setState({loading:true})
    let data =await fetch(url);
    let parsedData=await data.json();
    this.setState({articles : this.state.articles.concat(parsedData.articles),totalResults:parsedData.totalResults,loading:false})
  };
  render() {
    return (
      <div className=" text-center container my-4" >
        <h1 style={{marginTop:"70px"}}>Newsistan - Get Top {this.props.category} Headlines</h1>
       <InfiniteScroll style={{overflow:"hidden"}}
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
       <div className="row my-4 text-center container" >
        {this.state.loading&& <Spinner/>}
          {this.state.articles.map((element)=>{
                  
       return     <div className=" col-md-4 "  key={element.url}>
            <NewsItem title={element.title} description={element.description}  urlToImage={
               element.urlToImage
              } url={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
          </div>
        // console.log(element);
      }) }
         </div>
      </InfiniteScroll>
         <div className="container d-flex justify-content-between">

         {/* <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}> &larr;Previous</button>
         <button type="button" disabled={this.state.page >Math.floor(this.state.totalResults/this.props.pageSize) } className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button> */}
         </div>

      </div>
    );
  }
}
