import React from 'react';
import './Footer.scss';
import {Link} from 'react-router-dom';

export default class Footer extends React.Component{
    render() {
        return (
                <div className={`footer ${this.props.name}`} style={this.props.style}>
                    {this.props.language?
                    <Link to={"/policy/de"}>Datenschutzerklärung und Impressum</Link>:
                    <Link to={"/policy/de"}>Privacy Policy and Legal Notice</Link>}
                </div>
        )
}
}