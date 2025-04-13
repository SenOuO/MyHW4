Highcharts.chart('container', {

    title: {
        text: '台灣各主要城市平均氣溫',
        align: 'left'
    },

    subtitle: {
        text: 'By <a href="https://www.cwa.gov.tw/V8/C/C/Statistics/monthlymean.html" target="_blank">中央氣象局</a>.',
        align: 'left'
    },

    yAxis: {
        title: {
            text: '氣溫'
        }
    },

    xAxis: {
        title: {
            text: '月份'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 1
        }
    },

    series: [{
        name: '台中',
        data: [
            17.0,17.7,20.1,23.5,26.4,28.1,28.9,28.4,27.8,25.5,22.6,18.7
        ]
    }, {
        name: '台北',
        data: [
            16.4,16.9,18.8,22.3,25.6,28.2,29.9,29.5,27.7,24.6,21.9,18.2
        ]
    }, {
        name: '台南',
        data: [
            17.9,18.9,21.6,24.9,27.4,28.8,29.3,28.9,28.5,26.3,23.4,19.6
        ]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});