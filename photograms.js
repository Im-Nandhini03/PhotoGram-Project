// Define the post1 object with the given details.
let post1 = {
    id: 1,
    author: 'John',
    content: 'My first Post!',
    likes: 10,
    comments: ['Great post!', 'Nice photo!'],
    image: 'https://files.codingninjas.in/image2-28694.jpg'
  };
  
  // Function to render the post1 object on the screen.
  function renderPosts() {
    // Get the container where the post will be added.
      const postsDiv = document.getElementById('posts');
  
  
    // Clear any existing content in the posts container.
       postsDiv.innerHTML = '';
  
  
    // Create a new div element for the post and set its class.
      const postDiv = document.createElement('div');
      postDiv.className = 'post';
  
  
    // Create an h3 element for the author's name and set its text content.
      const h3Element = document.createElement('h3');
      h3Element.textContent = post1.author;
      postDiv.appendChild(h3Element);
    
   
    // Create an img element for the post's image and set its source and alt text.
      const imgElement = document.createElement('img');
      imgElement.src = post1.image;
      imgElement.alt = `${post1.author}'s Post Image`;
      postDiv.appendChild(imgElement);
    
  
    // Create a p element for the post's content and set its text content.
      const pElement = document.createElement('p');
      pElement.textContent =  post1.content;
      postDiv.appendChild(pElement);
    
  
    // Create a button element for "Like" and set its text content.
      const likeElement = document.createElement('button');
      likeElement.textContent = 'Like';
      postDiv.appendChild(likeElement);

      likeElement.addEventListener('click', ()=>{
        post1.likes += 1;
        likeElement.disabled = true; //only once call
        likeElement.style.backgroundColor ='red';
        likeElement.textContent = `Like (${post1.likes})`;
        updateFooter();
      });

      
    
  
    // Create an input element for writing comments and set its type and placeholder.
      const inputElement = document.createElement('input');
      inputElement.type='text';
      inputElement.placeholder = 'writing comments...';
      postDiv.appendChild(inputElement);
   
  
    // Create a button element for "Comment" and set its text content.
      const commentElement = document.createElement('button');
      commentElement.textContent ='Comment';
      postDiv.appendChild(commentElement);

      commentElement.addEventListener('click', ()=>{
        post1.comments.push(inputElement.value);
        renderPosts();
        inputElement.value="";
      });

      
   
  
    // Create a div element for the post footer and set its class and text content.
      const footDiv = document.createElement('div');
      footDiv.className = 'post-footer';
      footDiv.textContent = `Likes: ${post1.likes} Comments: ${post1.comments.length}`;
      postDiv.appendChild(footDiv);
   
  
    // Create a div element for the comments container and set its class.
      const commentsDiv = document.createElement('div');
      commentsDiv.className = 'comments-container';
      
    // Initially, set its display style to 'none' to hide it.
      
       commentsDiv.style.display = 'none';
     
    // For each comment in the comments array, create a p element and append it to the comments container.
      
       post1.comments.forEach(comment =>{
          const commentparagraph = document.createElement('p');
          commentparagraph.textContent = comment;
          commentsDiv.appendChild(commentparagraph);
      });
      
      
  // Append all created elements to the post container.
      postDiv.appendChild(commentsDiv);
    
  
    // Add a click event listener to toggle the visibility of commentsContainer.
      
      footDiv.addEventListener('click', ()=> {
          commentsDiv.style.display = 
              commentsDiv.style.display === 'none'? 'block':'none';
      });
    
  
    // Append the post element to the posts container.

    function updateFooter()
      {
        footDiv.textContent = `Likes: ${post1.likes} | Comments: ${post1.comments.length}`;
      }
      
      postsDiv.appendChild(postDiv);
  }
  
  // Call the renderPosts function to display the post on the screen.
  
  renderPosts();
  