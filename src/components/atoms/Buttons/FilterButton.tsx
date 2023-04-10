import {StyledFilterButton} from "@/components/atoms/Buttons/Button.style";
import Image from "next/image";
import filterIcon from "@/static/svg/icons/filter.svg"

const FilterButton = () => {
    return (
        <StyledFilterButton>
            <Image src={filterIcon} alt={'icon'}/>
            Nastavení zobrazení
        </StyledFilterButton>
    )
}

export default FilterButton