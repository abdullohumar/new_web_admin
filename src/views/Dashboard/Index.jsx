//import useState and useEffect
import { useState, useEffect } from 'react';

//import api
import Api from '../../api';

//import js cookie
import Cookies from 'js-cookie';

//import layout
import LayoutDefault from "../../layouts/Default";

//import chart js
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';

//register chart
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

//import react chart js
import { Line } from 'react-chartjs-2';

export default function Dashboard() {

    //title page
    document.title = "Dashboard - NewsApp Administrator";

    //define state
    const[countCategories, setCountCategories] = useState(0);
    const[countPosts, setCountPosts] = useState(0);
    const[countSliders, setCountSliders] = useState(0);
    const[countUsers, setCountUsers] = useState(0);
    const[days, setDays] = useState([]);
    const[count, setCount] = useState([]);

    //token from cookies
    const token = Cookies.get('token');

    //method fetchData
    const fetchData = async () => {

        //set axios header dengan type Authorization + Bearer token
        Api.defaults.headers.common['Authorization'] = `Bearer ${token}`

        await Api.get('/api/admin/dashboard')
        .then(response => {

            //set response to state
            setCountCategories(response.data.data.categories);
            setCountPosts(response.data.data.posts);
            setCountSliders(response.data.data.sliders);
            setCountUsers(response.data.data.users);

            setDays(response.data.data.post_views.days);
            setCount(response.data.data.post_views.count);
        })

    }

    //useEffect
    useEffect(() => {

        //call method "fetchData"
        fetchData();

    }, []);

    //option chart
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'STATISTIC VIEWS POST : 30 DAYS',
            },
        },
    };

    //data chart
    const data = {
        labels: days,
        datasets: [
            {
                fill: true,
                label: 'VIEWS',
                backgroundColor: '#bccad8',
                data: count
            },
        ],
    };

    return (
        <LayoutDefault>
            <div className="container-fluid mb-5 mt-5">
                <div className="row">

                    <div className="col-12 col-sm-6 col-xl-3 mb-4">
                        <div className="card border-0 shadow">
                            <div className="card-body">
                                <div className="row d-block d-xl-flex align-items-center">
                                    <div
                                        className="col-12 col-xl-5 text-xl-center mb-3 mb-xl-0 d-flex align-items-center justify-content-xl-center">
                                        <div className="icon-shape icon-shape-info rounded me-4 me-sm-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-folder" viewBox="0 0 16 16">
                                                <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z" />
                                            </svg>
                                        </div>
                                        <div className="d-sm-none">
                                            <h6 className="h6">Categories</h6>
                                            <h5 className="fw-extrabold mb-1">{countCategories}</h5>
                                        </div>
                                    </div>
                                    <div className="col-12 col-xl-7 px-xl-0">
                                        <div className="d-none d-sm-block">
                                            <h6 className="h6">Categories</h6>
                                            <h5 className="fw-extrabold mb-1">{countCategories}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-xl-3 mb-4">
                        <div className="card border-0 shadow">
                            <div className="card-body">
                                <div className="row d-block d-xl-flex align-items-center">
                                    <div
                                        className="col-12 col-xl-5 text-xl-center mb-3 mb-xl-0 d-flex align-items-center justify-content-xl-center">
                                        <div className="icon-shape icon-shape-success rounded me-4 me-sm-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                            </svg>
                                        </div>
                                        <div className="d-sm-none">
                                            <h6 className="h6">Posts</h6>
                                            <h5 className="fw-extrabold mb-1">{countPosts}</h5>
                                        </div>
                                    </div>
                                    <div className="col-12 col-xl-7 px-xl-0">
                                        <div className="d-none d-sm-block">
                                            <h6 className="h6">Posts</h6>
                                            <h5 className="fw-extrabold mb-1">{countPosts}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-xl-3 mb-4">
                        <div className="card border-0 shadow">
                            <div className="card-body">
                                <div className="row d-block d-xl-flex align-items-center">
                                    <div
                                        className="col-12 col-xl-5 text-xl-center mb-3 mb-xl-0 d-flex align-items-center justify-content-xl-center">
                                        <div className="icon-shape icon-shape-tertiary rounded me-4 me-sm-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-image-fill" viewBox="0 0 16 16">
                                                <path d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
                                            </svg>
                                        </div>
                                        <div className="d-sm-none">
                                            <h6 className="h6">Sliders</h6>
                                            <h5 className="fw-extrabold mb-1">{countSliders}</h5>
                                        </div>
                                    </div>
                                    <div className="col-12 col-xl-7 px-xl-0">
                                        <div className="d-none d-sm-block">
                                            <h6 className="h6">Sliders</h6>
                                            <h5 className="fw-extrabold mb-1">{countSliders}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-xl-3 mb-4">
                        <div className="card border-0 shadow">
                            <div className="card-body">
                                <div className="row d-block d-xl-flex align-items-center">
                                    <div
                                        className="col-12 col-xl-5 text-xl-center mb-3 mb-xl-0 d-flex align-items-center justify-content-xl-center">
                                        <div className="icon-shape icon-shape-danger rounded me-4 me-sm-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
                                                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
                                            </svg>
                                        </div>
                                        <div className="d-sm-none">
                                            <h6 className="h6">Users</h6>
                                            <h5 className="fw-extrabold mb-1">{countUsers}</h5>
                                        </div>
                                    </div>
                                    <div className="col-12 col-xl-7 px-xl-0">
                                        <div className="d-none d-sm-block">
                                            <h6 className="h6">Users</h6>
                                            <h5 className="fw-extrabold mb-1">{countUsers}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-12 col-xl-12 mb-4">
                        <div className="card border-0 shadow">
                            <div className="card-body">
                                <h6 className="h6"><i className='fa fa-chart-line'></i> Statistic Views Posts</h6>
                                <hr/>
                                <Line options={options} data={data} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </LayoutDefault>
    )

}