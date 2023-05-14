import {Header, RightContent, StyledFileLayout} from "@/layouts/FilesLayout/FilesLayout.style";
import FilterButton from "@/components/atoms/Buttons/FilterButton";
import React, {useEffect, useState} from "react";
import FileDetail from "@/components/organisms/FileDetail/FileDetail";
import FileTable from "@/components/organisms/FileTable/FileTable";
import {useQuery} from "@apollo/client";
import {GET_FOLDER_SCHEMA} from "@/graphql/types";

interface Props {
    dataFiles: any
    dataFolder: any
}

const FilesLayout: React.FC<Props> = ({dataFiles, dataFolder}) => {

    const [selectedFile, setSelectedFile] = useState(dataFiles[0])
    const [labels, setLabels] = useState<any>([])

    const handleSelectedFile = (file: any) => {
        setSelectedFile(file)
    }

    const {
        loading: schemaLoading,
        error: schemaError,
        data: schemaData,
    } = useQuery(GET_FOLDER_SCHEMA, {
        variables: {id: dataFolder.id},
    });

    useEffect(() => {
        if (schemaData) {
            const labelsData = schemaData.getFolderSchema.labels;

            const objArr = labelsData.map((str: string) => {
                return str.slice(1, -1).split(',').reduce((result: any, item: any) => {
                    let parts = item.split('=');
                    result[parts[0].trim()] = parts[1].trim();
                    return result;
                }, {});
            });
            setLabels(objArr);
        }

    }, [schemaData, schemaError, schemaLoading]);

    if (schemaLoading || schemaError) return <div>Loading...</div>

    return (
        <StyledFileLayout>
            <RightContent>
                <Header>
                    <h1>
                        {dataFolder.name}
                    </h1>
                </Header>
                <FileTable files={dataFiles} onSelect={handleSelectedFile} labels={labels}/>
            </RightContent>
            <FileDetail selectedFile={selectedFile}/>
        </StyledFileLayout>
    )
}

export default FilesLayout