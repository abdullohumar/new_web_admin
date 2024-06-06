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

export default function CategoryEdit() {

    //title page
    document.title = "Edit Category - NewsApp Administartor";

    //navigata
    const navigate = useNavigate();

    //get ID from parameter URL
    const { id } = useParams();

    //define state for form
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [errors, setErros] = useState([]);

    //token from cookies
    const token = Cookies.get('token');

    //function fetchDataCategory
    const fetchDataCategory = async () => {

        await Api.get(`/api/admin/categories/${id}`, {

            //header
            headers: {
                //header Bearer + Token
                Authorization: `Bearer ${token}`,
            }
        })
        .then(response => {

            //set response data to state
            setName(response.data.data.name);
        });

    }

    //useEffect
    useEffect(() => {

        //call function "fetchDataCategory"
        fetchDataCategory();
    }, []);

    //function "updateCategory"
    const updateCategory = async (e) => {
        e.preventDefault();

        //define formData
        const formData = new FormData();

        //append data to "formData"
        formData.append('image', image);
        formData.append('name', name);
        formData.append('_method', 'PUT');

        //sending data
        await Api.post(`/api/admin/categories/${id}`, formData, {
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

            //redirect
            navigate('/categories');

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
                        <Link to="/categories" className="btn btn-md btn-tertiary border-0 shadow mb-3" type="button"><i className="fa fa-long-arrow-alt-left me-2"></i> Back</Link>
                        <div className="card border-0 shadow">
                            <div className="card-body">
                                <h6><i className="fa fa-folder"></i> Edit Category</h6>
                                <hr/>
                                <form onSubmit={updateCategory}>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Image</label>
                                        <input type="file" className="form-control" accept="image/*" onChange={(e) => setImage(e.target.files[0])}/>
                                    </div>
                                    {errors.image && (
                                        <div className="alert alert-danger">
                                            {errors.image[0]}
                                        </div>
                                    )}
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Category Name</label>
                                        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Category Name"/>
                                    </div>
                                    {errors.name && (
                                        <div className="alert alert-danger">
                                            {errors.name[0]}
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