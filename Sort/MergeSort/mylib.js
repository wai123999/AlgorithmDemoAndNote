function swap(arr,i,j)
{
  var temp = i;
  arr[i] = arr[j];
  arr[j] = temp;
}

module.exports = swap;


