function lastSurvivor(letters, coords) {
  var arr = letters.split('');
  var j = 0;
  
  for (var i = 0; i <= letters.length; i++){
    if (i == letters.length && coords.length != j)
      i = 0;
    if (i == parseInt(coords[j])){
      arr.splice(i, 1);
      j++;
    }
  }
  return (arr.toString());
}