import Vue from "vue";
import Router from "vue-router";
import DashboardLayout from "@/js/layout/DashboardLayout";
import SuperAdminDashboardLayout from "@/js/SuperAdminLayout/SuperAdminDashboardLayout";
import AuthLayout from "@/js/layout/AuthLayout";
import Login from "@/js/views/Login";

Vue.use(Router);
import VueCookies from 'vue-cookies';
Vue.use(VueCookies);
export default new Router({
    linkExactActiveClass: "active",
    mode: "history",
    routes: [{
            // check webpacks pages in case of error
            path: "/",
            redirect: "login",
            component: AuthLayout,
            children: [{
                    path: "/login",
                    name: "login",
                    //this is a dynamic import
                    // we use the lazy load by splitting the big bundel to small bundels (chunks) 
                    component: Login
                }

            ]
        },
        {
            path: "/dashboard",
            // beforeEach: (to, from, next) => {
            //     if (Vue.cookie.get('_token')) {
            //         next('/dashboard');
            //     } else {
            //         next('/login');
            //     }
            // },
            // redirect: "dashboard",
            component: DashboardLayout,
            children: [{
                    path: "/dashboard",
                    name: "dashboard",
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ "./Admin/Dashboard.vue")
                },
                {
                    path: "/agents",
                    name: "agents",
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ "./Admin/AgentComponent")
                },
                {
                    path: "/niches",
                    name: "niches",
                    // beforeEnter: (to, from, next) => {
                    //     if (Vue.cookie.get('_token')) {
                    //         next('/niches');
                    //     } else {
                    //         next("/login");

                    //     }
                    // },
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ "./Admin/NicheComponent")
                },
                {
                    path: "/lignes",
                    name: "lignes",
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ "./Admin/LignesTable.vue")
                },
                {
                    path: "/interventions",
                    name: "interventions",
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ "./Admin/InterventionComponent.vue")
                },
                {
                    path: "/icons",
                    name: "icons",
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ "./views/Icons.vue")
                },
                {
                    path: "/profile",
                    name: "profile",
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ "./views/UserProfile.vue")
                },

            ]
        },
        {
            path: "/super-admin-dashboard",
            redirect: "super-admin-auth-layout",
            component: SuperAdminDashboardLayout,
            children: [{
                    path: "/super-admin-dashboard",
                    name: "super-admin-dashboard",
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () =>
                        import ( /* webpackChunkName: "login" */ "./Super_Admin/SuperAdminDashboard.vue")
                },
                {
                    path: "/admins",
                    name: "admins",
                    component: () =>
                        import ( /* webpackChunkName: "demo" */ "./Super_Admin/AdminsComponent.vue")
                },
                // {
                //     path: "/niches",
                //     name: "niches",
                //     component: () =>
                //         import ( /* webpackChunkName: "demo" */ "./Admin/NicheComponent")
                // },
                // {
                //     path: "/lignes",
                //     name: "lignes",
                //     component: () =>
                //         import ( /* webpackChunkName: "demo" */ "./Admin/LignesTable.vue")
                // },
                // {
                //     path: "/interventions",
                //     name: "interventions",
                //     component: () =>
                //         import ( /* webpackChunkName: "demo" */ "./Admin/InterventionComponent.vue")
                // },
                // {
                //     path: "/icons",
                //     name: "icons",
                //     component: () =>
                //         import ( /* webpackChunkName: "demo" */ "./views/Icons.vue")
                // },
                // {
                //     path: "/profile",
                //     name: "profile",
                //     component: () =>
                //         import ( /* webpackChunkName: "demo" */ "./views/UserProfile.vue")
                // },
                // {
                //     path: "/maps",
                //     name: "maps",
                //     component: () =>
                //         import ( /* webpackChunkName: "demo" */ "./views/Maps.vue")
                // }
            ]
        }
    ]
});