import DashboardLayout from "@/layouts/DashboardLayout/DashboardLayout";
import {useQuery} from "@apollo/client";
import {GET_ALL_FOLDER, GET_SUM_OF_DOCUMENT_STATUS} from "@/graphql/types";

const Dashboard = () => {

    const {loading, error, data} = useQuery(GET_ALL_FOLDER);
    const {
        loading: documentStatusLoading,
        error: documentStatusError,
        data: documentStatusData
    } = useQuery(GET_SUM_OF_DOCUMENT_STATUS);


    if (loading || documentStatusLoading) return <p>Loading...</p>;
    if (error || documentStatusError) return <p>Error :( </p>;

    return (
        <DashboardLayout folderData={data} documentData={documentStatusData}/>
    )
}

export default Dashboard