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

export const GET_USER_BY_ID = gql`
    query getUser($id:UUID) {
        getUser(id:$id) {
            lastname,
            firstname,
            imageUrl
        }
    }
`

export const GET_ALL_FILES = gql`
    query getFiles {
        getAllDocument{
            id
            filename
            createByUser
            imgLink
            annotatedData{
                key
                value
            }
            isLocked
            createAt
        }
    }
`;

export const GET_FILE = gql`
    query GetDocument($id: String) {
        getDocument(id: $id) {
            id
            filename
            imgLink
            folderId
            createAt
            createByUser
            annotatedData{
                key
                value
            }
            customAnnotations {
                description
                x
                y
                width
                height
            }
        }
    }
`;

export const GET_ALL_FOLDER = gql`
    query GetAllFolder {
        getAllOwnedFolder {
            id
            name
            documentIds
            deleted
            createBy
            customSchemaId
            
        }
        getAllSharedFolder {
            id
            name
            documentIds
            deleted
            createBy
            customSchemaId
        }
    }
`

export const GET_ALL_OWNED_FOLDER = gql`
    query GetAllFolder {
        getAllOwnedFolder {
            id
            name
            documentIds
            deleted
            createBy
            customSchemaId
            folderAccesses{
                userId
            }
        }
    }
`

export const GET_ALL_SHARED_FOLDER = gql`
    query GetAllFolder {
        getAllSharedFolder {
            id
            name
            documentIds
            deleted
            createBy
            customSchemaId
            folderAccesses{
                userId
            }
        }
    }
`

export const CREATE_FOLDER = gql`
    mutation Folder($name: String!, $labels:[String]) {
        createFolder(name: $name, labels:$labels){
            id
            folderType
        }
    }
`

export const GET_SCHEMA = gql`
    query Schema($id:UUID){
        getSchema(id:$id){
            id,
            labels
        }
    }
`

export const UPLOAD_FILES=gql`
    mutation uploadImage($files: [Upload], $folderId: String) {
        uploadImage(files: $files, folderId: $folderId)
    }
`

export const ALL_FILES_IN_FOLDER = gql`
    query GetAllDocument($id: UUID!) {
        getAllDocumentInFolder(folderId: $id) {
            filename
            id
            imgLink
            createByUser
            createAt
            folderId
            isLocked
        }
    }
`

export const GET_FOLDER = gql`
    query GetFolder($id: UUID!) {
        getFolder(id: $id) {
            id
            name
            documentIds
            deleted
            createBy
            customSchemaId
            folderType
        }
    }
`

export const SHARE_FOLDER = gql`
    mutation ShareFolder($email:String!, $folderId:UUID!){
        addUser(email:$email, folderId:$folderId){
            id
        }
    }
`

export const GET_SUM_OF_DOCUMENT_STATUS = gql`
    query GetSum{
        getSumOfExtractingFile
        getSumOfUploadingFile
        getSumOfNewFile
    }
`

export const GET_FOLDER_SCHEMA = gql`
    query GetFolderSchema($id:UUID){
        getFolderSchema(id:$id){
            id,
            labels
        }
    }
`

export const UPDATE_ANNOTATION= gql`
    mutation UpdateAnnotation($annotations: [AttributeKeyValuePairInput]!, $documentId: UUID) {
        updateAnnotation(annotations: $annotations, documentId: $documentId)
    }
`

export const SEARCH = gql`
    query Search($text:String){
        searchFileByText(text:$text){
            id
            filename
            folderId
        }
        searchFolderByName(name:$text){
            id
            name
            folderType
        }
    }
`

export const UPDATE_SCHEMA = gql`
    mutation UpdateSchema($schema:[String], $folderId:UUID){
        updateSchema(schema:$schema, folderId:$folderId){
            id
            name
        }
    }
`

export const GET_FILES = gql`
    query getFiles($ids:[String]){
        getDocuments(ids:$ids){
            id
            filename
            imgLink
            folderId
            createAt
            createByUser
            annotatedData{
                key
                value
            }
        }
    }
`

export const GET_OTHER_FILE = gql`
    query getOtherFiles{
        getAllOtherDocument{
            id
            filename
            imgLink
            folderId
            createAt
            createByUser
            annotatedData{
                key
                value
            }
        }
    }
`

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