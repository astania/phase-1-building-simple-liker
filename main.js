// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
  
  let likeHearts = Array.from(document.getElementsByClassName('like-glyph'))
 
  likeHearts.forEach((heart) => {heart.addEventListener('click', function(e){
    console.log(e.target)
    mimicServerCall()

    .then(function(){if(heart.innerText === EMPTY_HEART){
      heart.innerText = FULL_HEART
      heart.className = "activated-heart"
    } else if (heart.innerText === FULL_HEART){
        heart.innerText = EMPTY_HEART
        heart.className = ""
    }})
    .catch((error)=>{
      let errorArea = document.getElementById('modal')
      let errorMessage = document.getElementById('modal-message')
      errorArea.className = ""
      errorMessage.innerText = "Random server error. Try again."
      console.log(error.message)
      setTimeout(function(){errorArea.className = "hidden"}, 3000)
    })
  })})

  

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
