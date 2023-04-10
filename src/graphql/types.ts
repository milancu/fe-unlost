import {gql} from '@apollo/client';
import {StaticImageData} from "next/image";

export const GET_USER = gql`
    query getUser {
        getCurrentUser {
            lastname,
            firstname,
            imageUrl
        }
    }
`;

export const GET_ALL_FILES = gql`
    query getFiles {
        getAllDocument{
            id
            filename
            imgLink
        }
    }
`;

export const GET_FILE = gql`
    query GetDocument($id: String) {
        getDocument(id: $id) {
            id
            filename
            imgLink
        }
    }
`;

export interface Document {
    id: String
    filename: String,
    storageFilename: String,
    createAt: Date,
    createByUser: String,
    annotations: [Annotation],
    annotatedData: String,
    allTextDescription: String,
    documentStatus: DocumentStatus,
    imgLink: StaticImageData,
    lockByUser: String,
    deleted: Boolean,
    isLocked: Boolean
}

interface Annotation {
    description: String,
    verticesList: [CustomVertex]
}

interface CustomVertex {
    x: Number
    y: Number
}

enum DocumentStatus {
    UPLOADING,
    EXTRACTING,
    READY,
    ERROR
}