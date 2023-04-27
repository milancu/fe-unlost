import {StyledFolderSchema, StyledFolderSchemaInput} from "@/components/molecules/FolderSchema/FolderSchema.style";
import React, {useRef, useState} from "react";
import editIcon from "@/static/svg/icons/edit.svg"
import trashIcon from "@/static/svg/icons/trash.svg"
import checkIcon from "@/static/svg/icons/check.svg"
import Image from "next/image";

interface FolderSchema {
    label: any
    onChange: (id: string, name: string) => void
    onSave: () => void
    onDelete: (id: string) => void
}

const FolderSchema: React.FC<FolderSchema> = ({label, onChange, onSave, onDelete}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [hasFocus, setHasFocus] = useState(false);
    const [deleteConfirmed, setDeleteConfirmed] = useState(false);
    const [value, setValue] = useState(label.name)

    const handleDeleteLabel = (id: string) => {
        if (deleteConfirmed) {
            onDelete(id)
            setDeleteConfirmed(false);
        } else {
            setDeleteConfirmed(true);
        }
    };


    const handleClick = () => {
        if (inputRef.current) {
            inputRef.current.disabled = false;
            inputRef.current.focus()
            setHasFocus(true)
        }
    };

    const handleClickSave = () => {
        if (inputRef.current) {
            inputRef.current.disabled = true;
            inputRef.current.blur()
            setHasFocus(false)
        }
        onChange(label.id, value)
    }

    return (
        <StyledFolderSchema>
            <StyledFolderSchemaInput
                type={"text"}
                value={value}
                disabled={label.name.length != 0}
                placeholder={"Zadejte název labelu"}
                ref={inputRef}
                onFocus={()=>setHasFocus(true)}
                onChange={(e) => setValue(e.target.value)}
                autoComplete={"nope"}
            />
            <div>

                {hasFocus ?
                    <Image src={checkIcon} alt={'icon'} onClick={() => {
                        handleClickSave()
                    }
                    }/>
                    :
                    <Image src={editIcon} alt={'icon'} onClick={() => {
                        handleClick()
                    }}/>
                }
                {deleteConfirmed
                    ? <Image src={checkIcon} alt={'icon'} onClick={() => handleDeleteLabel(label.id)}/>

                    : <Image src={trashIcon} alt={'icon'} onClick={() => handleDeleteLabel(label.id)}/>
                }
            </div>
        </StyledFolderSchema>

    )
}

export default FolderSchema