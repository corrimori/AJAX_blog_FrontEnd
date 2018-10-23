const loadEntries = () => {
  console.log("load event detected...")

  let apiUrl = 'https://desolate-stream-84682.herokuapp.com/blogs'
  let list = document.querySelector('#entryList')
  list.innerHTML = ''

  axios.get(apiUrl).then(result => {
    let data = result.data
    data.forEach( element => {
      // console.log(element.title)
      let listItem = document.createElement('li')
      listItem.innerHTML = element.title
      console.log('listitem>', listItem)
      list.appendChild(listItem).addEventListener('click', () => {
        console.log('clicked li')
        let listId = list.id
        console.log('element id>>>', element.id);
        console.log('data>>>>', data)
        // onclick hide showEntry
        let displayBlogArea = document.getElementById('displayBlog')
        displayBlogArea.style.display = 'none'
        // when clicked, hide current and show clicked entry
        //get titleEntry & contentEntry to pass into params
        let titleEntry = element.title
        let contentEntry = element.content
        showEntry(titleEntry, contentEntry)
      })
      // element.addEventListener('click', () =>{
      //   li.remove()
      })
    })
}



// when listitem clicked
// display/show entry on right

// when delete
// get id of list listitem
// axios call to remove item

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

//function to show Blog Entry once submit button is pressed
const showEntry = (titleEntry, contentEntry) => {
  console.log('in showEntry function')
  let displayEntry = document.getElementById('displayBlog')
  displayEntry.style.display = 'block'

  let titleDisplay = document.createElement("H2")
  let blogTitle = document.createTextNode(titleEntry)
  titleDisplay.appendChild(blogTitle)
  displayEntry.appendChild(titleDisplay)

  let contentDisplay = document.createElement("p")
  let blogContent = document.createTextNode(contentEntry)
  contentDisplay.appendChild(blogContent)
  displayEntry.appendChild(contentDisplay)

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

  // clear out the entry form after posting
  // document.getElementById('entryForm').

  let createPostForm = document.getElementById('entryForm')
  createPostForm.style.display = 'none'

  showEntry(titleEntry, contentEntry)

}


document.addEventListener('DOMContentLoaded', loadEntries)



// let button = document.querySelector('#the-button')
// button.addEventListener('click', onButtonClick)
