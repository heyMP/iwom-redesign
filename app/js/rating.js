/**
 * Rating Meter
 * Pass a DOM svg object that contains a unique id and a "meter" data attribute
 * that contains a number between 1 and 10
 * @param  {DOM object} target
 */
module.exports = function(target) {
  var canvasSize = 500,
  centre = canvasSize/2,
  radius = canvasSize*0.8/2,
  s = Snap('#' + target.context.id),
  path = "",
  arc = s.path(path),
  startY = centre-radius,
  rating = target.data('rating'),
  endpoint = (rating / 10) * 360,
  text = s.text(250, 260, rating + " out of 10");
  text.attr({
    'font-size':50,
    'text-anchor': 'middle'
  });
  Snap.animate(0, endpoint,   function (val) {
      arc.remove();
      var d = val,
          dr = d-90;
          radians = Math.PI*(dr)/180,
          endx = centre + radius*Math.cos(radians),
          endy = centre + radius * Math.sin(radians),
          largeArc = d>180 ? 1 : 0;
          path = "M"+centre+","+startY+" A"+radius+","+radius+" 0 "+largeArc+",1 "+endx+","+endy;

      arc = s.path(path);
      arc.attr({
        stroke: 'red',
        fill: 'none',
        strokeWidth: 20
      });

  }, 1500, mina.easeout);
}
