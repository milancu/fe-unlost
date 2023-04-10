import {useRouter} from "next/router";
import {useQuery} from "@apollo/client";
import {Document, GET_ALL_FILES, GET_FILE} from "@/graphql/types";
import Link from "next/link";
import Image from "next/image";

const File = () => {

    const router = useRouter()
    const {id} = router.query


    const {loading, error, data} = useQuery(GET_FILE, {variables: {id}});

    if (loading) return <p>Loading...</p>;
    if (error) return <p>
        Error :(
    </p>;


    return (
        <div style={{background:"#2C2C2F"}}>
            {id}
            {data.getDocument.filename}
            <Image alt={''} src={data.getDocument.imgLink} width={500} height={500}/>
        </div>
    )
}

export default File