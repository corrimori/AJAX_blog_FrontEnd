let apiUrl = 'https://desolate-stream-84682.herokuapp.com/blogs'

const loadEntries = () => {
  console.log("load event detected...")

  let list = document.querySelector('#entryList')
  list.innerHTML = ''

  axios.get(apiUrl).then(result => {
    let data = result.data
    console.log('data', data);
    data.forEach( element => {
      // console.log(element.title)
      let listItem = document.createElement('li')
      listItem.innerHTML = element.title
      list.appendChild(listItem).addEventListener('click', () => {
        let listId = list.id
        // console.log('element id>>>', element.id);
        // console.log('data>>>>', data)
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
  document.querySelector('#title').value = ''
  document.querySelector('#content').value = ''
  document.getElementById('displayBlog').innerHTML = ''

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
const showEntry = (titleEntry, contentEntry, id) => {
  let displayEntry = document.getElementById('displayBlog')
  displayEntry.innerHTML = ''
  loadEntries()
  console.log('in showEntry function')
  document.getElementById('entryForm').style.display = 'none'
  displayEntry.style.display = 'block'

  let div = document.createElement('div')
  div.innerHTML = `<nav align="right">
    <a id="editLink" href="#">Edit</a>
    <a id="deleteLink" href="#">Delete</a>
    </nav>`

  let titleDisplay = document.createElement("H2")
  let blogTitle = document.createTextNode(titleEntry)
  titleDisplay.appendChild(blogTitle)
  displayEntry.appendChild(titleDisplay)

  let contentDisplay = document.createElement("p")
  let blogContent = document.createTextNode(contentEntry)
  contentDisplay.appendChild(blogContent)
  displayEntry.appendChild(div)
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

  axios.post(apiUrl, { title: titleEntry, content: contentEntry })
  .then(function(response){
    console.log('saved entry successfully')
    console.log('response', response);
    let {id} = response.data[0]
    console.log('id>>>>>', id);
    showEntry(titleEntry, contentEntry, id)
  });

  // clear out the entry form after posting
  // document.getElementById('entryForm').

  let createPostForm = document.getElementById('entryForm')
  createPostForm.style.display = 'none'


}


document.addEventListener('DOMContentLoaded', loadEntries)



// let button = document.querySelector('#the-button')
// button.addEventListener('click', onButtonClick)
