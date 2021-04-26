import {
    Home,
    Box,
    DollarSign,
    Tag,
    Clipboard,
    Camera,
    AlignLeft,
    UserPlus,
    Users,
    Chrome,
    BarChart,Settings,Archive, LogIn
} from 'react-feather';

export const MENUITEMS = [
    {
        path: '/dashboard', title: 'Dashboard', icon: Home, type: 'link', badgeType: 'primary', active: false
    },
    {
        title: 'Game', icon: Box, type: 'sub', active: false, children: [
            
                
                    { path: '/products/physical/category', title: 'Category', type: 'link' },
                    { path: '/game/game-list', title: 'Game List', type: 'link' },

                    { path: '/game/add-game', title: 'Add Game', type: 'link' },
                
            
        ]
    },
    {
        title: 'Roles & Users', icon: UserPlus, type: 'sub', active: false, children: [
            { path: '/users/list-user', title: 'User List', type: 'link' },
            { path: '/users/create-user', title: 'Create User', type: 'link' },
        ]
    },
    {
        title: 'Invoice',path:'/invoice', icon: Archive, type: 'link', active: false
    },
    {
        title: 'Pages', icon: Clipboard , type: 'sub', active: false, children: [
            { path: '/pages/list-page', title: 'List Page', type: 'link' },
            { path: '/pages/create-page', title: 'Create Page', type: 'link' },
        ]
    },
    {
        title: 'Reports',path:'/reports/report', icon: BarChart, type: 'link', active: false
    },
    // {
    //     title: 'Sales', icon: DollarSign, type: 'sub', active: false, children: [
    //         { path: '/sales/orders', title: 'Orders', type: 'link' },
    //         { path: '/sales/transactions', title: 'Transactions', type: 'link' },
    //     ]
    // },
    // {
    //     title: 'Coupons', icon: Tag, type: 'sub', active: false, children: [
    //         { path: '/coupons/list-coupons', title: 'List Coupons', type: 'link' },
    //         { path: '/coupons/create-coupons', title: 'Create Coupons', type: 'link' },
    //     ]
    // },

    // {
    //     title: 'Media', path: '/media', icon: Camera, type: 'link', active: false
    // },
    // {
    //     title: 'Menus', icon: AlignLeft, type: 'sub', active: false, children: [
    //         { path: '/menus/list-menu', title: 'List Menu', type: 'link' },
    //         { path: '/menus/create-menu', title: 'Create Menu', type: 'link' },
    //     ]
    // },

    // {
    //     title: 'Vendors', icon: Users, type: 'sub', active: false, children: [
    //         { path: '/vendors/list_vendors', title: 'Vendor List', type: 'link' },
    //         { path: '/vendors/create-vendors', title: 'Create Vendor', type: 'link' },
    //     ]
    // },
    // {
    //     title: 'Localization', icon: Chrome, type: 'sub', children: [
    //         { path: '/localization/transactions', title: 'Translations', type: 'link' },
    //         { path: '/localization/currency-rates', title: 'Currency Rates', type: 'link' },
    //         { path: '/localization/taxes', title: 'Taxes', type: 'link' }
    //     ]
    // },
    // {
    //     title: 'Reports',path:'/reports/report', icon: BarChart, type: 'link', active: false
    // },
    // {
    //     title: 'Settings', icon: Settings, type: 'sub', children: [
    //         { path: '/settings/profile', title: 'Profile', type: 'link' },
    //     ]
    // },

    // {
    //     title: 'Login',path:'/auth/login', icon: LogIn, type: 'link', active: false
    // }
]
