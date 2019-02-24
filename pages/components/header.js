import Link from 'next/link'
import Head from 'next/head'

export default () => (
    <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-inverse fixed-top">
            <div className="container-fluid">
                <Link prefetch href="/" >
                    <a className="navbar-brand">
                        <h4>News App</h4>
                    </a>
                </Link>
            </div>
        </nav>
    </header>
)