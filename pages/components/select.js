import React, { Component } from 'react'
import axios from 'axios'
import Display from './display'

export default class extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            value: this.props.default,
        }
        this.onChange = this.onChange.bind(this)
        this.apiUrl = 'https://newsapi.org/v2/sources?language=en&apiKey=8841268209ad4503b8309663db68016f'
    }

    onChange(event) {
        this.setState({ value: event.target.value });
        console.log(this.state.value);
    }

    componentDidMount() {
        axios.get(this.apiUrl)
            .then((response) => {
                let sourcesData = response.data;
                this.setState({ data: sourcesData.sources });
            })
        console.log(this.state.data);
    }

    render(){
		const allSources = this.state.data
		console.log(this.state.value)
        return (
            <div>
                <div className="row text-center" >
                    <div className="col-lg-12" >
                        <select value={this.state.value} onChange={this.onChange}>
                            {
                                Object.keys(allSources).map(paper => <option key={paper} value={allSources[paper].id}>{allSources[paper].name}</option>)
                            }
                        </select>
                    </div>
                </div>
                <br />
                <div className="row">
							<br />
							<Display default={this.state.value} />
                </div>
            </div>
        )
    }

}