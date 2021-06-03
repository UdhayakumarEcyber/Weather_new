
import React, { useState } from 'react'
import { registerWidget, IContextProvider } from '../uxp';  
import { DataList, WidgetWrapper } from "uxp/components";

import './weather.scss'; 
import {VideoBg,Source} from '../components/VideoBg/VideoBg';

 
interface IWeatherWidgetProps{
    uxpContext?: IContextProvider;
    isActive: string;
} 

var dataset = [ 
             {
              "id": "Monday",
               "label": "Mon",
               "value": 10,  
               "status":"sun"
             },
             {
              "id": "Tuesday",
               "label": "Tue",
               "value": 18,  
               "status":"thunder"
             },
             {
              "id": "Wednesday",
               "label": "Wed",
               "value": 23,  
               "status":"cloudy"
             },
             {
              "id": "Thursday",
               "label": "Thur",
               "value": -13,  
               "status":"snow"
             },
             {
              "id": "Friday",
               "label": "Fri",
               "value": 17,  
               "status":"rain"
             },
             {
               "id": "Saturday",
               "label": "Sat",
               "value": 23,  
               "status":"drizzle"
             } 
 ] 
 

export const WeatherWidget:React.FunctionComponent<IWeatherWidgetProps> = (props) =>  {    

// let [data,setData] = React.useState([])

// function getData () { 
//     props.uxpContext.executeAction("Example1","weather",{},{json:true}).then(res=>{
//         setData(res);
//     }).catch(e=>{
//         // reload();
//     }); 
// }
// React.useEffect(() =>{
//     getData();
// }, [])
 
 
const DayWeatherlist = () => (
    <ul className="daylist">
      {dataset.map(item => (
        <li key={item.id}> 
          <div className={`${item.status} status`}></div> 
          <div className="label">{item.label}</div>
          <div className="value">{item.value}</div>
        </li>
      ))}
    </ul>  
 ); 

  
 var item = {
  "id": "Saturday",
  "label": "Sat",
  "value": 29,  
  "status":"drizzle"
 }
   
    return  <>

    <WidgetWrapper>   
      <div className={`weather_widget ${item.status}`}>   

          <div className="weather-video">  
              <VideoBg loop={true} autoPlay muted>  
                <Source src={"https://s3.amazonaws.com/ecyber.public/widgets/weather/video/" + item.status + ".mp4"} type="video/mp4"/>  
              </VideoBg>; 
          </div>  

          <div className="weather_widget-top">
            <div className="perc-value"> 
                 <p>{item.value}%</p>
            </div>  
          </div>  
 
          <div className={`weather_icon ${item.status}`}>    
          </div>  

           <div className="weather-content"> 
                <h4>{item.value}<sup>o</sup><span>C</span></h4>
                <p>{item.status} Today</p>
            </div>

            <DayWeatherlist />  

        </div> 


{/* ))} */}

    </WidgetWrapper>

    </>

    } 

