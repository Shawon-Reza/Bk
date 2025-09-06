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
import Campaign from "../BrandDashboard/Pages/Campaign";
import MessagesPage from "../BrandDashboard/Pages/MessagesPage";
import InfluencerProfilePage from "../BrandDashboard/Pages/InfluencerProfilePage";
import MessagesDashboard from "../BrandDashboard/Pages/MessagesDashboard";
import MessageRequest from "../BrandDashboard/Pages/MessageRequest";
import RequestChatInterfacePage from "../BrandDashboard/Pages/RequestChatInterfacePage";


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
                element: <InfluencerProfilePage></InfluencerProfilePage>,
                children: [
                    {
                        path: '',
                        element: <InfluencerProfile></InfluencerProfile>
                    },
                    {
                        path: "message",
                        element: <MessagesPage></MessagesPage>,
                        
                    },
                    {
                        path: "send-proposal",
                        element: <ProposalsPage></ProposalsPage>,
                    },

                ]

            },
            {
                path: "settings",
                element: <BrandSetupPage></BrandSetupPage>
            },
            {
                path: "messages",
                element: <MessagesDashboard></MessagesDashboard>
            },
            {
                path: "message-request",
                element: <MessageRequest></MessageRequest>
            },
            {
                path: "message-request-permission",
                element: <RequestChatInterfacePage></RequestChatInterfacePage>
            },
            {
                path: "campaigns",
                element: <Campaign></Campaign>
            },

        ]
    },


]);


export default router