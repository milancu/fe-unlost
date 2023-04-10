import {useQuery} from "@apollo/client";
import {Document, GET_ALL_FILES} from "@/graphql/types";
import Image from "next/image";
import Link from "next/link";

const Index = () => {

    const {loading, error, data} = useQuery(GET_ALL_FILES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div>
            {data.getAllDocument.map((document: Document, index: number) => {
                return (
                    <div key={index}>
                        {document.filename}
                        <Link href={`/file/${document.id}`}>OPEN</Link>
                        <Image alt={''} src={document.imgLink} width={500} height={500}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Index