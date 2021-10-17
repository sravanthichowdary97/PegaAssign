import React from 'react';
import HighchartsComponent from './HighchartsComponent'
import Paper from '@mui/material/Paper';

function PieChartDemo(props) {
    //API respose Obj
    const APIresponse = {
        "fetchDateTime": "2021-02-23T18:33:40.146Z",
        "resultCount": 4,
        "data": [
            {
                "pyStatusWork": "In Build",
                "total": "249"
            },
            {
                "pyStatusWork": "New",
                "total": "359"
            },
            {
                "pyStatusWork": "Open",
                "total": "39"
            },
            {
                "pyStatusWork": "Resolved-Cancelled",
                "total": "133"
            }
        ],
        "hasMoreResults": false
    }
    var dataVal = [];
    var categories = [];
    //Building obj for graph component
    APIresponse.data.map(ele => dataVal.push(Number(ele.total)));
    APIresponse.data.map(ele => categories.push(ele.pyStatusWork));
    const options = {
        title: {
            text: 'Home mortgages by work status',
        },

        series: [{
            name: "Count case ID",
            data: dataVal
        }],

        chart: {
            type: "column",
            height:"100%"
        },
        plotOptions: {
        },
        credits: { enabled: false },
        xAxis: {
            categories: categories,
            title: {
                text: 'Work status'
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Count case ID'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'bottom',
        }
    }
    return (
        <Paper className="paperComp">
        <HighchartsComponent options={options}></HighchartsComponent>
        </Paper>
    )
}
export default PieChartDemo;