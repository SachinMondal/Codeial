const Comment=require('../models/comment');
const Post=require('../models/post');


module.exports.create = function(req,res){
    //fincding the post with the post id
    Post.findById(req.body.post,function(err,post){
        if(post){
            Comment.create({
                content:req.body.content,
                post:req.body.post,
                user:req.user._id
            },function(err,comment){
                //handle error
                if(err){
                    console.log("post not found");
                    
                }
                post.comments.push(comment);
                post.save();
                res.redirect('/');
            });
        }
    });

}

module.exports.destroy = function(req,res){
    Comment.findById(req.params.id,function(err,comment){
        if(comment.user == req.user.id){
            let postId=comment.post;

            comment.remove();
            //pull out the comment from the post 
            Post.findByIdAndUpdate(postId, { $pull: {comments : req.params.id}}, function(err,post){
                return res.redirect('back');
            });

        }else{
            return res.redirect('back');
        }
    });
}