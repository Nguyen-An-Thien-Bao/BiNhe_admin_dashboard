import { title } from 'process';
import { FaHome, FaMoneyBillAlt, FaTag, FaShoppingCart, FaUsers } from 'react-icons/fa';

const webRoutes = [
    {
        title: 'dashboard',
        path: '/',
        Icon: FaHome,
    },
    {
        title: 'sales',
        path: '/sales',
        Icon: FaMoneyBillAlt,
    },
    {
        title: 'coupons',
        path: '/coupons',
        Icon: FaTag,
    },
    {
        title: 'products',
        path: '/products',
        Icon: FaShoppingCart,
    },
    {
        title: 'users',
        path: '/users',
        Icon: FaUsers,
    },
];

export default webRoutes;
