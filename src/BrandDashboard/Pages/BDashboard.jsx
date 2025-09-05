import { Outlet } from "react-router-dom";
import { AnalyticsCards } from "../components/AnalyticsCards";
import { BusinessAssets } from "../components/BusinessAssets";
import { BusinessBio } from "../components/BusinessBio";
import { CampaignsSection } from "../components/CampaignsSection";
import { DashboardHeader } from "../components/DashboardHeader";
import { RecentCollaborations } from "../components/RecentCollaborations";
import { Sidebar } from "../components/Sidebar";

export default function BDashboard() {
    return (
        <div className="">

            <div className="flex-1">
                <DashboardHeader />
                <div className="mt-6 space-y-6">
                    <AnalyticsCards />
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 space-y-6">
                            <BusinessBio />
                            <CampaignsSection />
                        </div>
                        <div className="space-y-6">
                            <RecentCollaborations />
                            <BusinessAssets />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
