 function unique3(a){
 var res = [];
     var res1 = [];
 var json = {};
 for(var i = 0; i < a.length; i++){
  if(!json[a[i]]){
   res.push(a[i]);
   json[a[i]] = 1;
  }
     else{
        res1.push(a[i]);
     }
 }
 return res +'---'+ res1;
}
window.onload = function () {
	var arr = [112,',',112,34,'你好',112,112,34,'你好','str','str1',','];console.log(unique3(arr));
}
