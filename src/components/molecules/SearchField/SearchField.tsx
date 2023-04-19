import React, {useEffect, useState} from "react";
import {
    BottomContent,
    ResultContainer, StyledCloseIcon,
    StyledField,
    StyledIcon,
    StyledInput, StyledLink, TopContent
} from "@/components/molecules/SearchField/SearchField.style";
import searchIcon from "@/static/svg/icons/search.svg"
import {useQuery} from "@apollo/client";
import {GET_FOLDER, GET_FOLDER_SCHEMA, GET_SUM_OF_DOCUMENT_STATUS, SEARCH} from "@/graphql/types";
import closeIcon from "@/static/svg/icons/close.svg"
import debounce from "lodash.debounce";

const SearchField = () => {
    const [value, setValue] = useState<string>('')

    const {loading, error, data, refetch} = useQuery(SEARCH, {
        variables: {text: value},
    });

    const {loading: loadingFolder, error: errorFolder, data: dataFolder, refetch: fetchFolder} = useQuery(GET_FOLDER);
    const [files, setFiles] = useState([])
    const [folders, setFolders] = useState([])

    const handleOnChange = (value: string) => {
        setValue(value)
    }

    const debouncedUpdateData = debounce(refetch, 500);

    useEffect(() => {
        debouncedUpdateData()
        if (data && value != "") {
            const files = data.searchFileByText;
            const folders = data.searchFolderByName;
            const updatedFiles: any = [];
            const updatedFolders: any = [];

            setFiles([])
            data.searchFileByText.map((f: any) => f.folderId).forEach((l: any, index: number) => {
                fetchFolder({id: l}).then(r => {
                    const updatedFile = {
                        ...files[index],
                        folderName: r.data.getFolder.name,
                    };
                    updatedFiles.push(updatedFile);

                    if (updatedFiles.length === files.length) {
                        setFiles(updatedFiles);
                    }
                });
            });

            setFolders([])
            data.searchFolderByName.map((f: any) => f.id).forEach((i: any, index: number) => {
                fetchFolder({id: i}).then(r => {
                    const updatedFolder = {
                        ...folders[index],
                        link: r.data.getFolder.folderType == "OWNER" ? "/moje-slozky/soubory" : "/sdilene-slozky/soubory",
                    };
                    updatedFolders.push(updatedFolder);

                    if (updatedFolders.length === folders.length) {
                        setFolders(updatedFolders);
                    }
                });
            })
        }
    }, [value])

    return (
        <StyledField>
            <StyledIcon src={searchIcon} alt={'icon'} width={24}/>
            <StyledInput placeholder={"Vyhledat soubor, složku, text"} autoComplete={"nope"} value={value}
                         onChange={e => handleOnChange(e.target.value)}/>
            {value != "" && <StyledCloseIcon src={closeIcon} alt={'icon'} width={24} onClick={() => setValue("")}/>}
            {(data && value != "" && (data.searchFileByText.length > 0 || data.searchFolderByName.length > 0)) &&
                <>
                    <ResultContainer>
                        {files.length > 0 &&
                            <TopContent>
                                <h3>Soubory:</h3>
                                {files.map((f: any, index: number) => {
                                    return (
                                        <StyledLink href={`/soubor/${f.id}`} key={index}
                                                    onClick={() => handleOnChange("")}><p>{f.filename}</p>
                                            <p>/{f.folderName}</p>
                                        </StyledLink>
                                    )
                                })}
                            </TopContent>
                        }
                        {folders.length > 0 &&
                            <BottomContent>
                                <h3>Složky:</h3>
                                {folders.map((f: any, index: number) => {
                                    return (
                                        <StyledLink href={`${f.link}/${f.id}`} key={index}
                                                    onClick={() => handleOnChange("")}>{f.name}</StyledLink>
                                    )
                                })}
                            </BottomContent>
                        }
                    </ResultContainer>
                </>
            }
        </StyledField>
    )
}

export default SearchField