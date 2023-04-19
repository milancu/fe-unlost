import {
    BottomContentWrapper, Header, InputWrapper,
    Row,
    StyledFileViewDetail, StyledInput, StyledLabel,
    TopContentWrapper
} from "@/components/organisms/FileViewDetail/FileViewDetail.style";
import SecondaryButton from "@/components/atoms/Buttons/SecondaryButton";
import React, {useEffect, useRef, useState} from "react";
import {formatDate} from "@/utils/DateFormatter";
import {useMutation, useQuery} from "@apollo/client";
import {GET_USER_BY_ID, UPDATE_ANNOTATION} from "@/graphql/types";
import Image from "next/image";
import debounce from 'lodash.debounce';

interface FileViewDetailProps {
    file: any,
    labels: any
    text: string
}

const FileViewDetail: React.FC<FileViewDetailProps> = ({file, labels, text}) => {
    const {loading, error, data} = useQuery(GET_USER_BY_ID, {
        variables: {id: file.createByUser},
    });


    const initialValues = labels.reduce((acc: any, curr: any, index: number) => {
        const annotatedValue = file.annotatedData.find((d: any) => d.key.toLowerCase() === curr.name.toLowerCase());
        acc[curr.name] = annotatedValue ? annotatedValue.value : null;
        return acc;
    }, {});


    const arr = Object.entries(initialValues).map(([name, value], index) => ({
        id: (index + 1).toString(),
        key: name,
        value: value,
    }));

    const inputRefs = useRef(labels.map(() => React.createRef<HTMLInputElement>()));
    const [inputIndex, setInputIndex] = useState(0)
    const [values, setValues] = useState(arr.map((x) => x.value));
    const [updateAnnotation, {
        loading: loadingUpdate,
        error: errorUpdate,
        data: dataUpdate
    }] = useMutation(UPDATE_ANNOTATION);

    console.log(values);


    const handleInputChange = (index: number, value: string) => {
        const newValues = [...values];
        newValues[index] = value;
        setValues(newValues);
        debouncedUpdateData();
    };

    const updateData = () => {
        const result = Object.fromEntries(labels.map((label: any, index: number) => [label.name, values[index]]));
        const annotations = Object.entries(result).map(([key, value]) => ({key, value}));

        updateAnnotation({variables: {annotations, documentId: file.id}})
            .then(r => console.log(r))
            .catch(e => console.error(e));
    };

    const debouncedUpdateData = debounce(updateData, 500);


    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            const inputs = inputRefs.current;
            const currentInput = inputs.find((input: any) => input.current?.contains(event.target as Node));

            if (!currentInput) {
                inputs[inputIndex].current?.focus();
            } else {
                const nextInput = inputs[inputIndex].current;
                nextInput?.focus();
            }
            updateData()
        };

        document.addEventListener('click', handleClick, true);

        return () => {
            document.removeEventListener('click', handleClick, true);
        };
    }, [inputIndex]);

    useEffect(() => {
        if (text != "") {
            const newValues = [...values];
            newValues[inputIndex] = text;
            setValues(newValues);
        }
    }, [text])

    useEffect(() => {
        debouncedUpdateData();
    }, [values]);


    if (loading) return <div>Loading...</div>
    if (error) return <div>Error :(</div>


    return (
        <StyledFileViewDetail>
            <TopContentWrapper>
                <Row>
                    <p> Datum vytvoření: </p>
                    <p>{formatDate(file.createAt)}</p>
                </Row>
                <Row>
                    <p> Vytvořil uživatel: </p>
                    <Image src={data.getUser.imageUrl} alt={'icon'} width={40} height={40}
                           style={{outline: "2px solid #5768FF", borderRadius: "30px"}}/>
                </Row>
            </TopContentWrapper>
            <BottomContentWrapper>
                <Header>Schéma</Header>
                <InputWrapper>
                    {labels.map((l: any, index: number) => {
                        return (
                            <StyledLabel key={index}>
                                {l.name}
                                <StyledInput
                                    type={"text"}
                                    name={l.id}
                                    autoComplete={"nope"}
                                    ref={inputRefs.current[index]}
                                    onFocus={() => setInputIndex(index)}
                                    value={values[index] ? String(values[index]) : ""}
                                    onChange={(e) => handleInputChange(index, e.target.value)}
                                />
                            </StyledLabel>
                        )
                    })}
                </InputWrapper>
            </BottomContentWrapper>
        </StyledFileViewDetail>
    )
}

export default FileViewDetail