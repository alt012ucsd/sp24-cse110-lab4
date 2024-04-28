function currenttime(){
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
}

setInterval(currenttime, 1000);
