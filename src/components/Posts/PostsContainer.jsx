import React from 'react';
import Posts from './Posts';
import PostCreatorReduxForm from "./PostCreator";
import { connect } from 'react-redux';
import { addPostBody, deletePost, editPost } from '../../redux/reducer/PostsReducer';

const NewPostContainer =(props) => {

        const postEditor = (obj) => {
            props.editPost(obj)
        }
        const onSubmit = (formData) => {
            formData.createdAt = Date.now()
            formData._id =  Math.random().toString(36).substring(7)
           
            props.addPostBody(formData)
        }
        const deletePost = (id) => {
            debugger
            props.deletePost(id)
            
        }
        return (
            <div>
                <Posts posts={props.posts}
                    deletePost={deletePost}
                    postEditor={postEditor}
                />
                <PostCreatorReduxForm posts={props.posts} onSubmit={onSubmit}
                />
            </div>
        )
    }
    
const mapStateToProps = (state) => ({
    posts: state.posts.posts
})

export default connect(mapStateToProps, { addPostBody, deletePost, editPost })(NewPostContainer)