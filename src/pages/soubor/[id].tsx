import {useRouter} from "next/router";
import FileLayout from "@/layouts/FileLayout/FileLayout";
import {useQuery} from "@apollo/client";
import {GET_FILE} from "@/graphql/types";
import {useEffect, useState} from "react";

const File = () => {

    const router = useRouter()
    const {id} = router.query

    const {loading, error, data} = useQuery(GET_FILE, {variables: {id: id}});

    useEffect(() => {
        if (data != null) {
            const lastOpenedFiles = JSON.parse(localStorage.getItem('lastOpenedFiles') || '[]');
            if (!lastOpenedFiles.includes(data.getDocument.id)) {
                lastOpenedFiles.unshift(data.getDocument.id);
                if (lastOpenedFiles.length > 10) {
                    lastOpenedFiles.pop(); // keep only the last ten files
                }
                localStorage.setItem('lastOpenedFiles', JSON.stringify(lastOpenedFiles));
            }
        }
    }, [data])

    if (loading) return <p>Loading...</p>;

    return (
        <FileLayout data={data}/>
    )
}

export default File