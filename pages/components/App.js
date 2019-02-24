import Meta from 'next/head'
import Header from './header'
import Select from './select'

export default () => (
    <div>
        <Meta>
            <title>News App</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
        </Meta>
        <Header />
        <div className="container text-center">
            <h5 className="pageHead">Select a news</h5>
            <Select default="bbc-news"/>
        </div>
    </div>
)