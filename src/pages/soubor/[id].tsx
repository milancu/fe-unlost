import {useRouter} from "next/router";
import FileLayout from "@/layouts/FileLayout/FileLayout";
import {useQuery} from "@apollo/client";
import {GET_FILE} from "@/graphql/types";

const File = () => {

    const router = useRouter()
    const {id} = router.query
    const {loading, error, data} = useQuery(GET_FILE, {variables: {id}});

    if (loading) return <p>Loading...</p>;
    if (error) return <p> Error :(</p>;


    return (
        <FileLayout data={data}/>
    )
}

export default File