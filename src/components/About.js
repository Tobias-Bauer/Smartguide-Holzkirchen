import React from "react";
import {Link} from 'react-router-dom';
import "./About.scss"
import Footer from './Footer';

var green = {backgroundColor: "#A0C510", color: "white"}
class About extends React.Component{
    constructor(props){
        super(props);
        if(this.props.match.params.language === "en"){
            this.state = {style1: {}, style2: green, language: "en", mehr: true}
        }else{
            this.state = {style1: green, style2: {}, language: "de", mehr: true}
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
        <div className="aboutContent">
            <div className="shiftRight">
                    <h3>Grüß Gott</h3>
                <div className="imgContainer">
                    <div></div>
                    <img alt="Team" src={require("../images/group_photo.JPG")}/>
                </div>
            </div>
            <h4>Grüß Gott</h4>
            {this.state.language==="de"?
            <div className="aboutText">
                <p>
                Wir, das Projektseminar „Smartguide für Holzkirchen“ des Staatlichen Gymnasiums Holzkirchen, heißen Sie herzlich willkommen auf unserer Website (in der App). Über einige Monate hinweg haben wir uns intensiv mit unserem Heimatort Holzkirchen beschäftigt und einen Smartguide zu interessanten Orten erstellt. Zu diesen wird Ihnen jeweils ein Audioguide und ein Informationstext mit authentischen Bildern zur Verfügung gestellt, damit Sie sich einen realistischen Eindruck verschaffen können. Dabei wünschen wir Ihnen viel Spaß.
                <br/><br/>
                Ihr Projektseminar 
                </p>
                <div className="aboutTeam" style={{backgroundColor: localStorage.getItem('darkmode')==="true"?"#252525":"#00000025"}}>
                    {this.state.mehr?
                    <h1 onClick={() => this.setState({mehr: !this.state.mehr})}>
                        <svg width="21" height="10" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="1.31134e-07" y1="1.5" x2="21" y2="1.5" stroke="#A0C510" strokeWidth="3"/>
                        </svg>
                        weniger zum Team</h1>:
                        <h1 onClick={() => this.setState({mehr: !this.state.mehr})}>
                            <svg width="21" height="15" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="10.5" y1="-6.55671e-08" x2="10.5" y2="21" stroke="#A0C510" strokeWidth="3"/>
                                <line x1="1.31134e-07" y1="10.5" x2="21" y2="10.5" stroke="#A0C510" strokeWidth="3"/>
                            </svg>
                            mehr zum Team</h1>}
                    {this.state.mehr?<div className="grid">
                        <a href="https://github.com/Leo-vf">Leonard von Foerster:</a>
                        <ul>
                            <li>Erstellung der App mit Flutter</li>
                            <li>Station zum Alten Rathaus</li>
                        </ul>
                        <a href="https://github.com/katarinablind">Katarina Blind:</a>
                        <ul>
                            <li>Design und Inhaltsstrategie</li>
                            <li>Station zum Herdergarten</li>
                        </ul>
                        <a href="https://github.com/Tobias-Bauer">Tobias Bauer:</a>
                        <ul>
                            <li>Erstellung der Website mit ReactJS</li>
                            <li>Veröffentlichung der App mit Google Play Console</li>
                            <li>Station zum Teufelsgraben</li>
                        </ul>
                        <p>Caroline Reiter:</p>
                        <ul>
                            <li>Projektleiterin</li>
                            <li>Station zum Marktplatz</li>
                        </ul>
                        <p>Fabian Kuske:</p>
                        <ul>
                            <li>Übertragung der Inhalte von Website zur App</li>
                            <li>Station zum Bahnhof</li>
                        </ul>
                        <p>Lisa Hartlep:</p>
                        <ul>
                            <li>Sponsorenzusammenarbeit</li>
                            <li>Station zur St. Laurentiuskirche</li>
                        </ul>
                        <p>Ben Rech:</p>
                        <ul>
                            <li>Erstellung des Merkurartikels</li>
                            <li>Station zur alten Post</li>
                        </ul>
                        <p>Takemi Ando:</p>
                        <ul>
                            <li>Marketing/Organisation</li>
                            <li>Station zur Pestkapelle</li>
                        </ul>
                        <p>Philipp Dunst:</p>
                        <ul>
                            <li>Schülerzeitungsartikel</li>
                            <li>Station Kultur im Oberbräu</li>
                        </ul>
                    </div>:null}
                </div>
            </div>:
            <div>
                <p>(a traditionally Bavarian way of saying hello)<br/>
                Welcome to our Smartguide of Holzkirchen. We are a group of students of the Staatliches Gymnasium Holzkirchen and have been working on this project for a couple of months. Over the course of this time we have gotten to know our hometown and its beautiful sights a lot better. To share our knowledge, we created a website (an app) filled with audioguides and informative texts. Additionally, authentic images help to create a real-life impression. We hope you enjoy it.
                <br/><br/>
                Your Smartguide-Team
                </p>
                <div className="aboutTeam" style={{backgroundColor: localStorage.getItem('darkmode')==="true"?"#252525":"#00000025"}}>
                    {this.state.mehr?
                    <h1 onClick={() => this.setState({mehr: !this.state.mehr})}>
                        <svg width="21" height="10" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="1.31134e-07" y1="1.5" x2="21" y2="1.5" stroke="#A0C510" strokeWidth="3"/>
                        </svg>
                        hide team info</h1>:
                        <h1 onClick={() => this.setState({mehr: !this.state.mehr})}>
                            <svg width="21" height="15" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="10.5" y1="-6.55671e-08" x2="10.5" y2="21" stroke="#A0C510" strokeWidth="3"/>
                                <line x1="1.31134e-07" y1="10.5" x2="21" y2="10.5" stroke="#A0C510" strokeWidth="3"/>
                            </svg>
                            show team info</h1>}
                    {this.state.mehr?<div className="grid">
                        <a href="https://github.com/Leo-vf">Leonard von Foerster:</a>
                        <ul>
                            <li>App Development with Flutter</li>
                            <li>Content for the Old Townhall</li>
                        </ul>
                        <a href="https://github.com/katarinablind">Katarina Blind:</a>
                        <ul>
                            <li>Design and content strategy</li>
                            <li>Content for Herdergarten</li>
                        </ul>
                        <a href="https://github.com/Tobias-Bauer">Tobias Bauer:</a>
                        <ul>
                            <li>Web development with ReactJS</li>
                            <li>App publishing with Google Play Console</li>
                            <li>Content for Teufelsgraben</li>
                        </ul>
                        <p>Caroline Reiter:</p>
                        <ul>
                            <li>Project Manager</li>
                            <li>Content for Marketplace</li>
                        </ul>
                        <p>Fabian Kuske:</p>
                        <ul>
                            <li>Transfered content from website to app</li>
                            <li>Content for trainstation</li>
                        </ul>
                        <p>Lisa Hartlep:</p>
                        <ul>
                            <li>Sponsors cooperation</li>
                            <li>Content for St. Laurentiuskirche</li>
                        </ul>
                        <p>Ben Rech:</p>
                        <ul>
                            <li>Newspaper article</li>
                            <li>Content for the old post station</li>
                        </ul>
                        <p>Takemi Ando:</p>
                        <ul>
                            <li>Marketing</li>
                            <li>Content for Pestkapelle</li>
                        </ul>
                        <p>Philipp Dunst:</p>
                        <ul>
                            <li>Article for the students magazine</li>
                            <li>Content for Oberbräu</li>
                        </ul>
                    </div>:null}
                    </div>
            </div>}
            <Link className="bottomContainer" to={"/map/"+(this.state.style1 === green? "de":"en")}>
                <h5>zum Guide 
                    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L8 8L1 15" stroke="white" strokeWidth="2"/>
                    </svg>
                </h5>
            </Link>
        </div>
        <Footer dark={localStorage.getItem('darkmode')==="true"} language={this.state.language==="de"} name="middle"/>
        </div>
        )
    }
}

export default About;
