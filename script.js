function reverse(str){
  const stroke = [];
  str.split(" ").forEach(elem => {
      if(elem.length >= 5){
          stroke.push(elem.split("").reverse().join(""))
      } else {
          stroke.push(elem)
      }
  })

  return stroke.join(" ")
}

alert(reverse("Hey fellow warriors"))