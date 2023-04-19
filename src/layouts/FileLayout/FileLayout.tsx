import {
    AnnotateLayer,
    ButtonWrapper,
    ContentWrapper,
    Header,
    ImageWrapper,
    LeftContentWrapper,
    StyledFileLayout,
    StyledImage,
    StyledImageLink
} from "@/layouts/FileLayout/FileLayout.style";
import backArrow from "@/static/svg/icons/backArrow.svg"
import addUser from "@/static/svg/icons/addUser.svg"
import link from "@/static/svg/icons/link.svg"
import OutlineButton from "@/components/atoms/Buttons/OutlineButton";
import DeleteButton from "@/components/atoms/Buttons/DeleteButton";
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import {useQuery} from "@apollo/client";
import {GET_FOLDER_SCHEMA} from "@/graphql/types";
import FileViewDetail from "@/components/organisms/FileViewDetail/FileViewDetail";

interface FileLayoutProps {
    data: any
}

interface LabelProps {
    x: number,
    y: number,
    width: number,
    height: number,
    description: string
}

const Annotation: React.FC<LabelProps> = ({x, y, width, height}) => {
    const [mouseOver, setMouseover] = useState(false)

    return (
        <g onMouseOver={() => setMouseover(true)} onMouseOut={() => setMouseover(false)}>
            <rect
                x={x - 5}
                y={y - 5}
                rx={5}
                ry={5}
                width={width + 10}
                height={height + 10}
                fill={'rgba(108,110,217,0.15)'}
                // fillOpacity={0}
                strokeWidth={"2"}
                stroke={'rgba(126,132,224,0.2)'}
                strokeLinejoin={"round"}
                strokeLinecap={"round"}
                strokeDasharray={6}
                strokeDashoffset={1}
                fillOpacity={mouseOver ? 1 : 0}
            >
            </rect>
        </g>
    )
}

const FileLayout: React.FC<FileLayoutProps> = ({data}) => {
    const [labels, setLabels] = useState<any>([])

    const [mouseOn, setMouseOn] = useState(false);
    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    const [annotatedText, setAnnotatedText] = useState("")

    const router = useRouter()
    const file = data.getDocument


    const {
        loading: schemaLoading,
        error: schemaError,
        data: schemaData,
    } = useQuery(GET_FOLDER_SCHEMA, {
        variables: {id: file.folderId},
    });

    useEffect(() => {

        if (schemaData) {
            const labelsData = schemaData.getFolderSchema.labels;

            const objArr = labelsData.map((str: string) => {
                return str.slice(1, -1).split(',').reduce((result: any, item: any) => {
                    let parts = item.split('=');
                    result[parts[0].trim()] = parts[1].trim();
                    return result;
                }, {});
            });
            setLabels(objArr);
        }

    }, [schemaData, schemaError, schemaLoading]);


    const handleOnClick = (e: React.MouseEvent<SVGSVGElement>) => {
        const image = document.getElementById('image')!.getBoundingClientRect();
        const x = e.clientX - image.left;
        const y = e.clientY - image.top;
        setMouseOn(true);
        setStartX(x)
        setStartY(y)
    }

    const check = () => {
        let text = ""
        file.customAnnotations.forEach((a: LabelProps) => {
            if (a.x >= startX && a.y >= startY && a.x + a.width < (startX + width) && a.y + a.height < (startY + height)) {
                text += " " + a.description
            }
        })
        setAnnotatedText(text)
    }

    const drawRect = (e: React.MouseEvent<SVGSVGElement>) => {
        const image = document.getElementById('image')!.getBoundingClientRect();
        const x = e.clientX - image.left;
        const y = e.clientY - image.top;

        const rect: SVGElement = document.querySelector('#rect')!;
        const svg = document.querySelector('#svg')!;


        const width = x - startX;
        const height = y - startY;

        setWidth(width)
        setHeight(height)

        if (height <= 0 || width <= 0) {
            if (startX - x >= 0 && startY - y >= 0) {
                rect.setAttribute('x', String(x));
                rect.setAttribute('y', String(y));
                rect.setAttribute('rx', "5");
                rect.setAttribute('ry', "5");
                rect.setAttribute('width', String(startX - x));
                rect.setAttribute('height', String(startY - y));
                rect.style.fill = "rgba(88,101,231,0.29)";
                rect.style.stroke = "#5865e7";
                rect.style.strokeWidth = "3";
                svg.appendChild(rect);
            }
        } else {
            rect.setAttribute('x', String(startX));
            rect.setAttribute('y', String(startY));
            rect.setAttribute('rx', "5");
            rect.setAttribute('ry', "5");
            rect.setAttribute('width', String(width));
            rect.setAttribute('height', String(height));
            rect.style.fill = "rgba(88,101,231,0.29)";
            rect.style.stroke = "#5865e7";
            rect.style.strokeWidth = "3";
            svg.appendChild(rect);
        }
    }

    if (labels.length == 0) {
        return <div>Loading...</div>
    }

    return (
        <StyledFileLayout>
            <Header>
                <LeftContentWrapper>
                    <StyledImageLink src={backArrow} alt={'icon'} onClick={() => {
                        router.back()
                    }}/>
                    <h1>
                        Moje složky/faktury
                    </h1>
                </LeftContentWrapper>
                <ButtonWrapper>
                    <OutlineButton text={"Sdílet dokument"} img={addUser} onClick={() => console.log("TODO")}/>
                    <OutlineButton text={"Dočasný odkaz"} img={link} onClick={() => console.log("TODO")}/>
                    <DeleteButton text={"Odstranit soubor"}/>
                </ButtonWrapper>
            </Header>
            <ContentWrapper>
                <FileViewDetail labels={labels} file={file} text={annotatedText}/>
                <ImageWrapper>
                    <AnnotateLayer id={"svg"}
                                   onMouseDown={(e) => {
                                       handleOnClick(e)
                                   }}
                                   onMouseUp={(e) => {
                                       setMouseOn(false);
                                       check()
                                   }}
                                   onMouseMove={(e) => {
                                       if (mouseOn) {
                                           drawRect(e)
                                       }
                                   }}
                    >
                        {file.customAnnotations.map((f: LabelProps, index: number) => {
                                return (
                                    <Annotation x={f.x} y={f.y} width={f.width} height={f.height}
                                                description={f.description} key={index}/>
                                )
                            }
                        )}
                        <rect id="rect"></rect>
                    </AnnotateLayer>
                    <StyledImage alt={'screen'} src={file.imgLink} width={850} height={2000} id={"image"}/>
                </ImageWrapper>
            </ContentWrapper>
        </StyledFileLayout>
    )
}

export default FileLayout