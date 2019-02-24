import React, { Component } from 'react'
import axios from 'axios'
import Article from './article'

export default class extends Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: []
        };
    }

    componentDidMount () {
        this.getArticles(this.props.default)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props) {
            this.setState({
                url: `https://newsapi.org/v2/top-headlines?sources=${nextProps.default}&apiKey=8841268209ad4503b8309663db68016f`
            });
            this.getArticles(nextProps.default);
        }
    }

    getArticles(url) {
        this.setState({ articles: [] })
        const API = '8841268209ad4503b8309663db68016f'
        axios.get(`https://newsapi.org/v2/top-headlines?sources=${url}&apiKey=${API}`)
            .then((response) => {
                const data = response.data.articles
                console.log(data)
                this.setState({articles:data})
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const articleState = this.state.articles
        let views = <div>Please Wait, data is loading ...</div>
        if( articleState && articleState.length > 1 ){
            views = Object.keys(articleState).map(article => <Article key={article} details={articleState[article]} />)
        }
        return (
            <div className="container">
            <div className="row">
                <br />
                <br />
                {views}
                </div>
            </div>
        )
    }

}