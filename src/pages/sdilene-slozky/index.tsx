import FolderLayout from "@/layouts/FolderLayout/FolderLayout";
import {useQuery} from "@apollo/client";
import {GET_ALL_OWNED_FOLDER, GET_ALL_SHARED_FOLDER} from "@/graphql/types";

const SharedFolders = () => {

    const {loading, error, data} = useQuery(GET_ALL_SHARED_FOLDER);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :( </p>;

    return (
        <div>
            <FolderLayout data={data.getAllSharedFolder}/>
        </div>
    )
}

export default SharedFolders