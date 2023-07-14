
function doubleEle(array){
	for(let i=0; i<array.length;i++){
		array[i]=array[i]*2;
	
	}
	return array;
}


function operation(arr, func){

	res=func(arr);
	console.log(res);

}


let nums=[2,4,3,1,6,8];
operation(nums,doubleEle);