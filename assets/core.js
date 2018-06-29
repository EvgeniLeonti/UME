$(document).ready(function(){
    // $("body").height($("body").height() - $("#top_menu").height());

});

const START_ALRET_AFTER = 30; // sec
var GRAPH_RUNNING_TIME = 0; // sec
var GRAPH_ALERT_TIME = 15; // sec

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function fakeGetJson(callback, min, max) {
    var currentDate = new Date();
    var currentVal = getRandomInt(min, max);
    callback([[currentDate,currentVal]]);
}

function showDetails(id) {
    $("#dialog-message").dialog("open");



    function generateGraph(input, text, div, unit) {
        var min = input.min;
        var max = input.max;
        var dataPoints = [];
        var options = {
            theme: "dark2",
            title: {
                text: text
            },
            zoomEnabled: true,
            axisY:{
                title: unit,
                stripLines: [{
                    startValue:input.min_alert,
                    endValue:input.max_alert,
                    opacity: .2,
                    color: "#999999"
                }]
            },
            data: [{
                type: "line",
                lineColor: "#A7DF40",
                dataPoints: dataPoints
            }]
        };

        $(div).CanvasJSChart(options);

        updateData();

        var newDataCount = 6;
        function addData(data) {
            if (newDataCount != 1) {
                // first data
                $.each(data, function (key, value) {
                    dataPoints.push({ x: value[0], y: parseInt(value[1]) });
                });
                newDataCount = 1;
            } else {
            //
                var y = parseInt(data[0][1]);
                // if (y > input.min_alert && y < input.max_alert) {
                //     dataPoints.push({ x: data[0][0], y: parseInt(data[0][1]),
                //         markerType: "circle",
                //         markerSize: 9,
                //         markerColor: "#ed1e79",
                //         // indexLabel: "Highest"
                //     });
                // }
                // else {
                    dataPoints.push({ x: data[0][0], y: parseInt(data[0][1]) });
                // }
            }
            $(div).CanvasJSChart().render();
            setTimeout(updateData, 1000);
        }

        function updateData() {
            // $.getJSON("https://canvasjs.com/services/data/datapoints.php?xstart=" + xValue + "&ystart=" + yValue + "&length=" + newDataCount + "type=json", addData);
            if (GRAPH_ALERT_TIME > 15) {
                GRAPH_RUNNING_TIME = 0;
                GRAPH_ALERT_TIME = 0;
            }

            if (GRAPH_RUNNING_TIME > START_ALRET_AFTER) {
                // Start alert values
                GRAPH_ALERT_TIME++;
                fakeGetJson(addData, input.min_alert, input.max_alert);
            } else {
                // Back to normal values
                GRAPH_RUNNING_TIME++;
                fakeGetJson(addData, min, max);
            }

        }
    }

    var dbIn = {
        min: 0, // hearing threshold
        max: 80, // rocket launch
        min_alert: 80,
        max_alert: 110
    };

    // men 85 to 180 Hz, and that of a typical adult female from 165 to 255 Hz
    var freqIn = {
        min: 150, // men: 85-180
        max: 255, // woman: 165-255
        min_alert: 30,
        max_alert: 150
    };

    generateGraph(dbIn, "Decibel levels", "#dbChartContainer", "dB");
    generateGraph(freqIn, "Frequency", "#freqChartContainer", "HZ");

    // 2 - 15 raguaa
}