import React from 'react';
import './Footer.scss';
import {Link} from 'react-router-dom';

export default class Footer extends React.Component{
    render() {
        return (
                <div className={`footer ${this.props.name}`} style={this.props.style}>
                    {this.props.language?
                    <Link to={"/policy/de"} style={this.props.dark?{color: "white"}:{color: "black"}}>Datenschutzerklärung und Impressum</Link>:
                    <Link to={"/policy/en"} style={this.props.dark?{color: "white"}:{color: "black"}}>Privacy Policy and Legal Notice</Link>}
                </div>
        )
}
}