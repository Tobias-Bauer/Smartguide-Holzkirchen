import React from "react";
import data from '../data.json';
import dataEn from '../data-en.json'
import {Link} from 'react-router-dom';
import './Station.scss';
import imageData from '../data-images.json';
import Footer from './Footer';

const green = {backgroundColor: "#A0C510", color: "white"}
var lastX = null;
var el= null;
class Station extends React.Component{
    constructor(props){
        super(props)
        el = imageData.find(element => element.info.toString() === this.props.match.params.id)
        if(this.props.match.params.language === "en"){
            this.state = {default: true, image: require("../images/default.svg"), whole: 0, duration: 0, style1: {}, style2: green, data: dataEn[this.props.match.params.id-1]}
        }else if(this.props.match.params.language === "de"){
            this.state = {default: true, image: require("../images/default.svg"), whole: 0, duration: 0, style1: green, style2: {}, data: data[this.props.match.params.id-1]}
        }else{
            this.state = {default: true, image: require("../images/default.svg"), whole: 0, duration: 0, style1: green, style2: {}, data: data[this.props.match.params.id-1]}
        }
        var au
        try {
            au = require("../sound/"+el.audio)
            this.state["loaded"] = true;
        } catch (error) {
            this.state["loaded"] = false;
        }
        this.audio = new Audio(au);
        this.audio.addEventListener('timeupdate', () => {
            this.setState({duration: this.audio.currentTime})
            //Time for pictures to show
            var defaultBool = true
            if(el){
            for(var [i, img] of el.images.entries()){
                var max_time = img.max_minute*60+img.max_second
                var min_time = img.min_minute*60+img.min_second
                if(min_time<this.audio.currentTime&&this.audio.currentTime<max_time){
                    this.setState({image: require("../images/"+img.name)})
                    defaultBool = false
                }
            }
        }
            this.setState({default: defaultBool})
        })
        this.handleMouseUp = this._handleMouseUp.bind(this);
        this.listen = this.listen.bind(this);
        this.onResize = this.onResize.bind(this);
        this.bar = React.createRef()
    }
    componentWillMount() {
        this.audio.load()
        window.addEventListener('resize', this.onResize)
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize)
    }
    onResize() {
        var e = {}
        e.target = document.getElementById("img")
        this.onImgLoad(e)
    }
    listenm = e => {
        if(lastX) {
            var plus = (e.touches[0].clientX-lastX)/this.bar.current.offsetWidth
            this.listen(e, plus)
        }
        lastX = e.touches[0].clientX
    }
    listend = e => {
        var plus = e.movementX/this.bar.current.offsetWidth
        this.listen(e, plus)
    }
    listen = (e,plus) => {
        var newTime = this.audio.currentTime+this.audio.duration*plus
        var noHighTime = newTime>this.audio.duration?this.audio.duration:newTime
        var saveTime = noHighTime<0?0:noHighTime
        this.setState({duration: saveTime})
        this.audio.currentTime = saveTime
    }
    _handleMouseUp() {
        window.removeEventListener("mousemove", this.listend, false)
        window.removeEventListener("touchmove", this.listenm, false)
        window.removeEventListener("mouseup", this.handleMouseUp)
        window.removeEventListener("touchend", this.handleMouseUp)
    }
    setCurrentTime() {
        window.addEventListener("mousemove", this.listend, false)
        window.addEventListener("touchmove", this.listenm, false)
        window.addEventListener('mouseup', this.handleMouseUp)
        window.addEventListener("touchend", this.handleMouseUp)
    }
    onImgLoad(e) {
        var img = e.target
        var res = 0;
        try {
            if(img.width<img.height){
                var newHeight = window.innerHeight*0.8
                var per = newHeight/img.height
                var width = img.width*per
                if((width-window.innerWidth)-50>0){
                    res = 0.8
                }else{
                    res = width/window.innerWidth;
                }
            }else{
                res = 0.8;
            }
            this.setState({percentage: res*100})
        } catch (error) {
            console.log(error)
        }
    }
    render() {
        return(
            <div className="station">
                {!this.audio.paused&&!this.state.default?<div className="blur">
                    <img id="img" src={this.state.image} style={{width: this.state.percentage+"%"}} onLoad={e => this.onImgLoad(e)} alt="default.jpg"/>
                </div>:null}
                <div className="header">
                    <Link to={"/home/"+(this.state.style1 === green? "de":"en")}>
                        <h1>Smartguide</h1>
                        <h2>Holzkirchen</h2>
                    </Link>
                    <div className="languageButton">
                    {localStorage.getItem('darkmode')==="true"?<p onClick={() => this.setState({style1: green, style2: {}, data: data[this.props.match.params.id-1]})} style={this.state.style1 === green?{backgroundColor: "#A0C510",color: "black"}:{}}>DE</p>:
                        <p onClick={() => this.setState({style1: green, style2: {}, data: data[this.props.match.params.id-1]})} style={this.state.style1}>DE</p>}
                        {localStorage.getItem('darkmode')==="true"?<p onClick={() => this.setState({style1: {}, style2: green, data: dataEn[this.props.match.params.id-1]})} style={this.state.style2 === green?{backgroundColor: "#A0C510",color: "black"}:{}}>EN</p>:
                        <p onClick={() => this.setState({style1: {}, style2: green, data: dataEn[this.props.match.params.id-1]})} style={this.state.style2}>EN</p>}
                    </div>
                </div>
                <div className="content">
                    <a href="/map">
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="14" y1="6.49902" x2="1.2007" y2="6.49902" stroke="#BDBDBD"/>
                            <line x1="6.10398" y1="1.13187" x2="0.353553" y2="6.8823" stroke="#BDBDBD"/>
                            <line x1="6.11422" y1="11.9053" x2="0.363792" y2="6.15488" stroke="#BDBDBD"/>
                        </svg>
                        {" "+(this.state.style1 === green? "zur Karte":"back")}
                    </a>
                    <h1>{this.state.data.number+" "+this.state.data.typ}</h1>
                    <div className="stationContent">
                        {this.state.data.text.map((element, index) => {
                            return <div key={index}>
                                {element.text?<p>{element.text}</p>:null}
                                {element.image?<img className="textImage" alt="textImage" src={require("../images/"+element.image)}/>:null}
                                </div>
                        })}
                    </div>
                    {this.state.loaded?
                    <div className={"barAlign "+(localStorage.getItem('darkmode')==="true"?"darkBar":"")} >
                        <div className="control" onClick={() => this.audio.paused?this.audio.play():this.audio.pause()}>
                            {this.audio.paused?
                            <svg viewBox="0 0 60 60">
                                <polygon points="0,0 50,30 0,60" />
                            </svg>:
                            <svg viewBox="0 0 60 60">
                                <polygon points="0,0 15,0 15,60 0,60" />
                                <polygon points="25,0 40,0 40,60 25,60" />
                            </svg>}
                        </div>
                        <div className="progressBar" ref={this.bar}>
                            <div className="prozess" style={{width: (this.state.duration/this.audio.duration)*100+"%"}}></div>
                            <div className="radius" onMouseDown={() => this.setCurrentTime()} onTouchStart={() => this.setCurrentTime()}></div>
                        </div>
                        <p>{Math.floor(this.state.duration/60)+":"+(Math.floor(this.state.duration)-Math.floor(this.state.duration/60)*60)}</p>
                    </div>:null}
                </div>
                <Footer language={this.state.style1 === green} name="stationFooter"/>
            </div>
        );
    }
}

export default Station;
