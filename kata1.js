function checkExam(array1, array2) {
    var points = 0
    if (array1[0]==array2[0]){
      points+=4;
    }
    else if (array2[0]==""){
      points+=0
    } 
    if (array1[1]==array2[1]){
      points+=4;
    }
    else if (array2[1]==""){
      points+=0
    } 
    else if (points>0){
      if (array1[1]!=array2[1]){
      points-=1;
      }
      else{
        points+=0;
      }
    }
    
    if (array1[2]==array2[2]){
      points+=4;
    }
    else if (array2[2]==""){
      points+=0
    } 
    else if (points>0){
      if (array1[2]!=array2[2]){
      points-=1;
      }
      else{
        points+=0;
      }
    }
    if (array1[3]==array2[3]){
      points+=4;
    }
    else if (array2[3]==""){
      points+=0
    } 
    else if (points>0){
      if (array1[3]!=array2[3]){
      points-=1;
      }
      else{
        points+=0;
      }
    }
    return points;
   }