import React from "react";
import { connect } from 'react-redux';
import ButtonsList from '../Components/ButtonsList';
import ToggleList from '../Components/ToggleList';
import ToggleChart from "../Components/ToggleChart";
import Chart from '../Components/Chart';
import store from '../Store';
import {earthquakes} from '../Actions/EarthQuakeActions';
import EarthquakeDetails from '../Components/earthQuakeDetails';


class EarthQuake extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
           show_list :false,
           show_chart: false,  
           chartName : 'Hide Chart',
           listName : 'Hide List'
        }

        this.ToggleList = this.ToggleList.bind(this);
        this.ToggleChart = this.ToggleChart.bind(this);
    }

    componentDidMount() {
        this.props.getEarthquakes("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson");
        
    }

  ToggleChart(){
      this.setState((prevState) => ({ show_chart: !prevState.show_chart }));
      this.toggleChartName();
      
  }
    ToggleList(){
        this.setState((prevState) => ({ show_list: !prevState.show_list }));
       this.toggleListName();  
    }

    toggleChartName(){
            if(this.state.chartName === "Hide Chart"){
                this.setState( ({ chartName: "Show Chart" }));
            }
            else{
                this.setState(({ chartName: "Hide Chart" }));
            }
       
    }

    toggleListName() {
        if (this.state.listName === "Hide List") {
            this.setState(({ listName: "Show List" }));
        }
        else {
            this.setState(({ listName: "Hide List" }));
        }

    }

      
    render() {
        return (
            <div>                
                <ButtonsList
                    Earthquakes_PastHour={() => this.props.getEarthquakes("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson")}
                    Earthquakes_PastWeek={() => this.props.getEarthquakes("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson")}
                    Earthquakes_PastDay={() => this.props.getEarthquakes("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson")}
                    Earthquakes_PastMonth={() => this.props.getEarthquakes("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson")}
                />  

                <div className="listBtnChartBtn" >
                    <ToggleList ToggleList = {this.ToggleList}>{this.state.listName}</ToggleList> 
                    <ToggleChart ToggleChart={this.ToggleChart}> {this.state.chartName} </ToggleChart>                     
                </div> 
                 <br/>

                 {!this.props.fetching ?
                    <div>    
                        { !this.state.show_chart &&
                            <Chart ChartData={this.props.chartData} /> 
                        }
                    </div>  
                    :
                        <div className="loader">
                           loading...
                        </div>                  
                 } 


                    <div className='earthquake-details-block'>
                    {!this.state.show_list &&
                            this.props.earthquakeData.map((earthquake, i) => {
                                return (
                                    <EarthquakeDetails key={i} place={earthquake.properties.place} time={earthquake.properties.time} mag={earthquake.properties.mag} />
                                );
                            })
                        }
                    </div>
                

            </div>
        );
    }
}


const mapStateToProps = (state) => {
   // console.log(state.earthQuakeReducer.fetching);
        return{
            count: state.earthQuakeReducer.earthquakeCount,
            place: state.earthQuakeReducer.place,
            time: state.earthQuakeReducer.time,
            magnitude: state.earthQuakeReducer.magnitude,
            chartData: state.earthQuakeReducer.earthquakeChartData,
            earthquakeData: state.earthQuakeReducer.earthquakeData,
            fetching: state.earthQuakeReducer.fetching
        }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getEarthquakes: (earthquakeUrl) => { store.dispatch(earthquakes(earthquakeUrl)) }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(EarthQuake);
