import {AdminLayout} from '../layouts'
import {LoginAdmin} from '../pages/Admin'

const routerAdmin = [
    {
        path: '/admin',
        layout: AdminLayout,
        component: LoginAdmin,
        exact: true,
    },
]

export default routerAdmin;