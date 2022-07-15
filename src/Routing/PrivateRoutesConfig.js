import React from 'react';
import { UserOutlined, LaptopOutlined } from '@ant-design/icons';
import { FaTicketAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Roles from "./Roles";

import UsersListing from '../Pages/Users'
import UsersAdd from "../Pages/Users/UsersAdd";
import UsersEdit from "../Pages/Users/UsersEdit";
import UserDetails from '../Pages/Users/UserDetails';

import Profile from "../Pages/Profile";

import AssetsListing from "../Pages/Assets/index"
import AssetsAdd from "../Pages/Assets/AssetsAdd"
import AssetsEdit from "../Pages/Assets/AssetsEdit"
import AssetDetails from "../Pages/Assets/AssetDetails";

import AssetCategories from "../Pages/AssetCategories";
import AssetCategoryAdd from "../Pages/AssetCategories/AssetCategoryAdd";
import AssetCategoryEdit from "../Pages/AssetCategories/AssetCategoryEdit";

import AssetTypesListing from "../Pages/AssetTypes/index";
import AssetTypeAdd from "../Pages/AssetTypes/AssetTypeAdd";
import AssetTypeEdit from "../Pages/AssetTypes/AssetTypeEdit";

import AssetStatusListing from "../Pages/AssetStatus/index"
import AssetStatusAdd from "../Pages/AssetStatus/AssetStatusAdd"
import AssetStatusEdit from "../Pages/AssetStatus/AssetStatusEdit"
import AssetDashboard from '../Pages/AssetDashboard';

import TicketsListing from '../Pages/Tickets/index';
import TicketAdd from '../Pages/Tickets/TicketAdd';
import AllTicketsListing from '../Pages/AllTickets/index';

import TicketsStatusListing from "../Pages/TicketsStatus"
import TicketsStatusAdd from "../Pages/TicketsStatus/TicketsStatusAdd"
import TicketsStatusEdit from "../Pages/TicketsStatus/TicketsStatusEdit"

export const PrivateRoutesConfig = [
    {
        key : 1,
        sidebar : true,
        component: AssetDashboard,
        path: '/assets/dashboard',
        exact : true,
        permissions: [
            Roles.ADMIN,
        ],
    },
    {
        key : 2,
        sidebar : false,
        component: Profile,
        path: '/profile',
        exact : true,
        permissions: [
            Roles.ADMIN,
            Roles.EMPLOYEE,
        ],
    },
    {
        key : 3,
        sidebar : true,
        icon : React.createElement(UserOutlined, {className : 'side-nav-bar-icons',}),
        label : <Link to="/users">Users</Link>,
        component : UsersListing,
        path : '/users',
        exact : true,
        permissions : [
            Roles.ADMIN,
            Roles.EMPLOYEE
        ]
    },
    {
        key : 4,
        component : UsersAdd,
        path : '/users/add',
        exact : true,
        permissions : [
            Roles.ADMIN,
        ],
    },
    {
        key : 5,
        component : UsersEdit,
        path : '/users/edit/:id',
        exact : true,
        permissions : [
            Roles.ADMIN,
        ],
    },
    {
        key : 6,
        component : UserDetails,
        path : '/users/:id',
        exact : true,
        permissions : [
            Roles.ADMIN,
            Roles.EMPLOYEE
        ],
    },
    {
        key : 6,
        sidebar : true,
        icon : React.createElement(LaptopOutlined, {className : 'side-nav-bar-icons',}),
        label : <Link to="/assets">Assets</Link>,
        component : AssetsListing,
        path : '/assets',
        exact : true,
        permissions : [
            Roles.ADMIN
        ]
    },
    {
        key : 8,
        component : AssetsAdd,
        path : '/assets/add',
        exact : true,
        permissions : [
            Roles.ADMIN
        ]
    },
    {
        key : 9,
        component : AssetsEdit,
        path : '/assets/edit/:id',
        exact : true,
        permissions : [
            Roles.ADMIN
        ]
    },
    {
        key : 7,
        component : AssetDetails,
        path : '/assets/:id',
        exact : true,
        permissions : [
            Roles.ADMIN
        ]
    },
    {
        key : 10,
        sidebar : true,
        icon : React.createElement(LaptopOutlined, {className : 'side-nav-bar-icons',}),
        label : <Link to="/asset-categories">Asset Categories</Link>,
        component : AssetCategories,
        path : '/asset-categories',
        exact : true,
        permissions : [
            Roles.ADMIN
        ]
    },
    {
        key : 11,
        component : AssetCategoryAdd,
        path : '/asset-categories/add',
        exact : true,
        permissions : [
            Roles.ADMIN
        ]
    },
    {
        key : 12,
        component : AssetCategoryEdit,
        path : '/asset-categories/edit/:id',
        exact : true,
        permissions : [
            Roles.ADMIN
        ]
    },
    {
        key : 13,
        sidebar : true,
        icon : React.createElement(LaptopOutlined, {className : 'side-nav-bar-icons',}),
        label : <Link to="/asset-types">Asset Types</Link>,
        component : AssetTypesListing,
        path : '/asset-types',
        exact : true,
        permissions : [
            Roles.ADMIN
        ]
    },
    {
        key : 14,
        component : AssetTypeAdd,
        path : '/asset-types/add',
        exact : true,
        permissions : [
            Roles.ADMIN
        ]
    },
    {
        key : 15,
        component : AssetTypeEdit,
        path : '/asset-types/edit/:id',
        exact : true,
        permissions : [
            Roles.ADMIN
        ]
    },
    {
        key : 16,
        sidebar : true,
        icon : React.createElement(LaptopOutlined, {className : 'side-nav-bar-icons',}),
        label : <Link to="/asset-status">Asset Status</Link>,
        component : AssetStatusListing,
        path : '/asset-status',
        exact : true,
        permissions : [
            Roles.ADMIN
        ]
    },
    {
        key : 17,
        component : AssetStatusAdd,
        path : '/asset-status/add',
        exact : true,
        permissions : [
            Roles.ADMIN
        ]
    },
    {
        key : 18,
        component : AssetStatusEdit,
        path : '/asset-status/edit/:id',
        exact : true,
        permissions : [
            Roles.ADMIN
        ]
    },
    {
        key : 19,
        sidebar : true,
        icon : React.createElement(FaTicketAlt, {className : 'side-nav-bar-icons',}),
        label : <Link to="/tickets">Tickets</Link>,
        component : TicketsListing,
        path : '/tickets',
        exact : true,
        permissions : [
            Roles.EMPLOYEE
        ]
    },
    {
        key : 20,
        component : TicketAdd,
        path : '/tickets/add',
        exact : true,
        permissions : [
            Roles.EMPLOYEE
        ]
    },
    {
        key : 21,
        sidebar : true,
        icon : React.createElement(FaTicketAlt, {className : 'side-nav-bar-icons'}),
        label : <Link to="/all-tickets">All Tickets</Link>,
        component : AllTicketsListing,
        path : '/all-tickets',
        exact : true,
        permissions : [
            Roles.ADMIN
        ]
    },
    {
        key : 22,
        sidebar : true,
        icon : React.createElement(LaptopOutlined, {className : 'side-nav-bar-icons',}),
        label : <Link to="/tickets-status">Tickets Status</Link>,
        component : TicketsStatusListing,
        path : '/tickets-status',
        exact : true,
        permissions : [
            Roles.ADMIN
        ]
    },
    {
        key : 23,
        component : TicketsStatusAdd,
        path : '/tickets-status/add',
        exact : true,
        permissions : [
            Roles.ADMIN
        ]
    },
    {
        key : 24,
        component : TicketsStatusEdit,
        path : '/tickets-status/edit/:id',
        exact : true,
        permissions : [
            Roles.ADMIN
        ]
    },
]
