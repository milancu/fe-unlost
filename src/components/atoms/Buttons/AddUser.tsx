import {StyledOutlineButton} from "@/components/atoms/Buttons/Button.style";
import addUser from "@/static/svg/icons/addUser.svg"
import Image from "next/image";

const AddUser = () => {
    return (
        <StyledOutlineButton>
            <Image src={addUser} alt={'icon'}/>
            Přidat uživatele
        </StyledOutlineButton>
    )
}

export default AddUser