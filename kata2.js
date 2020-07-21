function findMultiples(integer, limit) {
    var result=[]
    for (var i = integer; i<=limit; i+=integer){
      result.push(i);
    }
    return result;
  }
  