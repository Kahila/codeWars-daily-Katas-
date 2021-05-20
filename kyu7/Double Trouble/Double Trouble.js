function trouble(x, t){
  for (var i = 0; i < x.length; i++){
    if (x[i+1] + x[i] == t){
      x.splice(i+1, 1);
      i = 0;
    }if (x[i+1] + x[i] == t && x.length==2){
      x.splice(1+i, 1);
      break;
    }
  }
  return (x);
}