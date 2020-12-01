const customerRouter = [
    {
        path: '/customers',
        component: () => import ('../components/customer/List'),
        name: 'customerIndex',
    }
];

export default customerRouter;