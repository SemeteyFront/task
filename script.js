function numSort(num) {
  const arr = num + "" 
  const pustoi = [] 
  for(let i=0; i< arr.length; i++) {
    pustoi.push(arr[i])
  }
  pustoi.sort((a,b) => b-a)
  return +pustoi.join('')
}

alert(numSort(24543587234))