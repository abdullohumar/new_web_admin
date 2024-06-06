//import react  
import { useState, useEffect } from "react";

//import react router dom
import { Link, useNavigate, useParams } from "react-router-dom";

//import layout
import LayoutDefault from '../../layouts/Default';

//import api
import Api from '../../api';

//import js cookie
import Cookies from 'js-cookie';

//import toast
import toast from 'react-hot-toast';

//import editor component
import Editor from '../../components/Editor';

//import useRecoilState
import { useRecoilState } from "recoil";

//global state recoil
import { editorState } from "../../store";

export default function PostEdit() {

    //title page
    document.title = "Edit Post - NewsApp Administartor";

    //navigata
    const navigate = useNavigate();

    //get ID from parameter URL
    const { id } = useParams();

    //define state for form
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [categoryID, setCategoryID] = useState('');
    const [content, setContent] = useRecoilState(editorState);
    const [errors, setErros] = useState([]);

    const [categories, setCategories] = useState([]);

    //token from cookies
    const token = Cookies.get('token');

    //function "fetchDataCategories"
    const fetchDataCategories = async () => {

        await Api.get('/api/admin/categories/all', {

            //header
            headers: {
                //header Bearer + Token
                Authorization: `Bearer ${token}`,
            }
        })
            .then(response => {

                //set response data to state "categories"
                setCategories(response.data.data);
            });

    }

    //function "fetchDataPost"
    const fetchDataPost = async () => {

        await Api.get(`/api/admin/posts/${id}`, {

            //header
            headers: {
                //header Bearer + Token
                Authorization: `Bearer ${token}`,
            }
        })
        .then(response => {

            //set response data to state
            setTitle(response.data.data.title);
            setCategoryID(response.data.data.category_id);
            setContent(response.data.data.content);
        });

    }

    //useEffect
    useEffect(() => {

        //call function "fetchDataCategories"
        fetchDataCategories();

        //call function "fetchDataPost"
        fetchDataPost();
    }, []);

    //function "updatePost"
    const updatePost = async (e) => {
        e.preventDefault();

        //define formData
        const formData = new FormData();

        //append data to "formData"
        formData.append('image', image);
        formData.append('title', title);
        formData.append('category_id', categoryID);
        formData.append('content', content);
        formData.append('_method', 'PUT');

        //sending data
        await Api.post(`/api/admin/posts/${id}`, formData, {
            //header
            headers: {
                //header Bearer + Token
                'Authorization': `Bearer ${token}`,
                'content-type': 'multipart/form-data'
            }
        })
            .then(response => {

                //show toast
                toast.success(response.data.message, {
                    position: "top-right",
                    duration: 4000,
                });

                //set global state empty
                setContent('');

                //redirect
                navigate('/posts');

            })
            .catch(error => {

                //set error message to state "errors"
                setErros(error.response.data);
            })
    }

    return (
        <LayoutDefault>
            <div className="container-fluid mb-5 mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <Link to="/posts" className="btn btn-md btn-tertiary border-0 shadow mb-3" type="button"><i className="fa fa-long-arrow-alt-left me-2"></i> Back</Link>
                        <div className="card border-0 shadow">
                            <div className="card-body">
                                <h6><i className="fa fa-pencil-alt"></i> Edit Post</h6>
                                <hr />
                                <form onSubmit={updatePost}>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Image</label>
                                        <input type="file" className="form-control" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
                                    </div>
                                    {errors.image && (
                                        <div className="alert alert-danger">
                                            {errors.image[0]}
                                        </div>
                                    )}
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Title</label>
                                        <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter Title Post" />
                                    </div>
                                    {errors.title && (
                                        <div className="alert alert-danger">
                                            {errors.title[0]}
                                        </div>
                                    )}

                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Category</label>
                                        <select className="form-select" value={categoryID} onChange={(e) => setCategoryID(e.target.value)}>
                                            <option value="">-- Select Category --</option>
                                            {
                                                categories.map((category) => (
                                                    <option value={category.id} key={category.id}>{category.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    {errors.category_id && (
                                        <div className="alert alert-danger">
                                            {errors.category_id[0]}
                                        </div>
                                    )}

                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Content</label>
                                        <Editor content={content}/>  
                                    </div>
                                    {errors.content && (
                                        <div className="alert alert-danger">
                                            {errors.content[0]}
                                        </div>
                                    )}

                                    <div>
                                        <button type="submit" className="btn btn-md btn-tertiary me-2"><i className="fa fa-save"></i> Update</button>
                                        <button type="reset" className="btn btn-md btn-warning"><i className="fa fa-redo"></i> Reset</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutDefault>
    )
}