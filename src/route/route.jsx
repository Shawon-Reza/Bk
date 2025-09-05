import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import BrandDashboard from "../BrandDashboard/BrandDashboard";
import BDashboard from "../BrandDashboard/Pages/BDashboard";
import MicroInfluencersPage from "../BrandDashboard/Pages/MicroInfluencersPage";
import InfluencerProfile from "../BrandDashboard/Pages/InfluencerProfile";
import BrandSetupPage from "../BrandDashboard/Pages/BrandSetupPage";
import ProposalsPage from "../BrandDashboard/Pages/ProposalsPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
    },
    {
        path: "brand-dashboard",
        element: <BrandDashboard></BrandDashboard>,
        children: [
            {
                path: "",
                element: <BDashboard></BDashboard>
            },
            {
                path: "microinfluencerspage",
                element: <MicroInfluencersPage></MicroInfluencersPage>,
            },
            {
                path: "influencers/:id",
                element: <InfluencerProfile></InfluencerProfile>
            },
            {
                path: "settings",
                element: <BrandSetupPage></BrandSetupPage>
            },
            {
                path: "messages",
                element: <ProposalsPage></ProposalsPage>
            },
        ]

    },

]);


export default router