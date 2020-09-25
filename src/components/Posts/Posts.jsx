import React, { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/uk';
import PostEditorReduxFormState from './PostEditor';

const Posts = (props) => {
    const [editMode, setEditMode] = useState();
    const [currentPostValue, setCurrentPostValue] = useState();
    const [initialFormValue, setinitialFormValue] = useState(currentPostValue);
    const [postForDelete, setPostForDelete] = useState([]);
    useEffect(() => {
        setinitialFormValue(currentPostValue)
    },
        [currentPostValue])

    const onEditorSubmit = (formData) => {
        props.postEditor(formData)
        setEditMode(false)
        setCurrentPostValue(null)
    }
    const initialValueForEditForm = (id, image, header, body) => {
        setCurrentPostValue(
            {
                _id: id,
                postImage: image,
                postBody: body,
                postHeader: header
            }
        )
    }
    const checkboxToggler = (id) => {
        console.log(postForDelete)
        const index = postForDelete.indexOf(id)
        if (index > -1) {
            setPostForDelete(postForDelete.filter((item) => item !== id))
        } else {
            setPostForDelete([...postForDelete, id])
        }
    }
    
return (
    <>
        { props.posts.map(n => editMode === n._id
            ? <PostEditorReduxFormState id={n.id} onSubmit={onEditorSubmit} initialValues={initialFormValue} />
            : < div className='postContainer' key={n._id + 1} >
                <div>
                    <div className='postImg'>
                        <img className='postImg' src={n.postImage} alt="postImg" />
                    </div>
                    <h2>{n.postHeader}</h2>
                    <div className='postText'>{n.postBody}
                    </div>
                    <div>
                        Створено: {moment(n.createdAt).locale('uk').format('LLL')}
                        {/* Created time */}
                    </div>
                    <div>
                        <input type="checkbox" onClick={() => checkboxToggler(n._id)} ></input>
                        <button onClick={() => props.deletePost(postForDelete.length > 0 ? postForDelete : [n._id], setPostForDelete([]))}>Delete Post</button>
                        <button onClick={() => initialValueForEditForm(n._id, n.postImage,
                            n.postHeader, n.postBody, setEditMode(n._id))}>Edit Mode</button>
                    </div>

                </div>
            </div >
        )}
    </>
)
}
export default Posts;