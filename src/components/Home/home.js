import React from 'react'
import { Component } from 'react';
import Map from '../Map/map'
import './home.css'
import axios from 'axios'

class Home extends Component {

    state = {
        markers: [[0, 0], [12, -10]],
        countries: [],
        selectedCountry: {}
    }

    updateSelectedCountry = (country) => {
        this.setState({
            selectedCountry: country
        }, () => {
            console.log('NEW', country)
        })
    }

    componentDidMount = async () => {
        await axios.get(`https://corona.lmao.ninja/v2/countries?yesterday=false`)
            .then((response) => {
                this.setState({
                    countries: response.data
                }, () => {
                    console.log('countries', this.state.countries)
                })
            })
    }

    render() {
        return (
            <div>
                <div className="mapHeader">
                    <span className="title">COVID-19 STATS MAP</span>
                </div>
                <Map countries={this.state.countries} selectedCountry={this.updateSelectedCountry} />
                <div className="infoCard">
                    <div className="title">{ this.state.selectedCountry ? this.state.selectedCountry.country : "Worldwide"}</div>
                    <div className="item cases">
                        Cases : {this.state.selectedCountry.cases}
                    </div>
                    <div className="item deaths">
                        Deaths : {this.state.selectedCountry.deaths}
                    </div>
                    <div className="item recovered">
                        Recovered : {this.state.selectedCountry.recovered}
                    </div>
                    <div className="item active">
                        Active : {this.state.selectedCountry.active}
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;