import React from "react";
import {Link} from 'react-router-dom';
import "./About.scss"

var green = {backgroundColor: "#A0C510", color: "white"}
class About extends React.Component{
    constructor(props){
        super(props);
        if(this.props.match.params.language === "en"){
            this.state = {style1: {}, style2: green, language: "en"}
        }else{
            this.state = {style1: green, style2: {}, language: "de"}
        }
    }
    render() {
        return(
        <div>
            <div className="header">
                <Link to={"/home/"+(this.state.style1 === green? "de":"en")}>
                    <h1>Smartguide</h1>
                    <h2>Holzkirchen</h2>
                </Link>
                <div className="languageButton">
                    {localStorage.getItem('darkmode')==="true"?<p onClick={() => this.setState({style1: green, style2: {}, language: "de"})} style={this.state.style1 === green?{backgroundColor: "#A0C510",color: "black"}:{}}>DE</p>:
                    <p onClick={() => this.setState({style1: green, style2: {}, language: "de"})} style={this.state.style1}>DE</p>}
                    {localStorage.getItem('darkmode')==="true"?<p onClick={() => this.setState({style1: {}, style2: green, language: "en"})} style={this.state.style2 === green?{backgroundColor: "#A0C510",color: "black"}:{}}>EN</p>:
                    <p onClick={() => this.setState({style1: {}, style2: green, language: "en"})} style={this.state.style2}>EN</p>}
                </div>
            </div>
            {this.state.language==="de"?
            <div>
                <p>Grüß Gott <br/>
                Wir, das Projektseminar „Smartguide für Holzkirchen“ des Staatlichen Gymnasiums Holzkirchen, heißen Sie herzlich Willkommen auf unserer Website (in der App). Über einige Monate hinweg haben wir uns intensiv mit unserem Heimatort Holzkirchen beschäftigt und einen Smartguide über die bedeutsamsten Standorte erstellt. Zu diesen wird Ihnen jeweils ein Audioguide und ein Informationstext mit authentischen Bildern zur Verfügung gestellt, damit Sie sich einen realistischen Eindruck verschaffen können. Dabei wünschen wir Ihnen viel Spaß.
                <br/><br/>
                Ihr Projektseminar 
                </p>
                <img alt="Team" src={require("../images/TeufelsgrabenSatelit.jpeg")}/>
                <h1>Mitglieder Beispiel:</h1>
                <div className="grid">
                    <p>Leonard von Foerster:</p>
                    <ul>
                        <li>Erstellung der App mit Flutter</li>
                        <li>Station zum Alten Rathaus</li>
                    </ul>
                    <p>Fabian Kuske:</p>
                    <ul>
                        <li>Übertragung der Inhalte von Website zur App</li>
                        <li>Station zum Bahnhof</li>
                    </ul>
                    <p>Tobias Bauer:</p>
                    <ul>
                        <li>Erstellung der Website mit ReactJS</li>
                        <li>Station zum Teufelsgraben</li>
                    </ul>
                </div>
            </div>:
            <div>
                <p>“Grüß Gott” (a traditionally Bavarian way of saying hello)<br/>
                Welcome to our Smartguide of Holzkirchen. We are a group of students of the Staatliches Gymnasium Holzkirchen and have been working on this project for a couple of months. Over the course of this time we have gotten to know our hometown and its beautiful sights a lot better. To share our knowledge, we created a website (an app) filled with audioguides and informative texts. Additionally, authentic images help to create a real-life impression. We hope you enjoy it.
                <br/><br/>
                Your Smartguide-Team
                </p>
                <img alt="team" src={require("../images/TeufelsgrabenSatelit.jpeg")}/>
            </div>}
        </div>
        )
    }
}

export default About;