import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet'
import { divIcon } from 'leaflet'
import './map.css'


const Map = (props) => {

    // const myIcon = divIcon({ className: "myIcon", html: "<span>120</span>" })
    const casesMin = (cases) => {
        return cases > 999 ? cases.toString().substring(0, cases.toString().length - 3) + "K" : cases
    }

    return (
        <div>
            <LeafletMap center={[28.0339, 1.6596]} zoom={2} maxBounds={[[-90, -180],[90, 180]]} minZoom={2} maxZoom={4} >
                <TileLayer
                    url="https://api.mapbox.com/styles/v1/oussamah8/ck91m060x1bk61jmleaht9pok/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoib3Vzc2FtYWg4IiwiYSI6ImNrOTFseDZxbjAxNG4zZXA0ZDRleG9nazIifQ.Hq_hv9It3ghyVJT-fJRq2g"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                {props.countries.map((country, i) => (
                    <Marker key={i} onclick={ () => props.selectedCountry(country) } position={[country.countryInfo.lat, country.countryInfo.long]} icon={divIcon({ className: "myIcon", html: "<span>" + casesMin(country.cases) + "</span>" })}>
                        {/* <Popup>Here's {country.country}</Popup> */}
                    </Marker>
                ))}

            </LeafletMap>
        </div>
    )
}

export default Map;