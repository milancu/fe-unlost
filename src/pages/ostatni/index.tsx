import {useQuery} from "@apollo/client";
import {GET_FILES, GET_OTHER_FILE} from "@/graphql/types";

const Others = () => {

    const {loading, error, data} = useQuery(GET_OTHER_FILE)

    if (loading) {
        return <div>Loading...</div>
    }

    console.log(data)


    return (
        <div>
            Ostatní soubory
        </div>
    )
}

export default Others