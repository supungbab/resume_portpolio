function arcMove(){
  let deegres = 0;
  let acrInterval = setInterval (function() {
    deegres += 1;
    c.clearRect( 0, 0, can.width, can.height );
    procent = deegres / oneProcent;

    spanProcent.innerHTML = procent.toFixed();

    c.beginPath();
    c.arc( posX, posY, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + 360) );
    c.strokeStyle = '#b1b1b1';
    c.lineWidth = '10';
    c.stroke();

    c.beginPath();
    c.strokeStyle = '#3949AB';
    c.lineWidth = '10';
    c.arc( posX, posY, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + deegres) );
    c.stroke();
    if( deegres >= result ) clearInterval(acrInterval);
  }, fps);
}

export function circle($canvas, $procent, x) {
    let can = $canvas,
        spanProcent = $procent,
        c = can.getContext('2d');
   
    let posX = can.width / 2,
        posY = can.height / 2,
        fps = 1000 / 200,
        procent = 0,
        oneProcent = 360 / 100,
        result = oneProcent * x;
    
    c.lineCap = 'round';
    let deegres = 0;
    let acrInterval = setInterval (function() {
      deegres += 1;
      c.clearRect( 0, 0, can.width, can.height );
      procent = deegres / oneProcent;

      spanProcent.innerHTML = procent.toFixed();

      c.beginPath();
      c.arc( posX, posY, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + 360) );
      c.strokeStyle = '#b1b1b1';
      c.lineWidth = '10';
      c.stroke();

      c.beginPath();
      c.strokeStyle = '#3949AB';
      c.lineWidth = '10';
      c.arc( posX, posY, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + deegres) );
      c.stroke();
      if( deegres >= result ) clearInterval(acrInterval);
    }, fps);
}