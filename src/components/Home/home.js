import React from 'react'
import { Component } from 'react';
import Map from '../Map/map'
import './home.css'
import axios from 'axios'

class Home extends Component {

    state = {
        markers: [[0, 0], [12, -10]],
        countries: [],
        selectedCountry: {},
        filter: 'cases'
    }

    updateSelectedCountry = (country) => {
        this.setState({
            selectedCountry: country
        }, () => {
            console.log('NEW', country)
        })
    }

    updateFilter = (filter) => {
        this.setState({
            filter
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
                <Map countries={this.state.countries} selectedCountry={this.updateSelectedCountry} myIcon={this.state.filter} />
                <div className="infoCard">
                    <div className="title">{this.state.selectedCountry ? this.state.selectedCountry.country : "Worldwide"}</div>
                    <div className="item cases" onClick={()=>{this.updateFilter('cases')}}>
                        Cases <br />{this.state.selectedCountry.cases}
                    </div>
                    <div className="item deaths" onClick={()=>{this.updateFilter('deaths')}}>
                        Deaths <br />{this.state.selectedCountry.deaths}
                    </div>
                    <div className="item recovered" onClick={()=>{this.updateFilter('recovered')}}>
                        Recovered <br />{this.state.selectedCountry.recovered}
                    </div>
                    <div className="item active" onClick={()=>{this.updateFilter('active')}}>
                        Active <br />{this.state.selectedCountry.active}
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;