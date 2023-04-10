import {Header, RightContent, StyledFileLayout} from "@/layouts/FilesLayout/FileLayout.style";
import FilterButton from "@/components/atoms/Buttons/FilterButton";
import React from "react";
import FileDetail from "@/components/organisms/FileDetail/FileDetail";
import FileTable from "@/components/organisms/FileTable/FileTable";

const FileLayout = () => {
    return (
        <StyledFileLayout>
            <RightContent>
                <Header>
                    <h1>
                        Faktury
                    </h1>
                    <FilterButton/>
                </Header>
                <FileTable/>
            </RightContent>
            <FileDetail/>
        </StyledFileLayout>
    )
}

export default FileLayout