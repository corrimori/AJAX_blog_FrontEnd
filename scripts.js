const loadEntries = () => {
  console.log("load event detected...")

  let list = document.querySelector('#entryList')
  list.innerHTML = ''

  axios.get('http://localhost:3001/blogs').then(result => {
    let data = result.data
    data.forEach( element => {
      // console.log(element.title)
      let listItem = document.createElement('li')
      listItem.innerHTML = element.title
      console.log(listItem)
      list.appendChild(listItem)
      // element.addEventListener('click', () =>{
      //   li.remove()
      })
    })
}

function showForm() {
  console.log('in showForm function')
  let createPostForm = document.getElementById('entryForm')
  createPostForm.style.display = 'block'
  // if (createPostForm.style.display === 'none') {
  //   console.log('form>>', createPostForm.style.display);
  //   createPostForm.style.display = 'block'
  // } else {
  //   createPostForm.style.display = 'none'
  // }
}




document.addEventListener('DOMContentLoaded', loadEntries)



// let button = document.querySelector('#the-button')
// button.addEventListener('click', onButtonClick)
