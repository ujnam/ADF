// Dashboard 1 Morris-chart

Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010',
            Axe: 1.2,
            Dove: 1.4,
            Lux: 1.8,
            Rexona: 2,
            Lifebuoy: 0.8
        }, {
            period: '2011',
            Axe: 1.28,
            Dove: 1.5,
            Lux: 1.9,
            Rexona: 1.8,
            Lifebuoy: 1
        }, {
            period: '2012',
            Axe: 1.35,
            Dove: 1.6,
            Lux: 1.6,
            Rexona: 1.5,
            Lifebuoy: 1.2
        }, {
            period: '2013',
            Axe: 1.4,
            Dove: 1.8,
            Lux: 1.6,
            Rexona: 1.7,
            Lifebuoy: 1.4
        }, {
            period: '2014',
            Axe: 1.5,
            Dove: 2,
            Lux: 1.75,
            Rexona: 1.5,
            Lifebuoy: 1.6
        }, {
            period: '2015',
            Axe: 1.63,
            Dove: 1.95,
            Lux: 1.85,
            Rexona: 1.7,
            Lifebuoy: 1.75
        },
         {
            period: '2016',
            Axe: 1.89,
            Dove: 1.98,
            Lux: 1.93,
            Rexona: 1.98,
            Lifebuoy: 2
        }],
        xkey: 'period',
        ykeys: ['Axe', 'Dove', 'Lux', 'Rexona', 'Lifebuoy'],
        labels: ['Axe', 'Dove', 'Lux', 'Rexona', 'Lifebuoy'],
        pointSize: 3,
        fillOpacity: 0,
        pointStrokeColors:['Blue', 'red', 'Grey','Orange', 'violet'],
        behaveLikeLine: true,
        gridLineColor: '#e0e0e0',
        lineWidth: 1,
        hideHover: 'auto',
        lineColors: ['Blue', 'red', 'Grey','Orange', 'violet'],
        resize: true
        
    });

Morris.Area({
        element: 'morris-area-chart2',
        data: [{
            period: '2010',
            Maggi: 100,
            Knorr: 75,
            
        }, {
            period: '2011',
            Maggi: 130,
            Knorr: 100,
            
        }, {
            period: '2012',
            Maggi: 80,
            Knorr: 60,
            
        }, {
            period: '2013',
            Maggi: 70,
            Knorr: 200,
            
        }, {
            period: '2014',
            Maggi: 180,
            Knorr: 150,
            
        }, {
            period: '2015',
            Maggi: 105,
            Knorr: 90,
            
        },
         {
            period: '2016',
            Maggi: 250,
            Knorr: 150,
           
        }],
        xkey: 'period',
        ykeys: ['Maggi', 'Knorr'],
        labels: ['Maggi', 'Knorr'],
        pointSize: 0,
        fillOpacity: 0.4,
        pointStrokeColors:['#b4becb', '#01c0c8'],
        behaveLikeLine: true,
        gridLineColor: '#e0e0e0',
        lineWidth: 0,
        smooth: false,
        hideHover: 'auto',
        lineColors: ['#fdc006', '#01c0c8'],
        resize: true
        
    });


// LINE CHART
        var line = new Morris.Line({
          element: 'morris-line-chart',
          resize: true,
          data: [
            {y: '2014 Q1', item1: 2666},
            {y: '2014 Q2', item1: 2778},
            {y: '2014 Q3', item1: 4912},
            {y: '2014 Q4', item1: 3767},
            {y: '2015 Q1', item1: 6810},
            {y: '2015 Q2', item1: 5670},
            {y: '2015 Q3', item1: 4820},
            {y: '2015 Q4', item1: 8227},
            {y: '2016 Q1', item1: 10687},
            {y: '2016 Q2', item1: 10850}
          ],
          xkey: 'y',
          ykeys: ['item1'],
          labels: ['Dermalogica'],
          gridLineColor: '#eef0f2',
          lineColors: ['#a3a4a9'],
          lineWidth: 1,
          hideHover: 'auto'
        });
 // Morris donut chart
        
    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "On line Sales",
            value: 42,

        }, {
            label: "Tier 1 In-Store Sales",
            value: 40
        }, {
            label: "Tier 2 In-Store Sales",
            value: 18
        }],
        resize: true,
        colors:['#99d683', '#13dafe', '#6164c1']
    });

// Morris bar chart
    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2010',
            a: 40,
            b: 30,
            c: 20
        }, {
            y: '2011',
            a: 35,
            b: 35,
            c: 30
        }, {
            y: '2012',
            a: 42,
            b: 33,
            c: 25
        }, {
            y: '2013',
            a: 45,
            b: 28,
            c: 27
        }, {
            y: '2014',
            a: 40,
            b: 40,
            c: 20
        }, {
            y: '2015',
            a: 42,
            b: 36,
            c: 22
        }, {
            y: '2016 - Till date',
            a: 40,
            b: 39,
            c: 21
        }],
        xkey: 'y',
        ykeys: ['a', 'b', 'c'],
        labels: ['Unilever', 'P&G', 'Reckitt Benckiser'],
        barColors:['#b8edf0', '#b4c1d7', '#fcc9ba'],
        hideHover: 'auto',
        gridLineColor: '#eef0f2',
        resize: true
    });
// Extra chart
 Morris.Area({
        element: 'extra-area-chart',
        data: [{
                    period: '2010',
                    iphone: 0,
                    ipad: 0,
                    itouch: 0
                }, {
                    period: '2011',
                    iphone: 50,
                    ipad: 15,
                    itouch: 5
                }, {
                    period: '2012',
                    iphone: 20,
                    ipad: 50,
                    itouch: 65
                }, {
                    period: '2013',
                    iphone: 60,
                    ipad: 12,
                    itouch: 7
                }, {
                    period: '2014',
                    iphone: 30,
                    ipad: 20,
                    itouch: 120
                }, {
                    period: '2015',
                    iphone: 25,
                    ipad: 80,
                    itouch: 40
                }, {
                    period: '2016',
                    iphone: 10,
                    ipad: 10,
                    itouch: 10
                }


                ],
                lineColors: ['#fb9678', '#01c0c8', '#8698b7'],
                xkey: 'period',
                ykeys: ['iphone', 'ipad', 'itouch'],
                labels: ['Site A', 'Site B', 'Site C'],
                pointSize: 0,
                lineWidth: 0,
                resize:true,
                fillOpacity: 0.8,
                behaveLikeLine: true,
                gridLineColor: '#e0e0e0',
                hideHover: 'auto'
        
    });