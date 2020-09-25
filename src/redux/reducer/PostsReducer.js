import { reset } from 'redux-form';

const SET_POST = 'SET_POST';
const SET_EDITED_POST = 'SET_EDITED_POST';
const DELETE_POST = 'DELETE_POST';
let initialState = {

    posts:
        [
            {
                _id: "1",
                postImage: 'https://www.10mest.com/photos/france-paris-eiffel-tower-and-trocadero-gardens-600x338.jpg',
                postHeader: 'Париж',
                postBody: 'Місто Париж (Франція) Париж (фр. Paris) — столиця та найбільше місто Франції, розташоване в північній частині країни на берегах річки Сени в центрі регіону Іль-де-Франс.',
                createdAt: 1600885849752
            },
            {
                _id: "2",
                postImage: 'https://horosho-tam.ru/thumb/1600/pics/8e/e5/59a32de41f22d336a02de58e/sobor-svyatoy-sofii-stambul-turtsiya.jpg',
                postHeader: 'Туреччина',
                postBody: 'Назва «Туреччина» (тур. Türkiye), що застосовується до сучасної республіки Туреччина, походить від старофранцузького Turquie, яке, в свою чергу, походить від середньовічних латинських форм Turchia, Turquia і грец. Τουρκία. Османська імперія, що існувала в 1299-1922 роках, серед її сучасників також зазвичай називалася Туреччиною або Османською імперією.',
                createdAt: 1600885849752
            },
            {
                _id: "3",
                postImage: 'https://www.tourtrans.ru/images/countries/ssha/nyu-york/shutterstock_118357066.jpg',
                postHeader: 'Нью-Йорк',
                postBody: 'Нью-Йо́рк (англ. New York City, МФА: [nuːˈjɔɹk] ( прослухати) або The City of New York, дослівно — «Новий Йорк») — найбільше місто у США[9], розташоване на Атлантичному узбережжі біля гирла річки Гудзон. Населення — 8 175 133 особи (2010[1]), міської агломерації — 19 млн.',
                createdAt: 1600885849752
            }
        ]
}

const PostsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POST:
            return {
                ...state,
                posts: [...state.posts, action.posts]
            }
        case SET_EDITED_POST:
            debugger
            return {
                ...state,
                posts: state.posts.map(p => {
                    if (p._id === action.editedPost._id) {
                        return action.editedPost
                    }
                    return p
                })
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(item => !action.id.includes(item._id))             
                //  item._id !== action.id)
            }
        default:
            return state
    }
}
//action creator
export const setPosts = (posts) => ({ type: SET_POST, posts })
export const setEditedPost = (editedPost) => ({ type: SET_EDITED_POST, editedPost })
export const deletePostActionCreator = (id) => ({ type: DELETE_POST, id })
//thunk dispatch
export const addPostBody = (posts) => (dispatch) => {
    dispatch(setPosts(posts))
    dispatch(reset('postCreator'))
}
export const deletePost = (id) => (dispatch) => {
    dispatch(deletePostActionCreator(id))
}
export const editPost = (obj) => async (dispatch) => {
    dispatch(setEditedPost(obj));
}

export default PostsReducer;
