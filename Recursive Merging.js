/*
*/

def merge(list1, list2, rtnList){
  if(list1==[] && list2==[]){
     return(rtnList);
  }
  return(merge(list1,list2,rtnList));
}

var finalList=[];
var list1;
var list2;
console.log(merge(list1,list2,[]));
