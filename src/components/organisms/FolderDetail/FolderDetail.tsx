import {
    BottomContent, ButtonAddLabelWrapper,
    ButtonWrapper,
    FolderSchemaWrapper,
    ProfileImgWrapper,
    Row,
    StyledFolderDetail,
    TopContent
} from "@/components/organisms/FolderDetail/FolderDetail.style";
import editIcon from "@/static/svg/icons/edit.svg"
import Image from "next/image";
import AddUser from "@/components/atoms/Buttons/AddUser";
import React, {useEffect, useState} from "react";
import DeleteButton from "@/components/atoms/Buttons/DeleteButton";
import FolderSchema from "@/components/molecules/FolderSchema/FolderSchema";
import {useMutation, useQuery} from "@apollo/client";
import {GET_SCHEMA, GET_USER_BY_ID, SHARE_FOLDER, UPDATE_SCHEMA} from "@/graphql/types";
import client from "@/utils/ApolloClient";
import PrimaryButton from "@/components/atoms/Buttons/PrimaryButton";

interface Folder {
    selectedFolder: any
}

const FolderDetail: React.FC<Folder> = ({selectedFolder}) => {

    if (selectedFolder == null) {
        return <></>
    }

    const {loading, error, data} = useQuery(GET_USER_BY_ID, {
        variables: {id: selectedFolder.createBy},
    });
    const [updateSchemaMutation, {loading: updateLoading, error: updateSchemaError}] = useMutation(UPDATE_SCHEMA);

    const [imgProfiles, setImgProfiles] = useState<any>([])
    const [email, setEmail] = useState<String>("")
    const [labels, setLabels] = useState<any>([])


    const [addUserMutation, {
        loading: addUserLoading,
        error: addUserError,
        data: addUserData
    }] = useMutation(SHARE_FOLDER);


    const {
        loading: schemaLoading,
        error: schemaError,
        data: schemaData,
    } = useQuery(GET_SCHEMA, {
        variables: {id: selectedFolder.customSchemaId},
    });


    useEffect(() => {
        if (!loading && !error && data) {
            const folderAccesses = selectedFolder.folderAccesses;
            const userIds = folderAccesses.map((access: any) => access.userId);

            const fetchData = async () => {
                const promises = userIds.map((userId: any) => {
                    return client.query({
                        query: GET_USER_BY_ID,
                        variables: {id: userId},
                    });
                });
                const results = await Promise.all(promises);
                return results.map((result) => result.data.getUser).map(u => u.imageUrl)
            };
            fetchData().then((result) => {
                setImgProfiles(result)
            });
        }
    }, [loading, error, data]);

    useEffect(() => {
        if (schemaData != null) {
            const labels = schemaData.getSchema.labels.map((str: any) => {
                const pairs = str.slice(1, -1).split(', ');
                return pairs.reduce((obj: any, pair: any) => {
                    const [key, value] = pair.split('=');
                    obj[key] = value;
                    return obj;
                }, {});
            });
            setLabels(labels)
        }
    }, [schemaData])

    const addUser = () => {
        addUserMutation({variables: {email: email, folderId: selectedFolder.id}}).then((data) => {
                window.location.href = `/sdilene-slozky/soubory/${data.data.addUser.id}`
            }
        ).catch(error => {
            console.error(error)
        });
    }

    const handleAddLabel = () => {
        setLabels([...labels, {id: labels.length, name: ""}])
    }

    const handleChangeValue = (id: number, name: string) => {
        setLabels((prevLabels: any) =>
            prevLabels.map((label: any) =>
                label.id === id ? {...label, name} : label)
        );
    }

    const handleOnDelete = (id: number) => {
        const newLabels = labels.filter((label: any) => label.id !== id);
        setLabels(newLabels);
    }

    const updateLabels = async () => {
        try {
            const {data} = await updateSchemaMutation({variables: {schema: labels, folderId: selectedFolder.id}});
            console.log(data);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(()=>{
        updateLabels()
    },[labels])


    if (loading || imgProfiles.length == 0 || schemaLoading) return <p>Loading...</p>;
    if (error || schemaError) return <p> Error :(</p>;

    return (
        <StyledFolderDetail>
            <TopContent>
                <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                    <h1 style={{fontWeight: "600px", fontSize: "24px"}}>{selectedFolder.name}</h1>
                    <Image src={editIcon} alt={''}></Image>
                </div>
                <Row>
                    <p>{selectedFolder.documentIds.length} souborů</p>
                </Row>
                <Row>
                    <p>Typ složky:</p>
                    <p>{imgProfiles.length == 1 ? "Soukromý" : "Sdílený"}</p>
                </Row>
                <Row>
                    <p>Vytvořil uživatel:</p>
                    <Image src={data.getUser.imageUrl} alt={'icon'} width={40} height={40}
                           style={{outline: "2px solid #5768FF", borderRadius: "30px"}}/>
                </Row>
                <Row>
                    <p>Uživatelé:</p>
                    <ProfileImgWrapper>
                        {imgProfiles.map((img: any, index: number) => {
                            return (
                                <Image key={index} src={img} alt={'icon'} width={40} height={40}
                                       style={{outline: "2px solid #5768FF", borderRadius: "30px"}}/>
                            )
                        })}
                    </ProfileImgWrapper>
                </Row>
                <ButtonWrapper>
                    <AddUser onClick={addUser} onChange={setEmail}/>
                    <DeleteButton text={"Odstranit složku"}/>
                </ButtonWrapper>

            </TopContent>
            <hr style={{width: "100%", border: "1.2px solid rgba(255, 255, 255, 0.2)"}}/>
            <BottomContent>
                <h1 style={{fontWeight: "600px", fontSize: "24px", marginTop: "1rem"}}>Schéma složky:</h1>
                <FolderSchemaWrapper>
                    {labels.map((l: any, index: number) => {
                        return (
                            <FolderSchema label={l} key={index} onChange={handleChangeValue} onDelete={handleOnDelete}
                                          onSave={updateLabels}/>
                        )
                    })}
                </FolderSchemaWrapper>
            </BottomContent>
            <ButtonAddLabelWrapper>
                <PrimaryButton text={"Přidat label"} onClick={() => handleAddLabel()}/>
            </ButtonAddLabelWrapper>
        </StyledFolderDetail>
    )
}

export default FolderDetail