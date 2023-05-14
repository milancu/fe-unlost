import {StyledDashboardLayout} from "@/layouts/DashboardLayout/DashboardLayout.style";
import DragAndDrop from "@/components/organisms/DragAndDrop/DragAndDrop";
import Workspaces from "@/components/organisms/Workspaces/Workspaces";
import React from "react";
import LastOpenedFiles from "@/components/organisms/LastOpenedFiles/LastOpenedFiles";

interface DashboardLayoutProps {
    folderData: any
    documentData: any
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({folderData, documentData}) => {

    return (
        <StyledDashboardLayout>
            <div style={{display: "flex", flexDirection: "column", gap: "3rem"}}>
                <Workspaces data={folderData}/>
                <LastOpenedFiles/>
            </div>
            <DragAndDrop data={documentData}/>
        </StyledDashboardLayout>
    )
}

export default DashboardLayout