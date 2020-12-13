import React from "react";
import './Home.scss';
import Footer from './Footer';


var green = {backgroundColor: "#A0C510", color: "white"}
class App extends React.Component{
    constructor(props){
        super(props)
        if(this.props.match.params.language === "en"){
            this.state = {style1: {}, style2: green}
        }else if(this.props.match.params.language === "de"){
            this.state = {style1: green, style2: {}}
        }else{
            this.state = {style1: green, style2: {}}
        }
        if(localStorage.getItem('darkmode') === "true"){
            this.state = {...this.state, dark: true}
        } else {
            this.state = {...this.state, dark: false}
        }
    }
    modeToggle() {
        if(!this.state.dark) {
            document.body.style.backgroundColor = "black"
            document.body.style.color = "white"
        }else{
            document.body.style.backgroundColor = "white"
        }
        localStorage.setItem('darkmode', !this.state.dark)
        this.setState({dark: !this.state.dark})
      }
    render() {
        return(
            <div className="home" style={this.state.dark?{}:{backgroundColor: "white"}}>
                <div className="modeButton" onClick={() => this.modeToggle()}>
                    {this.state.dark?
                    <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" > <path fill="none" stroke="#494949" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M256 48L256 96" ></path> <path fill="none" stroke="#494949" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M256 416L256 464" ></path> <path fill="none" stroke="#494949" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M403.08 108.92L369.14 142.86" ></path> <path fill="none" stroke="#494949" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M142.86 369.14L108.92 403.08" ></path> <path fill="none" stroke="#494949" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M464 256L416 256" ></path> <path fill="none" stroke="#494949" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M96 256L48 256" ></path> <path fill="none" stroke="#494949" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M403.08 403.08L369.14 369.14" ></path> <path fill="none" stroke="#494949" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M142.86 142.86L108.92 108.92" ></path> <circle cx="256" cy="256" r="80" fill="none" stroke="#494949" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" ></circle> </svg>:
                    <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" > <path fill="none" stroke="#BDBDBD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z" ></path> </svg>}
                </div>
                <div className="HomeText">
                    <h3>{this.state.style1 === green?"Willkommen zum":"Welcome to"}</h3>
                    <h1>Smartguide</h1>
                    <h2>Holzkirchen</h2>
                </div>
                <div className="space" style={{height: window.innerHeight-420+"px"}}>
                    <img alt="home_picture" src={require("../images/home.jpg")}/>
                </div>
                <div className="space2" style={{height: window.innerHeight-80+"px"}}>
                    <img alt="home_picture" src={require("../images/home.jpg")}/>
                </div>
                <div className="ContainerHome">
                    <div className="languageButton" style={this.state.dark?{backgroundColor: "#262626"}:{backgroundColor: "#F4F4F4"}}>
                        {this.state.dark?<p onClick={() => this.setState({style1: green, style2: {}})} style={this.state.style1 === green?{backgroundColor: "#A0C510",color: "black"}:{}}>DE</p>:
                        <p onClick={() => this.setState({style1: green, style2: {}})} style={this.state.style1}>DE</p>}
                        {this.state.dark?<p onClick={() => this.setState({style1: {}, style2: green})} style={this.state.style2 === green?{backgroundColor: "#A0C510",color: "black"}:{}}>EN</p>:
                        <p onClick={() => this.setState({style1: {}, style2: green})} style={this.state.style2}>EN</p>}
                    </div>
                    <div className="moveOn">
                        <a href={"/map/"+(this.state.style1 === green? "de":"en")} >{this.state.style1 === green?"zum Guide ":"to the guide "}
                            <svg width="18px" height="2.52vh" viewBox="0 0 33 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="-0.000366211" y1="14.0883" x2="30.1696" y2="14.0883" stroke="#828282" strokeWidth="2"/>
                                <line x1="17.7382" y1="27.6874" x2="31.2929" y2="14.1327" stroke="#828282" strokeWidth="2"/>
                                <line x1="18.461" y1="1.29289" x2="32.0157" y2="14.8476" stroke="#828282" strokeWidth="2"/>
                            </svg>
                        </a>
                    </div>
                </div>
                {this.state.style1 === green?
                    <a href={"/about/de"} className="about" style={this.state.dark?{color: "white"}:{color: "black"}}>Über dieses Projekt</a>:
                    <a href={"/about/en"} className="about" style={this.state.dark?{color: "white"}:{color: "black"}}>About this Projekt</a>}
                    <Footer dark={this.state.dark} language={this.state.style1 === green} name="fixed"/>
            </div>
        );
    }
}

export default App;
