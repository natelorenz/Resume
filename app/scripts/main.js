(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.slider').slider();
    $('#textarea1').trigger('autoresize');

    $('.collapse').collapsible('setup1');
  });
})(jQuery);

            var dataset = [
                { 'skill': 'ADOBE CS', 'percent' : 90 },
                { 'skill': 'HTML', 'percent' : 80 },
                { 'skill': 'CSS', 'percent' : 75 },
                { 'skill': 'JS', 'percent' : 50 },
                { 'skill': 'PHP', 'percent' : 65 },
            ];

            // width and height
            var w = 1000;
            var h = 400;

            var x = d3.scaleLinear()
                            .domain([0, d3.max(dataset, function(d) { return d.percent; })])
                            .range([0, h]);


            var theCanvas = d3.select('.myData')
                        .append('svg')
                        .attr('text-align', 'center')
                        .attr('width', w)
                        .attr('height', h);

            var bars = theCanvas.selectAll('rect')
                        .data(dataset)
                        .enter()
                        .append('rect')
                            .attr('class', 'bar')
                            .attr('height', function(d) {
                                return x(d.percent)-50;
                            })
                            .attr('width', 125 )
                            .attr('x', function (d, i) {
                                return i * 200 ;
                            });


    //Add the SVG Text Element to the svgContainer
            var text = theCanvas.selectAll('text')
                        .data(dataset)
                        .enter()
                        .append('text');

    //Add SVG Text Element Attributes
            var textLabels = text
                        .attr('y', 20 )
                        .attr('x', function (d, i) {
                                return i * 200 + 5;
                            })
                        .text( function (d) { return d['skill']+ ' ' + d['percent'] + '%'; })
                        .attr('font-family', 'helvetica')
                        .attr('font-size', '14px')
                        .attr('fill', 'white');
