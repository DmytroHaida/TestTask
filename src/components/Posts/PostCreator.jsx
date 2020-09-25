import React from 'react';
import { FormField, Input, TextArea } from '../../common/FormControls/FormsControls';
import { reduxForm } from 'redux-form';

const PostCreator = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            < div className='postContainer'  >
                <div className='postImg'>
                    <h3>Зображення:</h3>
                    {FormField(Input, null, 'Put Image URL', 'postImage')}
                </div>
                <div>
                    <h2>Заголовок:</h2>
                    {FormField(Input, null, 'Text', 'postHeader')}
                </div>
                <div>
                    <h3>Новина:</h3>
                    {FormField(TextArea, null, 'Text', 'postBody')}
                </div>
                <button type="submit" disabled={props.pristine}>Відправити</button>
            </div>
        </form>
    )
}

const PostCreatorReduxForm = reduxForm({ form: 'postCreator' })(PostCreator)

export default PostCreatorReduxForm;