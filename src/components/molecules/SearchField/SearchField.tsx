import React from "react";
import {StyledField, StyledIcon, StyledInput} from "@/components/molecules/SearchField/SearchField.style";
import searchIcon from "@/static/svg/icons/search.svg"

const SearchField = () => {
    return (
        <StyledField>
            <StyledIcon src={searchIcon} alt={'icon'} width={24}/>
            <StyledInput placeholder={"Vyhledat soubor, složku, text"} autoComplete={"nope"}/>
        </StyledField>
    )
}

export default SearchField