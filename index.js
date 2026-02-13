const viewMore = document.getElementById('view-more')
let hidden = document.getElementsByClassName('hidden')

console.log(hidden)
viewMore.addEventListener("click", function(){
   hidden = Array.from(hidden)
   hidden.forEach(element => {
      element.classList.toggle('show')
   });
})