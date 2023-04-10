import {useRouter} from "next/router";
import {useQuery} from "@apollo/client";
import {GET_ALL_FILES, GET_USER} from "@/graphql/types";

const Index = () => {
    const router = useRouter();
    const accessToken = router.query.AccessToken;
    console.log(accessToken)
    if (accessToken != null) {
        if (typeof accessToken === "string") {
            localStorage.setItem("access_token", accessToken)
        }

        const {data} = useQuery(GET_USER);
        if (data != null) {
            localStorage.setItem("name", data.getCurrentUser.lastname)
            localStorage.setItem("profileImg", data.getCurrentUser.imageUrl)
        }


        window.location.href = "/";

    }
}

export default Index