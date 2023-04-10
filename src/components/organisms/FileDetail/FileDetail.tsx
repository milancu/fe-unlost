import {Row, StyledFileDetail} from "@/components/organisms/FileDetail/FileDetail.style";
import OutlineButton from "@/components/atoms/Buttons/OutlineButton";
import addUser from "@/static/svg/icons/addUser.svg";
import link from "@/static/svg/icons/link.svg";
import {ButtonWrapper} from "@/components/organisms/FolderDetail/FolderDetail.style";
import DeleteButton from "@/components/atoms/Buttons/DeleteButton";
import React from "react";

const FileDetail = () => {
    return (
        <StyledFileDetail>
            <h1>
                Pracovní smlouva
            </h1>
            <Row>
                <p>Velikost:</p>
                <p>2MB</p>
            </Row>
            <Row>
                <p>Datum vytvoření:</p>
                <p>13.02.2023</p>
            </Row>
            <Row>
                <p>Datum poslední změny:</p>
                <p>13.02.2023 20:01</p>
            </Row>
            <Row>
                <p>Vytvořil uživatel:</p>
                <p>Milan Cu</p>
            </Row>
            <Row>
                <p>Adresář:</p>
                <p>Moje složky/smlouvy</p>
            </Row>
            <Row>
                <p>Uzamknutý uživatelem:</p>
                <p>Ne</p>
            </Row>
            <ButtonWrapper>
                <OutlineButton text={"Sdílet dokument"} img={addUser}/>
                <OutlineButton text={"Dočasný odkaz"} img={link}/>
            </ButtonWrapper>
            <div style={{
                display: "flex",
                justifyContent: "end",
                marginTop:"3rem"
            }}>
                <DeleteButton text={"Odstranit soubor"}/>
            </div>
        </StyledFileDetail>
    )
}

export default FileDetail