{   
    // method to submit the form data for new post using AJAX
    let createPost = function(){
        let newPostForm = $('#new-post-form');
        console.log(newPostForm);
        newPostForm.submit(function(e){
            e.preventDefault();

            $.ajax({
                type: 'post',
                url: '/post/create',
                data: newPostForm.serialize(),
                success: function(data){
                   console.log(data);
                }, error: function(error){
                    console.log(error.responseText);
                }
            });
        });
    }


    // method to create a post in DOM
    

    createPost();
}


// $.ajax({
//     type: 'post',
//     url: '/posts/create',
//     data: newPostForm.serialize(),
//     success: function(data){
//         let newPost = newPostDom(data.data.post);
//         $('#posts-list-container>ul').prepend(newPost);
//         deletePost($(' .delete-post-button', newPost));

//         // call the create comment class
//         new PostComments(data.data.post._id);

//         new ToggleLike($(' .toggle-like-button',newPost))

//         new Noty({
//             theme: 'relax',
//             text: "Post published!",
//             type: 'success',
//             layout: 'topRight',
//             timeout: 1500
            
//         }).show();