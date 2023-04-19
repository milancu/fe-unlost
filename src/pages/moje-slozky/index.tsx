import FolderLayout from "@/layouts/FolderLayout/FolderLayout";
import {useQuery} from "@apollo/client";
import {GET_ALL_FOLDER, GET_ALL_OWNED_FOLDER} from "@/graphql/types";

const MyFolders = () => {

    const {loading, error, data} = useQuery(GET_ALL_OWNED_FOLDER);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :( </p>;


    return (
        <FolderLayout data={data.getAllOwnedFolder}/>
    )
}

export default MyFolders