var uniqueInOrder=function(iterable){
​
  return [...iterable].filter((a, i) => a !== iterable[i-1])
}