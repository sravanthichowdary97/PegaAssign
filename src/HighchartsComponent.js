/**
 * ChartComponent
 * Common component for displaying Charts
 */

 import React from 'react';
 import PropTypes from 'prop-types';
 import Highcharts from 'highcharts'
 import HighchartsReact from 'highcharts-react-official';
 
 function HighchartsComponent(props){
   
     return <HighchartsReact  options={props.options}  highcharts={Highcharts}/>;
 }
 
 HighchartsComponent.propTypes = {
   options: PropTypes.object,
 };
 
 export default HighchartsComponent;
 