import React from "react";
import FilesLayout from "@/layouts/FilesLayout/FilesLayout";
import {useRouter} from "next/router";
import {useQuery} from "@apollo/client";
import {ALL_FILES_IN_FOLDER, GET_FOLDER} from "@/graphql/types";

const Files = () => {

    const router = useRouter()
    const {id} = router.query
    const {
        loading: filesLoading,
        error: filesError,
        data: filesData
    } = useQuery(ALL_FILES_IN_FOLDER, {variables: {id}});
    const {loading: folderLoading, error: folderError, data: folderData} = useQuery(GET_FOLDER, {variables: {id}});

    if (filesLoading || folderLoading) return <p>Loading...</p>;
    if (filesError || folderError) return <p> Error :(</p>;

    return (
        <FilesLayout dataFiles={filesData.getAllDocumentInFolder} dataFolder={folderData.getFolder}/>
    )
}

export default Files