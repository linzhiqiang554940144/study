/*var a=[20,30,40,8,60]
for(var i=1;i<a.length;i++){
	for(var j=0;j<a.length-1;j++){
		if(a[j]>a[j+1]){
			var arr=a[j]
			a[j]=a[j+1]
			a[j+1]=arr
		}
	}
}
console.log(a)*/


/*for(var i=9;i>=1;i--){
	for(var j=i,sum='';j>=1;j--){
	
	sum+=j+'*'+i+'='+j*i;
	
	}
	console.log(sum)
}*/

var a =[20,50,60,10,40,80]
for(var i=1;i<a.length;i++){
	for(var j=0;j<a.length;j++){
		if(a[j]>a[j+1]){
			var arr=a[j]
			a[j]=a[j+1]
			a[j+1]=arr
		}
	}
}
console.log(a)