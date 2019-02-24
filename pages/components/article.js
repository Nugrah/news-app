import React from 'react'
import parse from 'url-parse'

export default ( props ) => {
    const { details } = props
    console.log(details)
    return (
        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
        <div className="card">
            <img className="card-img-top" src={details.urlToImage} alt="NewsImage" />
            <div className="card-body">
                <h6 className="card-title">
                <a href={details.url} target="_blank">
                {details.title}
                </a>
                </h6>
                <p className="card-text">{details.description}</p>
            </div>
        </div>
      </div>
    )
}