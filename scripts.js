const load = () => {
  console.log("load event detected!");
  // get all blog posts
}
window.onload = load;

function showForm() {
  console.log('in showForm function')
  let createPostForm = document.getElementById('entryForm')
  if (createPostForm.style.display === 'none') {
    console.log('form>>', createPostForm.style.display);
    createPostForm.style.display = 'block'
  } else {
    createPostForm.style.display = 'none'
  }
}
