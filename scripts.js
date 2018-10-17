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

const showForm = () => {
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

const showEntry = (titleEntry, contentEntry) => {
  console.log('in showEntry function')
  let displayEntry = document.getElementById('displayBlog')
  displayEntry.style.display = 'block'

  let titleDisplay = document.createElement("H1")
  let blogTitle = document.createTextNode(titleEntry)
  titleDisplay.appendChild(blogTitle)
  displayEntry.appendChild(titleDisplay)

  // let showTitle = document.getElementById('displayTitle')
  // showTitle.innerHTML = titleEntry
  // // displayTitle.append(showTitle)
  // .appendChild(showTitle)

}

const postEntry = () => {
  console.log('in postEntry function =====');
  let titleEntry = document.querySelector('#title').value
  let contentEntry = document.querySelector('#content').value
  console.log('titleEntry>>> ', titleEntry)
  console.log('contentEntry>>> ', contentEntry)

  axios.post('http://localhost:3001/blogs', { title: titleEntry, content: contentEntry })
  .then(function(response){
    console.log('saved entry successfully')
  });

  let createPostForm = document.getElementById('entryForm')
  createPostForm.style.display = 'none'

  showEntry(titleEntry, contentEntry)

}


document.addEventListener('DOMContentLoaded', loadEntries)



// let button = document.querySelector('#the-button')
// button.addEventListener('click', onButtonClick)
