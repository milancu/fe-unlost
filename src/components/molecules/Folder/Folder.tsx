import React from "react";
import arrowLink from "@/static/svg/icons/arrowCircle.svg"
import Image from "next/image";
import moreIcon from "@/static/svg/icons/3dot.svg"
import {StyledFlexWrapper, StyledFolder, StyledLink, Wrapper} from "@/components/molecules/Folder/Folder.style";

interface FolderProps {
    link: string,
    name: string,
    onSelect: (index: number) => void,
    index: number
}

const Folder: React.FC<FolderProps> = ({link, name, onSelect, index}) => {
    return (
        <StyledFolder>
            <svg style={{position: "absolute"}} xmlns="http://www.w3.org/2000/svg" width="208" height="151"
                 fill="none"
                 viewBox="0 0 208 151">
                <path fill={"#5a6e8c"}
                      d="M207.377 35.103c0-8.284-6.716-15-15-15h-64.803c-2.303 0-4.576-.53-6.641-1.55L88.47 2.526a15 15 0 0 0-6.64-1.55H15c-8.284 0-15 6.716-15 15V135.94c0 8.285 6.716 15 15 15h177.377c8.284 0 15-6.715 15-15V35.103Z"/>
            </svg>
            <Wrapper style={{zIndex: 999, position: "relative"}}>
                <StyledFlexWrapper>
                    {name} <Image src={moreIcon} alt={'icon'} onClick={() => onSelect(index)}
                                  style={{cursor: "pointer"}}/>
                </StyledFlexWrapper>
                <StyledLink href={link}>
                    <Image src={arrowLink} alt={'icon'}/>
                </StyledLink>
            </Wrapper>
        </StyledFolder>
    )
}

export default Folder