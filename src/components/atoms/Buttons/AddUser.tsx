import {
    ButtonWrapper,
    InputWrapper,
    StyledInputAddUser,
    StyledOutlineButton
} from "@/components/atoms/Buttons/Button.style";
import addUser from "@/static/svg/icons/addUser.svg"
import Image from "next/image";
import React, {useState} from "react";
import PrimaryButton from "@/components/atoms/Buttons/PrimaryButton";

interface AddUserProps {
    onClick: () => void
    onChange:(email:String)=>void
}

const AddUser: React.FC<AddUserProps> = ({onClick, onChange}) => {
    const [addUserClick, setAddUser] = useState(false)

    const handleClick = () => {
        setAddUser(!addUserClick)
    }

    return (
        <div style={{position: "relative"}}>
            <StyledOutlineButton onClick={handleClick}>
                <Image src={addUser} alt={'icon'}/>
                Přidat uživatele
            </StyledOutlineButton>
            {addUserClick &&
                <InputWrapper>
                    <StyledInputAddUser placeholder={"user@email.cz"} onChange={e=>onChange(e.target.value)}/>
                    <ButtonWrapper>
                        <PrimaryButton text={"Přidat"} onClick={onClick}/>
                    </ButtonWrapper>
                </InputWrapper>
            }
        </div>

    )
}

export default AddUser