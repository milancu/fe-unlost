import React, {useState} from "react";
import {HeaderWrapper, StyledHeader, Wrapper} from "@/components/organisms/Header/Header.style";
import archiveLogo from "@/static/svg/archive_logo.svg"
import Image from "next/image";
import SearchField from "@/components/molecules/SearchField/SearchField";
import ImportButton from "@/components/atoms/Buttons/ImportButton";
import UploadFileModal from "@/components/organisms/UploadFileModal/UploadFileModal";
import client from "@/utils/ApolloClient";
import {UPLOAD_FILES} from "@/graphql/types";
import {useSnackbar} from "notistack";

interface HeaderProps {
    header: string
}

const Header: React.FC<HeaderProps> = ({header}) => {

    const handleOnClick = () => {
        navigator.clipboard.writeText(localStorage.getItem('access_token')!!);
        console.log(localStorage.getItem('access_token'))
    }

    const [files, setFile] = useState<FileList>();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [folder, setFolder] = useState<string>("")
    const {enqueueSnackbar, closeSnackbar} = useSnackbar();


    const handleFiled = (files: FileList) => {
        setFile(files)
        setIsModalOpen(true)
    }

    const handleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    const handleFolder = (folder: string) => {
        console.log(folder)
        setFolder(folder)
    }

    const uploadFiles = () => {
        const variables = {
            files: files,
            folderId: folder.toString()
        };

        console.log(folder.toString())
        console.log(files)

        client.mutate({
            mutation: UPLOAD_FILES,
            variables: variables
        }).then(() => {
            handleModal()
            enqueueSnackbar("Soubor úspěšně nahrán", {variant: "success"})
        }).catch(error => {
            console.error("Error uploading files", error);
            handleModal()
            enqueueSnackbar(error, {variant: "error"})
        });
    }

    return (
        <>
            {isModalOpen &&
                <UploadFileModal
                    files={files!!}
                    handleBack={() => handleModal()}
                    upload={() => uploadFiles()}
                    handleFolderId={handleFolder}/>}
            <StyledHeader>
                <HeaderWrapper>
                    <Wrapper>
                        <Image src={archiveLogo} alt={'logo'} onClick={handleOnClick}/>
                        <h1>{header}</h1>
                    </Wrapper>
                    <SearchField/>
                    <ImportButton onUpload={handleFiled}/>
                </HeaderWrapper>
            </StyledHeader>
        </>
    )
}

export default Header