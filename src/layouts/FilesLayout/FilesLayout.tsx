import {Header, RightContent, StyledFileLayout} from "@/layouts/FilesLayout/FilesLayout.style";
import FilterButton from "@/components/atoms/Buttons/FilterButton";
import React, {useState} from "react";
import FileDetail from "@/components/organisms/FileDetail/FileDetail";
import FileTable from "@/components/organisms/FileTable/FileTable";

interface Props {
    dataFiles: any
    dataFolder: any
}

const FilesLayout: React.FC<Props> = ({dataFiles, dataFolder}) => {

    const [selectedFile, setSelectedFile] = useState(dataFiles[0])

    const handleSelectedFile = (file: any) => {
        setSelectedFile(file)
    }

    return (
        <StyledFileLayout>
            <RightContent>
                <Header>
                    <h1>
                        {dataFolder.name}
                    </h1>
                    <FilterButton/>
                </Header>
                <FileTable files={dataFiles} onSelect={handleSelectedFile}/>
            </RightContent>
            <FileDetail selectedFile={selectedFile}/>
        </StyledFileLayout>
    )
}

export default FilesLayout