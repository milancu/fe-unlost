import {StyledMyFolderLayout} from "@/layouts/FolderLayout/MyFolderLayout.style";
import Folder from "@/components/molecules/Folder/Folder";
import {ButtonWrapper, FolderWrapper} from "@/components/molecules/Folder/Folder.style";
import React, {useState} from "react";
import FolderDetail from "@/components/organisms/FolderDetail/FolderDetail";
import CreateFolder from "@/components/atoms/Buttons/CreateFolder";
import {useRouter} from "next/router";
import CreateFolderModal from "@/components/organisms/Modal/CreateFolder";

const folders = [
    {
        link: "/soubory",
        name: "Smlouvy",
        color: "#36A9DA"
    },
    {
        link: "/soubory",
        name: "Smlouvy",
        color: "#36A9DA"
    },
    {
        link: "/soubory",
        name: "Smlouvy",
        color: "#36A9DA"
    }, {
        link: "/soubory",
        name: "Smlouvy",
        color: "#36A9DA"
    }, {
        link: "/soubory",
        name: "Smlouvy",
        color: "#36A9DA"
    }, {
        link: "/soubory",
        name: "Smlouvy",
        color: "#36A9DA"
    },
    {
        link: "/soubory",
        name: "Smlouvy",
        color: "#36A9DA"
    },
    {
        link: "/soubory",
        name: "Smlouvy",
        color: "#36A9DA"
    },


]

interface FolderProps {
    data: any
}

const FolderLayout: React.FC<FolderProps> = ({data}) => {
    const router = useRouter()
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    const [selectedFolder, setSelected] = useState(data && data[0])

    const handleClickFolder = (index:number) => {
        setSelected(data[index])
    }

    return (
        <StyledMyFolderLayout>
            {isModalOpen && <CreateFolderModal onClick={() => handleModal()}/>}
            <div>
                <ButtonWrapper>
                    <CreateFolder handleModal={() => handleModal()}/>
                </ButtonWrapper>
                <FolderWrapper>
                    {data && data.map((folder: any, index: number) => {
                        return (
                            <Folder link={router.pathname + "/soubory/" + folder.id} name={folder.name} key={index} onSelect={handleClickFolder} index={index}/>
                        )
                    })}
                </FolderWrapper>
            </div>
            <FolderDetail selectedFolder={selectedFolder}/>
        </StyledMyFolderLayout>
    )
}

export default FolderLayout