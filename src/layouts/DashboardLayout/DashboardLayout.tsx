import {StyledDashboardLayout} from "@/layouts/DashboardLayout/DashboardLayout.style";
import DragAndDrop from "@/components/organisms/DragAndDrop/DragAndDrop";
import Workspaces from "@/components/organisms/Workspaces/Workspaces";
import React from "react";
import LastOpenedFiles from "@/components/organisms/LastOpenedFiles/LastOpenedFiles";

const DashboardLayout = () => {
    return (
        <StyledDashboardLayout>
            <div style={{display: "flex", flexDirection: "column", gap: "3rem"}}>
                <Workspaces/>
                <LastOpenedFiles/>
            </div>
            <DragAndDrop/>
        </StyledDashboardLayout>
    )
}

export default DashboardLayout