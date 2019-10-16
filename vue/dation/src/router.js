import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/page/LoginPage/LoginPage";
import UserViewer from "@/page/AccountPage/UserViewer";
import UserPage from "@/components/UserPage";
import UserProfile from "@/page/AccountPage/UserProfile";
import NewUser from "@/page/AccountPage/NewUser";
import NewModule from "@/page/ModulePage/NewModule";
import ModuleViewer from "@/page/ModulePage/ModuleViewer";
import ModuleEditor from "@/page/ModulePage/ModuleEditor";
import LicenceViewer from "@/page/LicencePage/LicenceViewer";
import NewLicence from "@/page/LicencePage/NewLicence";
import LicenceEditor from "@/page/LicencePage/LicenceEditor";
import LicenceDashBoard from "@/page/LicencePage/LicenceDashBoard";
import ClientViewer from "@/page/ClientPage/ClientViewer";
import NewClient from "@/page/ClientPage/NewClient";
import ClientProfile from "@/page/ClientPage/ClientProfile";

Vue.use(VueRouter);

const routes = [{
        path: "/login",
        component: Login
    },
    {
        path: "/user",
        components: {
            default: UserPage
        },
        children: [{
                path: "",
                component: UserViewer
            },
            {
                path: "new",
                component: NewUser
            },
            {
                path: ":id",
                component: UserProfile
            }
        ]
    },
    {
        path: "/module",
        component: UserPage,
        children: [{
                path: "",
                component: ModuleViewer
            },
            {
                path: "new",
                component: NewModule
            },
            {
                path: ":id",
                component: ModuleEditor
            }
        ]
    },
    {
        path: "/licence",
        component: UserPage,
        children: [{
                path: "",
                component: LicenceViewer
            },
            {
                path: "new",
                component: NewLicence
            },
            {
                path: "analysis",
                component: LicenceDashBoard
            },
            {
                path: ":id",
                component: LicenceEditor
            }
        ]
    },
    {
        path: "/client",
        component: UserPage,
        children: [{
                path: "",
                component: ClientViewer
            },
            {
                path: "new",
                component: NewClient
            },
            {
                path: ":id",
                component: ClientProfile
            },
            {
                path: ":id/project",
                component: NewClient
            }
        ]
    },
    {
        path: "*",
        redirect: "/login"
    }
];

export default new VueRouter({
    routes
});
