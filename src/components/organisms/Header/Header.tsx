import React from "react";
import {HeaderWrapper, StyledHeader, Wrapper} from "@/components/organisms/Header/Header.style";
import archiveLogo from "@/static/svg/archive_logo.svg"
import Image from "next/image";
import SearchField from "@/components/molecules/SearchField/SearchField";
import ImportButton from "@/components/atoms/Buttons/ImportButton";

interface HeaderProps {
    header: string
}

const Header: React.FC<HeaderProps> = ({header}) => {
    return (
        <StyledHeader>
            <HeaderWrapper>
                <Wrapper>
                    <Image src={archiveLogo} alt={'logo'}/>
                    <h1>{header}</h1>
                </Wrapper>
                <SearchField/>
                <ImportButton/>
            </HeaderWrapper>
        </StyledHeader>
    )
}

export default Header