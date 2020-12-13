import React from "react";
import ReactMapGL, {Marker, Popup, FullscreenControl, GeolocateControl} from 'react-map-gl';
import data from '../data.json';
import dataEn from '../data-en.json'
import './Map.scss'
import {Link} from 'react-router-dom';
import Footer from './Footer';


var viewport = {
    width: 'calc(100vw - 110px)',
    height: window.innerHeight-236+"px",
    latitude: 47.88498,
    longitude: 11.69754,
    zoom: 13,
    pitch: 0 //Drehung 3D
  }
const green = {backgroundColor: "#A0C510", color: "white"}
class Map extends React.Component{
    constructor(props){
        super(props);
        if(this.props.match.params.language === "en"){
            this.state = {style1: {}, style2: green, data: dataEn, language: "en"}
        }else if(this.props.match.params.language === "de"){
            this.state = {style1: green, style2: {}, data: data, language: "de"}
        }else{
            this.state = {style1: green, style2: {}, datat: data, language: "de"}
        }
        this.state = {...this.state, viewport: viewport,
          selectedHotspot: null, margin: {margin: "0 0 55px 55px"}, fullscreen: false}
    }
    modifyViewport() {
        if(window.innerWidth < 800){
            viewport.width = "100vw"
            viewport.height = window.innerHeight-223+"px"
            this.setState({margin: {margin: "0"}})
        }else if(window.innerHeight < 500){
            viewport.width = "100vw"
            viewport.height = window.innerHeight-177+"px"
            this.setState({margin: {margin: "0"}})
        } else {
            viewport.width = 'calc(100vw - 110px)'
            viewport.height = window.innerHeight-231+"px"
            this.setState({margin: {margin: "0 0 55px 55px"}})
        }
        this.setState({viewport: viewport})
    }
    closePopup = () => {
      this.setState({
        selectedHotspot: null
      }); 
    };
    componentDidMount() {
        this.modifyViewport()
        window.addEventListener("resize", () => this.modifyViewport());
        window.addEventListener('fullscreenchange', () => this.setState({fullscreen: !this.state.fullscreen}));
    }
    componentWillUnmount() {
        window.removeEventListener("resize", () => this.modifyViewport());
        window.removeEventListener('fullscreenchange', () => this.setState({fullscreen: !this.state.fullscreen}));
    }
    render() {
        return(
            <div className="map">
                <div className="header">
                    <Link to={"/home/"+(this.state.style1 === green? "de":"en")}>
                        <h1>Smartguide</h1>
                        <h2>Holzkirchen</h2>
                    </Link>
                    <div className="languageButton">
                        {localStorage.getItem('darkmode')==="true"?<p onClick={() => this.setState({style1: green, style2: {}, data: data, selectedHotspot: null, language: "de"})} style={this.state.style1 === green?{backgroundColor: "#A0C510",color: "black"}:{}}>DE</p>:
                        <p onClick={() => this.setState({style1: green, style2: {}, data: data, selectedHotspot: null, language: "de"})} style={this.state.style1}>DE</p>}
                        {localStorage.getItem('darkmode')==="true"?<p onClick={() => this.setState({style1: {}, style2: green, data: dataEn, selectedHotspot: null, language: "en"})} style={this.state.style2 === green?{backgroundColor: "#A0C510",color: "black"}:{}}>EN</p>:
                        <p onClick={() => this.setState({style1: {}, style2: green, data: dataEn, selectedHotspot: null, language: "en"})} style={this.state.style2}>EN</p>}
                    </div>
                    <Footer dark={localStorage.getItem('darkmode')==="true"} language={this.state.language==="de"} name="mapFooter"/>
                </div>
                <ReactMapGL className="mapContainer" onClick={() => window.innerWidth < 800?this.closePopup():null} style={this.state.margin} mapStyle={'mapbox://styles/mapbox/'+(localStorage.getItem('darkmode')==="true"?'dark-v10':'streets-v11')} mapboxApiAccessToken="pk.eyJ1Ijoic21hcnRndWlkZS1ob2x6a2lyY2hlbiIsImEiOiJja2d4b3ZoejgwYTI0MnJwY2t5ZmY1YWVuIn0.okncxJgKzbDrInt8uOOasA"
                {...this.state.viewport}
                onViewportChange={(viewport) => this.setState({viewport})}>
                    {this.state.data.map((marker, key)=>{
                        return (
                    <Marker key={marker.info} latitude={marker.latitude} longitude={marker.longitude}>
                        <svg className="customMarker" onClick={() => this.setState({selectedHotspot: {latitude: marker.latitude, longitude: marker.longitude, typ: marker.typ, info: marker.info}})} height={40} viewBox="0 0 29 56" style={{cursor: 'pointer',fill: '#A0C510', transform: `translate(${-40 / 2}px,${-40}px)`}}>	
                            <ellipse cx="14.8104" cy="53.3785" rx="12.6761" ry="1.70252" fill="black" fillOpacity="0.11"/>
                            <path d="M28.9999 14.4099C28.9999 22.2455 22.647 28.5976 14.8103 28.5976C6.97353 28.5976 0.620605 22.2455 0.620605 14.4099C0.620605 6.57431 6.97353 0.22229 14.8103 0.22229C22.647 0.22229 28.9999 6.57431 28.9999 14.4099Z" fill="#A0C510"/>
                            <path d="M14.8103 53.5678L28.7374 17.5312H0.883179L14.8103 53.5678Z" fill="#A0C510"/>
                            <ellipse cx="14.8103" cy="14.4099" rx="10.7841" ry="10.7826" fill="white"/>
                            {marker.info < 10? 
                            <text x="9" y="20" fontFamily="monospace" fontSize="20" fill="#A0C510">{marker.info}</text>:
                            <text x="6" y="19" fontFamily="monospace" fontSize="15" fill="#A0C510">{marker.info}</text>}
                        </svg>
                    </Marker>)})}
                    {(this.state.selectedHotspot && window.innerWidth > 800)||(this.state.selectedHotspot && this.state.fullscreen)? (
                    <Popup className="mapPopup" latitude={parseFloat(this.state.selectedHotspot.latitude)}
                    longitude={parseFloat(this.state.selectedHotspot.longitude)}
                    onClose={this.closePopup}
                    closeOnClick={false}
                    anchor="left">
                    <h3>{this.state.selectedHotspot.typ}</h3>
                    <a href={"/station/"+(this.state.style1 === green? "de/":"en/")+this.state.selectedHotspot.info}>
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="4.95239" x2="10.2632" y2="4.95239" stroke="#828282"/>
                            <line x1="6.26144" y1="9.28512" x2="10.8725" y2="4.6741" stroke="#828282"/>
                            <line x1="6.39335" y1="0.646447" x2="11.0044" y2="5.25747" stroke="#828282"/>
                        </svg>
                    {this.state.language==="de"?" zur Station":" more details"}
                    </a>
                    </Popup>
                    ) : null}
                    <div className="mapControls">
                        <FullscreenControl container={document.querySelector('mapContainer')}/>
                        <GeolocateControl trackUserLocation={true}/>
                    </div>
                </ReactMapGL>
                {this.state.selectedHotspot && window.innerWidth < 800?<div className="modal">
                    <h3>{this.state.selectedHotspot.typ}</h3>
                    <a href={"/station/"+(this.state.style1 === green? "de/":"en/")+this.state.selectedHotspot.info}>
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="4.95239" x2="10.2632" y2="4.95239" stroke="#828282"/>
                            <line x1="6.26144" y1="9.28512" x2="10.8725" y2="4.6741" stroke="#828282"/>
                            <line x1="6.39335" y1="0.646447" x2="11.0044" y2="5.25747" stroke="#828282"/>
                        </svg>
                        {this.state.language==="de"?" zur Station":" more details"}
                    </a>
                </div>:null}
            </div>
        );
    }
}

export default Map;
