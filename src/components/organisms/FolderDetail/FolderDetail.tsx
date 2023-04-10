import {
    BottomContent, ButtonWrapper, FolderSchemaWrapper,
    Row,
    StyledFolderDetail,
    TopContent
} from "@/components/organisms/FolderDetail/FolderDetail.style";
import editIcon from "@/static/svg/icons/edit.svg"
import Image from "next/image";
import AddUser from "@/components/atoms/Buttons/AddUser";
import React from "react";
import DeleteButton from "@/components/atoms/Buttons/DeleteButton";
import FolderSchema from "@/components/molecules/FolderSchema/FolderSchema";

const schema = [
    {name:"Typ smlouvy"},
    {name:"Typ smlouvy"},
    {name:"Typ smlouvy"},
    {name:"Typ smlouvy"},
    {name:"Typ smlouvy"},
    {name:"Typ smlouvy"},
    {name:"Typ smlouvy"},
]

const FolderDetail = () => {
    return (
        <StyledFolderDetail>
            <TopContent>
                <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                    <h1 style={{fontWeight: "600px", fontSize: "24px"}}>Smlouvy</h1>
                    <Image src={editIcon} alt={''}></Image>
                </div>
                <Row>
                    <p>19 souborů</p>
                </Row>
                <Row>
                    <p>Typ složky:</p>
                    <p>Sdílený</p>
                </Row>
                <Row>
                    <p>Datum vytvoření:</p>
                    <p>13.02.2023</p>
                </Row>
                <Row>
                    <p>Vytvořil uživatel:</p>
                    <p>Milan Cu</p>
                </Row>
                <Row>
                    <p>Barva složky:</p>
                    <input type={"color"}/>
                </Row>
                <Row>
                    <p>Uživatelé:</p>
                    <p>Uživatelé:</p>
                </Row>
                <ButtonWrapper>
                    <AddUser/>
                    <DeleteButton text={"Odstranit složku"}/>
                </ButtonWrapper>

            </TopContent>
            <hr style={{width: "100%", border: "1.2px solid rgba(255, 255, 255, 0.2)"}}/>
            <BottomContent>
                <h1 style={{fontWeight: "600px", fontSize: "24px", marginTop:"1rem"}}>Schéma složky:</h1>
                <FolderSchemaWrapper>
                    {schema.map((s, index)=>{
                        return(
                            <FolderSchema name={s.name} key={index}/>
                        )
                    })}
                </FolderSchemaWrapper>
            </BottomContent>
        </StyledFolderDetail>
    )
}

export default FolderDetail