import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, urlToImage, url, author, date, source } =
      this.props;
    return (
      <div className="card my-3">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className=" badge rounded-pill bg-dark">{source}</span>
        </div>
        <img src={urlToImage?urlToImage:"https://www.bing.com/th?id=OIP.hs0fEx2e_g6nWamwBxXUyQHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"} className="card-img-top" alt="..." />

        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              Published By {author ? author : "Unknown"} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>

          <a
            href={url}
            rel="noreferrer"
            target={"_blank"}
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
