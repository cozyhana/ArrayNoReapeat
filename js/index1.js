function noRepeat(a) {
//            if(Object.prototype.toString.call(a)=='[object Array]'){
//                a.sort();
//                var re=[a[0]];
//                for(var i = 1; i < a.length; i++)
//                {
//                    if( a[i] !== re[re.length-1])
//                    {
//                        re.push(a[i]);
//                    }
//                }
//            }
//            else if(typeof a == "string"){ 
                 var re = a.split("").sort().join("");
                 var cc = re.match(/(.)\1+/g);       
                 for(var i = 0;i<cc.length;i++){
                       c = cc[i].substring(0,1);
                        re = re.replace(cc[i],c);

                }
            var oSpan1 = document.getElementById('span1');
            oSpan1.innerHTML =  "结果为：" + re;
        }