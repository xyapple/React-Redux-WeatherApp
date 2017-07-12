import React, {Component} from 'react';
import {connect} from 'react-redux';
//import { Sparklines, SparklinesLine } from 'react-sparklines';
import WeatherChart from '../components/weatherChart';
import GoogleMap from '../components/googleMap';


class WeatherList extends Component {
    renderWeather(cityData){
        const name = cityData.city.name;
        const temps = cityData.list.map(weather =>weather.main.temp)
        const humidity = cityData.list.map(weather => weather.main.humidity)
        const pressure = cityData.list.map(weather => weather.main.pressure)
        const lon = cityData.city.coord.lon;
        const lat = cityData.city.coord.lat;
        // const {lon, lat} = cityData.city.coord;
        // console.log(temps)
        // console.log(humidity)
        // console.log(pressure)
        return(
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat}/></td>
                <td>
                    {/* <Sparklines heigh={120} width={180} data={temps} >
                        <SparklinesLine color="red"/>
                    </Sparklines> */}
                    <WeatherChart data ={temps} color="green" units="c"/>
                </td>

                <td>
                    <WeatherChart data={pressure} color="orange" units="hPa"/>
                </td>
                <td>
                    <WeatherChart data={humidity} color="blue" units="%"/>

                </td>
            </tr>
        );

    }
    render(){
        return (
            <table className='table table-hover'>
                <thead>

                    <tr>
                        <th>City</th>
                        <th>Temperature (c)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}
// function mapStateToProps(state){
//     return {weather: state.weather}
// }
function mapStateToProps({weather}){
    return {weather}
    //{weather} === {state.weather}
}
export default connect(mapStateToProps)(WeatherList)
