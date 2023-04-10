import React from "react";
import {
    Circle, CircleProgress, StyledCircle, StyledCircleInner,
    StyledCircleLoadingProcess, StyledSvg
} from "@/components/molecules/CircleLoadingProcess/CircleLoadingProcess.style";

interface CircleLoadingProcessProps {
    type: LoadingType,
    sumFiles: number,
    executing: number
}

export enum LoadingType {
    UPLOADING = "#6FBCE7",
    EXTRACTING = "#DA9000"
}

const CircleLoadingProcess: React.FC<CircleLoadingProcessProps> = ({type, executing, sumFiles}) => {
    const CIRCLE_PERIMETER = 282.6
    const executingProcess = CIRCLE_PERIMETER - CIRCLE_PERIMETER * 100 / sumFiles * executing / 100

    return (
        <StyledCircleLoadingProcess color={type}>
            <Circle>
                <CircleProgress>
                    <p>{executing}/{sumFiles}</p>
                </CircleProgress>
                <StyledSvg xmlns={"http://www.w3.org/2000/svg"} version={"1.1"} width={"100px"} height={"100px"}>
                    <StyledCircleInner cx={50} cy={50} r={45} strokeLinecap={"round"}/>
                    <StyledCircle cx={50} cy={50} r={45} strokeLinecap={"round"} color={type}
                                  executing={executingProcess}/>
                </StyledSvg>
            </Circle>
            {type === LoadingType.UPLOADING ? "Nahrávání" : "Extrahování"}
        </StyledCircleLoadingProcess>
    )
}

export default CircleLoadingProcess