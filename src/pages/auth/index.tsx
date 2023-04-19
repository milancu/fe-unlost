import {useRouter} from "next/router";
import {HttpLink, useQuery} from "@apollo/client";
import {GET_USER} from "@/graphql/types";
import client from "@/utils/ApolloClient";

const Index = () => {
    const router = useRouter();
    const accessToken = router.query.AccessToken;

    if (accessToken != null) {
        if (typeof accessToken === "string") {
            localStorage.setItem("access_token", accessToken)

            client.setLink(
                new HttpLink({
                    uri: 'http://localhost:8080/graphql',
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                })
            );
        }

        const {data} = useQuery(GET_USER);
        console.log(data)
        if (data && data.getCurrentUser) {
            localStorage.setItem("name", data.getCurrentUser.lastname + " " + data.getCurrentUser.firstname)
            localStorage.setItem("profileImg", data.getCurrentUser.imageUrl)
            window.location.href = "/dashboard";
        }
    }
}

export default Index