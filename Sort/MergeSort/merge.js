var swap = require("./mylib");

var a = [ 9, 8 , 7 , 6, 4,2,1,11,22,0,-4,-5]
var compare = 0;
var change = 0;
console.log(a);

function MergeSort(num_array,start,end)
{
  var middle = Math.ceil((end - start + 1)/2)+ start;
  if ( start == end )
  {
      //Divide Finish
      console.log(num_array[start]);
  }
  else
  {
	MergeSort(num_array,start,middle - 1);
    	MergeSort(num_array,middle, end);
	let l = num_array.slice(start,middle);
	let r = num_array.slice(middle,end+1);
	l.push(99999);r.push(9999);
	let i = 0,j=0,k=start;
	for ( ; k <= end ; )
	{
	   compare++;
	   change++;
	   if ( l[i] < r[j] ) num_array[k++] = l[i++];
           else num_array[k++] = r[j++];
	}
  }
}


MergeSort(a,0,a.length-1);
console.log(a , "Change:"+change.toString(), "Compare:" + compare.toString());
