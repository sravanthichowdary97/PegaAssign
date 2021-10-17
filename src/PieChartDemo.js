import React from 'react';
import HighchartsComponent from './HighchartsComponent'
import Paper from '@mui/material/Paper';
function PieChartDemo(props) {
    //API respose Obj
    const APIresponse = {
        "fetchDateTime": "2021-02-23T18:33:38.291Z",
        "resultCount": 5,
        "data": [
            {
                "VehicleType": "Auto",
                "total": "10"
            },
            {
                "VehicleType": "Motorcycle",
                "total": "16"
            },
            {
                "VehicleType": "RV",
                "total": "2"
            },
            {
                "VehicleType": "Water craft",
                "total": "3"
            },
            {
                "VehicleType": null,
                "total": "52"
            }
        ],
        "hasMoreResults": false
    }
    var dataVal = [];
    //Building obj for graph component
    APIresponse.data.map(ele => dataVal.push({ name: ele.VehicleType == null ? "N/A" : ele.VehicleType, y: Number(ele.total) }));
    const options = {
        title: {
            text: 'Vehicle Type'
        },

        series: [{
            name: "Total",
            data: dataVal
        }],

        chart: {
            type: "pie",
            height:"100%"
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.percentage:.0f} %</b> : {point.name} ',
                    distance: -2,
                },
                showInLegend: true,
            }
        },
        credits: { enabled: false }
    }
    return(
        <Paper className="paperComp">
        <HighchartsComponent options={options}></HighchartsComponent>
        </Paper>
    )
}
export default PieChartDemo;