let removeButton = document.getElementById('remove')


removeButton.addEventListener('click', function(){
    if (this.innerHTML === "remove") {
        this.innerHTML = "add";
      } else {
        this.innerHTML = "remove";
      }
})

