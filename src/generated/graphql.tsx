import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Instant: any;
  UUID: any;
  Upload: any;
};

export type Annotation = {
  __typename?: 'Annotation';
  description: Scalars['String'];
  height: Scalars['Int'];
  width: Scalars['Int'];
  x: Scalars['Int'];
  y: Scalars['Int'];
};

export type AttributeKeyValuePair = {
  __typename?: 'AttributeKeyValuePair';
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type AttributeKeyValuePairInput = {
  key?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type CustomSchema = {
  __typename?: 'CustomSchema';
  id: Scalars['UUID'];
  labels: Array<Maybe<Scalars['String']>>;
};

export type Document = {
  __typename?: 'Document';
  allTextDescription: Scalars['String'];
  annotatedData: Array<Maybe<AttributeKeyValuePair>>;
  createAt: Scalars['Instant'];
  createByUser: Scalars['UUID'];
  customAnnotations: Array<Maybe<Annotation>>;
  deleted: Scalars['Boolean'];
  documentStatus: DocumentStatus;
  filename: Scalars['String'];
  folderId?: Maybe<Scalars['UUID']>;
  id: Scalars['UUID'];
  imgLink: Scalars['String'];
  isLocked: Scalars['Boolean'];
  lockByUser: Scalars['UUID'];
  storageFilename: Scalars['String'];
};

export type DocumentAccess = {
  __typename?: 'DocumentAccess';
  documentId: Scalars['UUID'];
  id: Scalars['UUID'];
  userId: Scalars['UUID'];
};

export enum DocumentStatus {
  Error = 'ERROR',
  Extracting = 'EXTRACTING',
  Ready = 'READY',
  Uploading = 'UPLOADING'
}

export type Folder = {
  __typename?: 'Folder';
  createAt: Scalars['Instant'];
  createBy: Scalars['UUID'];
  customSchemaId?: Maybe<Scalars['UUID']>;
  deleted: Scalars['Boolean'];
  documentIds?: Maybe<Array<Maybe<Scalars['UUID']>>>;
  folderAccesses?: Maybe<Array<Maybe<FolderAccess>>>;
  folderType?: Maybe<FolderAccessType>;
  id: Scalars['UUID'];
  name: Scalars['String'];
};

export type FolderAccess = {
  __typename?: 'FolderAccess';
  accessType?: Maybe<FolderAccessType>;
  folderId: Scalars['UUID'];
  id: Scalars['UUID'];
  userId: Scalars['UUID'];
};

export enum FolderAccessType {
  Owner = 'OWNER',
  Shared = 'SHARED'
}

export type Mutation = {
  __typename?: 'Mutation';
  addDocumentAccess?: Maybe<Document>;
  addUser?: Maybe<Folder>;
  createFolder?: Maybe<Folder>;
  createUser?: Maybe<Scalars['Boolean']>;
  deleteDocument?: Maybe<Scalars['Boolean']>;
  deleteFolder?: Maybe<Scalars['Boolean']>;
  lockDocument?: Maybe<Document>;
  removeFolderAccess?: Maybe<Scalars['Boolean']>;
  renameDocument?: Maybe<Document>;
  unlockDocument?: Maybe<Document>;
  updateAnnotation?: Maybe<Scalars['Boolean']>;
  updateSchema?: Maybe<Folder>;
  uploadImage?: Maybe<Scalars['Boolean']>;
};


export type MutationAddDocumentAccessArgs = {
  documentId?: InputMaybe<Scalars['UUID']>;
  email?: InputMaybe<Scalars['String']>;
};


export type MutationAddUserArgs = {
  email: Scalars['String'];
  folderId: Scalars['UUID'];
};


export type MutationCreateFolderArgs = {
  labels?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name: Scalars['String'];
};


export type MutationDeleteDocumentArgs = {
  documentId?: InputMaybe<Scalars['UUID']>;
};


export type MutationDeleteFolderArgs = {
  folderId?: InputMaybe<Scalars['UUID']>;
};


export type MutationLockDocumentArgs = {
  documentId?: InputMaybe<Scalars['UUID']>;
};


export type MutationRemoveFolderAccessArgs = {
  folderId?: InputMaybe<Scalars['UUID']>;
  userId?: InputMaybe<Scalars['UUID']>;
};


export type MutationRenameDocumentArgs = {
  documentId?: InputMaybe<Scalars['UUID']>;
  newFilename?: InputMaybe<Scalars['String']>;
};


export type MutationUnlockDocumentArgs = {
  documentId?: InputMaybe<Scalars['UUID']>;
};


export type MutationUpdateAnnotationArgs = {
  annotations: Array<InputMaybe<AttributeKeyValuePairInput>>;
  documentId?: InputMaybe<Scalars['UUID']>;
};


export type MutationUpdateSchemaArgs = {
  folderId?: InputMaybe<Scalars['UUID']>;
  schema?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUploadImageArgs = {
  files?: InputMaybe<Array<InputMaybe<Scalars['Upload']>>>;
  folderId?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getAllDocument?: Maybe<Array<Maybe<Document>>>;
  getAllDocumentInFolder?: Maybe<Array<Maybe<Document>>>;
  getAllFolder?: Maybe<Array<Maybe<Folder>>>;
  getAllOtherDocument?: Maybe<Array<Maybe<Document>>>;
  getAllOwnedFolder?: Maybe<Array<Maybe<Folder>>>;
  getAllSharedFolder?: Maybe<Array<Maybe<Folder>>>;
  getCurrentUser: User;
  getDocument?: Maybe<Document>;
  getDocuments?: Maybe<Array<Maybe<Document>>>;
  getFolder?: Maybe<Folder>;
  getFolderSchema?: Maybe<CustomSchema>;
  getSchema?: Maybe<CustomSchema>;
  getShareLink?: Maybe<ShareLink>;
  getSumOfExtractingFile?: Maybe<Scalars['Int']>;
  getSumOfNewFile?: Maybe<Scalars['Int']>;
  getSumOfUploadingFile?: Maybe<Scalars['Int']>;
  getUser: User;
  searchFileByText?: Maybe<Array<Maybe<Document>>>;
  searchFolderByName?: Maybe<Array<Maybe<Folder>>>;
};


export type QueryGetAllDocumentInFolderArgs = {
  folderId?: InputMaybe<Scalars['UUID']>;
};


export type QueryGetDocumentArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryGetDocumentsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryGetFolderArgs = {
  id?: InputMaybe<Scalars['UUID']>;
};


export type QueryGetFolderSchemaArgs = {
  id?: InputMaybe<Scalars['UUID']>;
};


export type QueryGetSchemaArgs = {
  id?: InputMaybe<Scalars['UUID']>;
};


export type QueryGetShareLinkArgs = {
  documentId?: InputMaybe<Scalars['UUID']>;
};


export type QueryGetUserArgs = {
  id?: InputMaybe<Scalars['UUID']>;
};


export type QuerySearchFileByTextArgs = {
  text?: InputMaybe<Scalars['String']>;
};


export type QuerySearchFolderByNameArgs = {
  name?: InputMaybe<Scalars['String']>;
};

export type ShareLink = {
  __typename?: 'ShareLink';
  createAt?: Maybe<Scalars['Instant']>;
  createBy: Scalars['UUID'];
  documentId: Scalars['UUID'];
  id: Scalars['UUID'];
  lifetime: Scalars['Instant'];
  link: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  deleted: Scalars['Boolean'];
  email: Scalars['String'];
  firstname: Scalars['String'];
  id: Scalars['String'];
  imageUrl: Scalars['String'];
  lastname: Scalars['String'];
};

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentUserQuery = { __typename?: 'Query', getCurrentUser: { __typename?: 'User', lastname: string, firstname: string, imageUrl: string } };

export type GetUserQueryVariables = Exact<{
  id?: InputMaybe<Scalars['UUID']>;
}>;


export type GetUserQuery = { __typename?: 'Query', getUser: { __typename?: 'User', lastname: string, firstname: string, imageUrl: string } };

export type GetFilesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFilesQuery = { __typename?: 'Query', getAllDocument?: Array<{ __typename?: 'Document', id: any, filename: string, createByUser: any, imgLink: string, isLocked: boolean, createAt: any, annotatedData: Array<{ __typename?: 'AttributeKeyValuePair', key?: string | null, value?: string | null } | null> } | null> | null };

export type GetDocumentQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
}>;


export type GetDocumentQuery = { __typename?: 'Query', getDocument?: { __typename?: 'Document', id: any, filename: string, imgLink: string, folderId?: any | null, createAt: any, createByUser: any, annotatedData: Array<{ __typename?: 'AttributeKeyValuePair', key?: string | null, value?: string | null } | null>, customAnnotations: Array<{ __typename?: 'Annotation', description: string, x: number, y: number, width: number, height: number } | null> } | null };

export type GetAllFolderQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllFolderQuery = { __typename?: 'Query', getAllOwnedFolder?: Array<{ __typename?: 'Folder', id: any, name: string, documentIds?: Array<any | null> | null, deleted: boolean, createBy: any, customSchemaId?: any | null } | null> | null, getAllSharedFolder?: Array<{ __typename?: 'Folder', id: any, name: string, documentIds?: Array<any | null> | null, deleted: boolean, createBy: any, customSchemaId?: any | null } | null> | null };

export type GetAllFOwnedFolderQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllFOwnedFolderQuery = { __typename?: 'Query', getAllOwnedFolder?: Array<{ __typename?: 'Folder', id: any, name: string, documentIds?: Array<any | null> | null, deleted: boolean, createBy: any, customSchemaId?: any | null, folderAccesses?: Array<{ __typename?: 'FolderAccess', userId: any } | null> | null } | null> | null };

export type GetAllSharedFolderQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllSharedFolderQuery = { __typename?: 'Query', getAllSharedFolder?: Array<{ __typename?: 'Folder', id: any, name: string, documentIds?: Array<any | null> | null, deleted: boolean, createBy: any, customSchemaId?: any | null, folderAccesses?: Array<{ __typename?: 'FolderAccess', userId: any } | null> | null } | null> | null };

export type FolderMutationVariables = Exact<{
  name: Scalars['String'];
  labels?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type FolderMutation = { __typename?: 'Mutation', createFolder?: { __typename?: 'Folder', id: any, folderType?: FolderAccessType | null } | null };

export type SchemaQueryVariables = Exact<{
  id?: InputMaybe<Scalars['UUID']>;
}>;


export type SchemaQuery = { __typename?: 'Query', getSchema?: { __typename?: 'CustomSchema', id: any, labels: Array<string | null> } | null };

export type UploadImageMutationVariables = Exact<{
  files?: InputMaybe<Array<InputMaybe<Scalars['Upload']>> | InputMaybe<Scalars['Upload']>>;
  folderId?: InputMaybe<Scalars['String']>;
}>;


export type UploadImageMutation = { __typename?: 'Mutation', uploadImage?: boolean | null };

export type GetAllDocumentInFolderQueryVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type GetAllDocumentInFolderQuery = { __typename?: 'Query', getAllDocumentInFolder?: Array<{ __typename?: 'Document', filename: string, id: any, imgLink: string, createByUser: any, createAt: any, folderId?: any | null, isLocked: boolean, annotatedData: Array<{ __typename?: 'AttributeKeyValuePair', key?: string | null, value?: string | null } | null> } | null> | null };

export type GetFolderQueryVariables = Exact<{
  id: Scalars['UUID'];
}>;


export type GetFolderQuery = { __typename?: 'Query', getFolder?: { __typename?: 'Folder', id: any, name: string, documentIds?: Array<any | null> | null, deleted: boolean, createBy: any, customSchemaId?: any | null, folderType?: FolderAccessType | null } | null };

export type ShareFolderMutationVariables = Exact<{
  email: Scalars['String'];
  folderId: Scalars['UUID'];
}>;


export type ShareFolderMutation = { __typename?: 'Mutation', addUser?: { __typename?: 'Folder', id: any } | null };

export type GetSumQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSumQuery = { __typename?: 'Query', getSumOfExtractingFile?: number | null, getSumOfUploadingFile?: number | null, getSumOfNewFile?: number | null };

export type GetFolderSchemaQueryVariables = Exact<{
  id?: InputMaybe<Scalars['UUID']>;
}>;


export type GetFolderSchemaQuery = { __typename?: 'Query', getFolderSchema?: { __typename?: 'CustomSchema', id: any, labels: Array<string | null> } | null };

export type UpdateAnnotationMutationVariables = Exact<{
  annotations: Array<InputMaybe<AttributeKeyValuePairInput>> | InputMaybe<AttributeKeyValuePairInput>;
  documentId?: InputMaybe<Scalars['UUID']>;
}>;


export type UpdateAnnotationMutation = { __typename?: 'Mutation', updateAnnotation?: boolean | null };

export type SearchQueryVariables = Exact<{
  text?: InputMaybe<Scalars['String']>;
}>;


export type SearchQuery = { __typename?: 'Query', searchFileByText?: Array<{ __typename?: 'Document', id: any, filename: string, folderId?: any | null } | null> | null, searchFolderByName?: Array<{ __typename?: 'Folder', id: any, name: string, folderType?: FolderAccessType | null } | null> | null };

export type UpdateSchemaMutationVariables = Exact<{
  schema?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
  folderId?: InputMaybe<Scalars['UUID']>;
}>;


export type UpdateSchemaMutation = { __typename?: 'Mutation', updateSchema?: { __typename?: 'Folder', id: any, name: string } | null };

export type AddDocumentAccessMutationVariables = Exact<{
  documentId?: InputMaybe<Scalars['UUID']>;
  email?: InputMaybe<Scalars['String']>;
}>;


export type AddDocumentAccessMutation = { __typename?: 'Mutation', addDocumentAccess?: { __typename?: 'Document', id: any, filename: string } | null };

export type GetFilesByIdQueryVariables = Exact<{
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type GetFilesByIdQuery = { __typename?: 'Query', getDocuments?: Array<{ __typename?: 'Document', id: any, filename: string, imgLink: string, folderId?: any | null, createAt: any, createByUser: any, annotatedData: Array<{ __typename?: 'AttributeKeyValuePair', key?: string | null, value?: string | null } | null> } | null> | null };

export type GetOtherFilesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOtherFilesQuery = { __typename?: 'Query', getAllOtherDocument?: Array<{ __typename?: 'Document', id: any, filename: string, imgLink: string, folderId?: any | null, createAt: any, createByUser: any, annotatedData: Array<{ __typename?: 'AttributeKeyValuePair', key?: string | null, value?: string | null } | null> } | null> | null };

export type GetShareLinkQueryVariables = Exact<{
  documentId?: InputMaybe<Scalars['UUID']>;
}>;


export type GetShareLinkQuery = { __typename?: 'Query', getShareLink?: { __typename?: 'ShareLink', link: string } | null };

export type DeleteFileMutationVariables = Exact<{
  documentId?: InputMaybe<Scalars['UUID']>;
}>;


export type DeleteFileMutation = { __typename?: 'Mutation', deleteDocument?: boolean | null };

export type DeleteFolderMutationVariables = Exact<{
  folderId?: InputMaybe<Scalars['UUID']>;
}>;


export type DeleteFolderMutation = { __typename?: 'Mutation', deleteFolder?: boolean | null };


export const GetCurrentUserDocument = gql`
    query getCurrentUser {
  getCurrentUser {
    lastname
    firstname
    imageUrl
  }
}
    `;

/**
 * __useGetCurrentUserQuery__
 *
 * To run a query within a React component, call `useGetCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<GetCurrentUserQuery, GetCurrentUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(GetCurrentUserDocument, options);
      }
export function useGetCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCurrentUserQuery, GetCurrentUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(GetCurrentUserDocument, options);
        }
export type GetCurrentUserQueryHookResult = ReturnType<typeof useGetCurrentUserQuery>;
export type GetCurrentUserLazyQueryHookResult = ReturnType<typeof useGetCurrentUserLazyQuery>;
export type GetCurrentUserQueryResult = Apollo.QueryResult<GetCurrentUserQuery, GetCurrentUserQueryVariables>;
export const GetUserDocument = gql`
    query getUser($id: UUID) {
  getUser(id: $id) {
    lastname
    firstname
    imageUrl
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions?: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const GetFilesDocument = gql`
    query getFiles {
  getAllDocument {
    id
    filename
    createByUser
    imgLink
    annotatedData {
      key
      value
    }
    isLocked
    createAt
  }
}
    `;

/**
 * __useGetFilesQuery__
 *
 * To run a query within a React component, call `useGetFilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFilesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFilesQuery(baseOptions?: Apollo.QueryHookOptions<GetFilesQuery, GetFilesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFilesQuery, GetFilesQueryVariables>(GetFilesDocument, options);
      }
export function useGetFilesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFilesQuery, GetFilesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFilesQuery, GetFilesQueryVariables>(GetFilesDocument, options);
        }
export type GetFilesQueryHookResult = ReturnType<typeof useGetFilesQuery>;
export type GetFilesLazyQueryHookResult = ReturnType<typeof useGetFilesLazyQuery>;
export type GetFilesQueryResult = Apollo.QueryResult<GetFilesQuery, GetFilesQueryVariables>;
export const GetDocumentDocument = gql`
    query GetDocument($id: String) {
  getDocument(id: $id) {
    id
    filename
    imgLink
    folderId
    createAt
    createByUser
    annotatedData {
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

/**
 * __useGetDocumentQuery__
 *
 * To run a query within a React component, call `useGetDocumentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDocumentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDocumentQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetDocumentQuery(baseOptions?: Apollo.QueryHookOptions<GetDocumentQuery, GetDocumentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDocumentQuery, GetDocumentQueryVariables>(GetDocumentDocument, options);
      }
export function useGetDocumentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDocumentQuery, GetDocumentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDocumentQuery, GetDocumentQueryVariables>(GetDocumentDocument, options);
        }
export type GetDocumentQueryHookResult = ReturnType<typeof useGetDocumentQuery>;
export type GetDocumentLazyQueryHookResult = ReturnType<typeof useGetDocumentLazyQuery>;
export type GetDocumentQueryResult = Apollo.QueryResult<GetDocumentQuery, GetDocumentQueryVariables>;
export const GetAllFolderDocument = gql`
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
    `;

/**
 * __useGetAllFolderQuery__
 *
 * To run a query within a React component, call `useGetAllFolderQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllFolderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllFolderQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllFolderQuery(baseOptions?: Apollo.QueryHookOptions<GetAllFolderQuery, GetAllFolderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllFolderQuery, GetAllFolderQueryVariables>(GetAllFolderDocument, options);
      }
export function useGetAllFolderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllFolderQuery, GetAllFolderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllFolderQuery, GetAllFolderQueryVariables>(GetAllFolderDocument, options);
        }
export type GetAllFolderQueryHookResult = ReturnType<typeof useGetAllFolderQuery>;
export type GetAllFolderLazyQueryHookResult = ReturnType<typeof useGetAllFolderLazyQuery>;
export type GetAllFolderQueryResult = Apollo.QueryResult<GetAllFolderQuery, GetAllFolderQueryVariables>;
export const GetAllFOwnedFolderDocument = gql`
    query GetAllFOwnedFolder {
  getAllOwnedFolder {
    id
    name
    documentIds
    deleted
    createBy
    customSchemaId
    folderAccesses {
      userId
    }
  }
}
    `;

/**
 * __useGetAllFOwnedFolderQuery__
 *
 * To run a query within a React component, call `useGetAllFOwnedFolderQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllFOwnedFolderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllFOwnedFolderQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllFOwnedFolderQuery(baseOptions?: Apollo.QueryHookOptions<GetAllFOwnedFolderQuery, GetAllFOwnedFolderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllFOwnedFolderQuery, GetAllFOwnedFolderQueryVariables>(GetAllFOwnedFolderDocument, options);
      }
export function useGetAllFOwnedFolderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllFOwnedFolderQuery, GetAllFOwnedFolderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllFOwnedFolderQuery, GetAllFOwnedFolderQueryVariables>(GetAllFOwnedFolderDocument, options);
        }
export type GetAllFOwnedFolderQueryHookResult = ReturnType<typeof useGetAllFOwnedFolderQuery>;
export type GetAllFOwnedFolderLazyQueryHookResult = ReturnType<typeof useGetAllFOwnedFolderLazyQuery>;
export type GetAllFOwnedFolderQueryResult = Apollo.QueryResult<GetAllFOwnedFolderQuery, GetAllFOwnedFolderQueryVariables>;
export const GetAllSharedFolderDocument = gql`
    query GetAllSharedFolder {
  getAllSharedFolder {
    id
    name
    documentIds
    deleted
    createBy
    customSchemaId
    folderAccesses {
      userId
    }
  }
}
    `;

/**
 * __useGetAllSharedFolderQuery__
 *
 * To run a query within a React component, call `useGetAllSharedFolderQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllSharedFolderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllSharedFolderQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllSharedFolderQuery(baseOptions?: Apollo.QueryHookOptions<GetAllSharedFolderQuery, GetAllSharedFolderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllSharedFolderQuery, GetAllSharedFolderQueryVariables>(GetAllSharedFolderDocument, options);
      }
export function useGetAllSharedFolderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllSharedFolderQuery, GetAllSharedFolderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllSharedFolderQuery, GetAllSharedFolderQueryVariables>(GetAllSharedFolderDocument, options);
        }
export type GetAllSharedFolderQueryHookResult = ReturnType<typeof useGetAllSharedFolderQuery>;
export type GetAllSharedFolderLazyQueryHookResult = ReturnType<typeof useGetAllSharedFolderLazyQuery>;
export type GetAllSharedFolderQueryResult = Apollo.QueryResult<GetAllSharedFolderQuery, GetAllSharedFolderQueryVariables>;
export const FolderDocument = gql`
    mutation Folder($name: String!, $labels: [String]) {
  createFolder(name: $name, labels: $labels) {
    id
    folderType
  }
}
    `;
export type FolderMutationFn = Apollo.MutationFunction<FolderMutation, FolderMutationVariables>;

/**
 * __useFolderMutation__
 *
 * To run a mutation, you first call `useFolderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFolderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [folderMutation, { data, loading, error }] = useFolderMutation({
 *   variables: {
 *      name: // value for 'name'
 *      labels: // value for 'labels'
 *   },
 * });
 */
export function useFolderMutation(baseOptions?: Apollo.MutationHookOptions<FolderMutation, FolderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FolderMutation, FolderMutationVariables>(FolderDocument, options);
      }
export type FolderMutationHookResult = ReturnType<typeof useFolderMutation>;
export type FolderMutationResult = Apollo.MutationResult<FolderMutation>;
export type FolderMutationOptions = Apollo.BaseMutationOptions<FolderMutation, FolderMutationVariables>;
export const SchemaDocument = gql`
    query Schema($id: UUID) {
  getSchema(id: $id) {
    id
    labels
  }
}
    `;

/**
 * __useSchemaQuery__
 *
 * To run a query within a React component, call `useSchemaQuery` and pass it any options that fit your needs.
 * When your component renders, `useSchemaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSchemaQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSchemaQuery(baseOptions?: Apollo.QueryHookOptions<SchemaQuery, SchemaQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SchemaQuery, SchemaQueryVariables>(SchemaDocument, options);
      }
export function useSchemaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SchemaQuery, SchemaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SchemaQuery, SchemaQueryVariables>(SchemaDocument, options);
        }
export type SchemaQueryHookResult = ReturnType<typeof useSchemaQuery>;
export type SchemaLazyQueryHookResult = ReturnType<typeof useSchemaLazyQuery>;
export type SchemaQueryResult = Apollo.QueryResult<SchemaQuery, SchemaQueryVariables>;
export const UploadImageDocument = gql`
    mutation uploadImage($files: [Upload], $folderId: String) {
  uploadImage(files: $files, folderId: $folderId)
}
    `;
export type UploadImageMutationFn = Apollo.MutationFunction<UploadImageMutation, UploadImageMutationVariables>;

/**
 * __useUploadImageMutation__
 *
 * To run a mutation, you first call `useUploadImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadImageMutation, { data, loading, error }] = useUploadImageMutation({
 *   variables: {
 *      files: // value for 'files'
 *      folderId: // value for 'folderId'
 *   },
 * });
 */
export function useUploadImageMutation(baseOptions?: Apollo.MutationHookOptions<UploadImageMutation, UploadImageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadImageMutation, UploadImageMutationVariables>(UploadImageDocument, options);
      }
export type UploadImageMutationHookResult = ReturnType<typeof useUploadImageMutation>;
export type UploadImageMutationResult = Apollo.MutationResult<UploadImageMutation>;
export type UploadImageMutationOptions = Apollo.BaseMutationOptions<UploadImageMutation, UploadImageMutationVariables>;
export const GetAllDocumentInFolderDocument = gql`
    query GetAllDocumentInFolder($id: UUID!) {
  getAllDocumentInFolder(folderId: $id) {
    filename
    id
    imgLink
    createByUser
    createAt
    folderId
    isLocked
    annotatedData {
      key
      value
    }
  }
}
    `;

/**
 * __useGetAllDocumentInFolderQuery__
 *
 * To run a query within a React component, call `useGetAllDocumentInFolderQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllDocumentInFolderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllDocumentInFolderQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAllDocumentInFolderQuery(baseOptions: Apollo.QueryHookOptions<GetAllDocumentInFolderQuery, GetAllDocumentInFolderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllDocumentInFolderQuery, GetAllDocumentInFolderQueryVariables>(GetAllDocumentInFolderDocument, options);
      }
export function useGetAllDocumentInFolderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllDocumentInFolderQuery, GetAllDocumentInFolderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllDocumentInFolderQuery, GetAllDocumentInFolderQueryVariables>(GetAllDocumentInFolderDocument, options);
        }
export type GetAllDocumentInFolderQueryHookResult = ReturnType<typeof useGetAllDocumentInFolderQuery>;
export type GetAllDocumentInFolderLazyQueryHookResult = ReturnType<typeof useGetAllDocumentInFolderLazyQuery>;
export type GetAllDocumentInFolderQueryResult = Apollo.QueryResult<GetAllDocumentInFolderQuery, GetAllDocumentInFolderQueryVariables>;
export const GetFolderDocument = gql`
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
    `;

/**
 * __useGetFolderQuery__
 *
 * To run a query within a React component, call `useGetFolderQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFolderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFolderQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetFolderQuery(baseOptions: Apollo.QueryHookOptions<GetFolderQuery, GetFolderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFolderQuery, GetFolderQueryVariables>(GetFolderDocument, options);
      }
export function useGetFolderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFolderQuery, GetFolderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFolderQuery, GetFolderQueryVariables>(GetFolderDocument, options);
        }
export type GetFolderQueryHookResult = ReturnType<typeof useGetFolderQuery>;
export type GetFolderLazyQueryHookResult = ReturnType<typeof useGetFolderLazyQuery>;
export type GetFolderQueryResult = Apollo.QueryResult<GetFolderQuery, GetFolderQueryVariables>;
export const ShareFolderDocument = gql`
    mutation ShareFolder($email: String!, $folderId: UUID!) {
  addUser(email: $email, folderId: $folderId) {
    id
  }
}
    `;
export type ShareFolderMutationFn = Apollo.MutationFunction<ShareFolderMutation, ShareFolderMutationVariables>;

/**
 * __useShareFolderMutation__
 *
 * To run a mutation, you first call `useShareFolderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useShareFolderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [shareFolderMutation, { data, loading, error }] = useShareFolderMutation({
 *   variables: {
 *      email: // value for 'email'
 *      folderId: // value for 'folderId'
 *   },
 * });
 */
export function useShareFolderMutation(baseOptions?: Apollo.MutationHookOptions<ShareFolderMutation, ShareFolderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ShareFolderMutation, ShareFolderMutationVariables>(ShareFolderDocument, options);
      }
export type ShareFolderMutationHookResult = ReturnType<typeof useShareFolderMutation>;
export type ShareFolderMutationResult = Apollo.MutationResult<ShareFolderMutation>;
export type ShareFolderMutationOptions = Apollo.BaseMutationOptions<ShareFolderMutation, ShareFolderMutationVariables>;
export const GetSumDocument = gql`
    query GetSum {
  getSumOfExtractingFile
  getSumOfUploadingFile
  getSumOfNewFile
}
    `;

/**
 * __useGetSumQuery__
 *
 * To run a query within a React component, call `useGetSumQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSumQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSumQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSumQuery(baseOptions?: Apollo.QueryHookOptions<GetSumQuery, GetSumQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSumQuery, GetSumQueryVariables>(GetSumDocument, options);
      }
export function useGetSumLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSumQuery, GetSumQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSumQuery, GetSumQueryVariables>(GetSumDocument, options);
        }
export type GetSumQueryHookResult = ReturnType<typeof useGetSumQuery>;
export type GetSumLazyQueryHookResult = ReturnType<typeof useGetSumLazyQuery>;
export type GetSumQueryResult = Apollo.QueryResult<GetSumQuery, GetSumQueryVariables>;
export const GetFolderSchemaDocument = gql`
    query GetFolderSchema($id: UUID) {
  getFolderSchema(id: $id) {
    id
    labels
  }
}
    `;

/**
 * __useGetFolderSchemaQuery__
 *
 * To run a query within a React component, call `useGetFolderSchemaQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFolderSchemaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFolderSchemaQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetFolderSchemaQuery(baseOptions?: Apollo.QueryHookOptions<GetFolderSchemaQuery, GetFolderSchemaQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFolderSchemaQuery, GetFolderSchemaQueryVariables>(GetFolderSchemaDocument, options);
      }
export function useGetFolderSchemaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFolderSchemaQuery, GetFolderSchemaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFolderSchemaQuery, GetFolderSchemaQueryVariables>(GetFolderSchemaDocument, options);
        }
export type GetFolderSchemaQueryHookResult = ReturnType<typeof useGetFolderSchemaQuery>;
export type GetFolderSchemaLazyQueryHookResult = ReturnType<typeof useGetFolderSchemaLazyQuery>;
export type GetFolderSchemaQueryResult = Apollo.QueryResult<GetFolderSchemaQuery, GetFolderSchemaQueryVariables>;
export const UpdateAnnotationDocument = gql`
    mutation UpdateAnnotation($annotations: [AttributeKeyValuePairInput]!, $documentId: UUID) {
  updateAnnotation(annotations: $annotations, documentId: $documentId)
}
    `;
export type UpdateAnnotationMutationFn = Apollo.MutationFunction<UpdateAnnotationMutation, UpdateAnnotationMutationVariables>;

/**
 * __useUpdateAnnotationMutation__
 *
 * To run a mutation, you first call `useUpdateAnnotationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAnnotationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAnnotationMutation, { data, loading, error }] = useUpdateAnnotationMutation({
 *   variables: {
 *      annotations: // value for 'annotations'
 *      documentId: // value for 'documentId'
 *   },
 * });
 */
export function useUpdateAnnotationMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAnnotationMutation, UpdateAnnotationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAnnotationMutation, UpdateAnnotationMutationVariables>(UpdateAnnotationDocument, options);
      }
export type UpdateAnnotationMutationHookResult = ReturnType<typeof useUpdateAnnotationMutation>;
export type UpdateAnnotationMutationResult = Apollo.MutationResult<UpdateAnnotationMutation>;
export type UpdateAnnotationMutationOptions = Apollo.BaseMutationOptions<UpdateAnnotationMutation, UpdateAnnotationMutationVariables>;
export const SearchDocument = gql`
    query Search($text: String) {
  searchFileByText(text: $text) {
    id
    filename
    folderId
  }
  searchFolderByName(name: $text) {
    id
    name
    folderType
  }
}
    `;

/**
 * __useSearchQuery__
 *
 * To run a query within a React component, call `useSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchQuery({
 *   variables: {
 *      text: // value for 'text'
 *   },
 * });
 */
export function useSearchQuery(baseOptions?: Apollo.QueryHookOptions<SearchQuery, SearchQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchQuery, SearchQueryVariables>(SearchDocument, options);
      }
export function useSearchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchQuery, SearchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchQuery, SearchQueryVariables>(SearchDocument, options);
        }
export type SearchQueryHookResult = ReturnType<typeof useSearchQuery>;
export type SearchLazyQueryHookResult = ReturnType<typeof useSearchLazyQuery>;
export type SearchQueryResult = Apollo.QueryResult<SearchQuery, SearchQueryVariables>;
export const UpdateSchemaDocument = gql`
    mutation UpdateSchema($schema: [String], $folderId: UUID) {
  updateSchema(schema: $schema, folderId: $folderId) {
    id
    name
  }
}
    `;
export type UpdateSchemaMutationFn = Apollo.MutationFunction<UpdateSchemaMutation, UpdateSchemaMutationVariables>;

/**
 * __useUpdateSchemaMutation__
 *
 * To run a mutation, you first call `useUpdateSchemaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSchemaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSchemaMutation, { data, loading, error }] = useUpdateSchemaMutation({
 *   variables: {
 *      schema: // value for 'schema'
 *      folderId: // value for 'folderId'
 *   },
 * });
 */
export function useUpdateSchemaMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSchemaMutation, UpdateSchemaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSchemaMutation, UpdateSchemaMutationVariables>(UpdateSchemaDocument, options);
      }
export type UpdateSchemaMutationHookResult = ReturnType<typeof useUpdateSchemaMutation>;
export type UpdateSchemaMutationResult = Apollo.MutationResult<UpdateSchemaMutation>;
export type UpdateSchemaMutationOptions = Apollo.BaseMutationOptions<UpdateSchemaMutation, UpdateSchemaMutationVariables>;
export const AddDocumentAccessDocument = gql`
    mutation AddDocumentAccess($documentId: UUID, $email: String) {
  addDocumentAccess(documentId: $documentId, email: $email) {
    id
    filename
  }
}
    `;
export type AddDocumentAccessMutationFn = Apollo.MutationFunction<AddDocumentAccessMutation, AddDocumentAccessMutationVariables>;

/**
 * __useAddDocumentAccessMutation__
 *
 * To run a mutation, you first call `useAddDocumentAccessMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddDocumentAccessMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addDocumentAccessMutation, { data, loading, error }] = useAddDocumentAccessMutation({
 *   variables: {
 *      documentId: // value for 'documentId'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useAddDocumentAccessMutation(baseOptions?: Apollo.MutationHookOptions<AddDocumentAccessMutation, AddDocumentAccessMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddDocumentAccessMutation, AddDocumentAccessMutationVariables>(AddDocumentAccessDocument, options);
      }
export type AddDocumentAccessMutationHookResult = ReturnType<typeof useAddDocumentAccessMutation>;
export type AddDocumentAccessMutationResult = Apollo.MutationResult<AddDocumentAccessMutation>;
export type AddDocumentAccessMutationOptions = Apollo.BaseMutationOptions<AddDocumentAccessMutation, AddDocumentAccessMutationVariables>;
export const GetFilesByIdDocument = gql`
    query getFilesByID($ids: [String]) {
  getDocuments(ids: $ids) {
    id
    filename
    imgLink
    folderId
    createAt
    createByUser
    annotatedData {
      key
      value
    }
  }
}
    `;

/**
 * __useGetFilesByIdQuery__
 *
 * To run a query within a React component, call `useGetFilesByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFilesByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFilesByIdQuery({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useGetFilesByIdQuery(baseOptions?: Apollo.QueryHookOptions<GetFilesByIdQuery, GetFilesByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFilesByIdQuery, GetFilesByIdQueryVariables>(GetFilesByIdDocument, options);
      }
export function useGetFilesByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFilesByIdQuery, GetFilesByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFilesByIdQuery, GetFilesByIdQueryVariables>(GetFilesByIdDocument, options);
        }
export type GetFilesByIdQueryHookResult = ReturnType<typeof useGetFilesByIdQuery>;
export type GetFilesByIdLazyQueryHookResult = ReturnType<typeof useGetFilesByIdLazyQuery>;
export type GetFilesByIdQueryResult = Apollo.QueryResult<GetFilesByIdQuery, GetFilesByIdQueryVariables>;
export const GetOtherFilesDocument = gql`
    query getOtherFiles {
  getAllOtherDocument {
    id
    filename
    imgLink
    folderId
    createAt
    createByUser
    annotatedData {
      key
      value
    }
  }
}
    `;

/**
 * __useGetOtherFilesQuery__
 *
 * To run a query within a React component, call `useGetOtherFilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOtherFilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOtherFilesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetOtherFilesQuery(baseOptions?: Apollo.QueryHookOptions<GetOtherFilesQuery, GetOtherFilesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOtherFilesQuery, GetOtherFilesQueryVariables>(GetOtherFilesDocument, options);
      }
export function useGetOtherFilesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOtherFilesQuery, GetOtherFilesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOtherFilesQuery, GetOtherFilesQueryVariables>(GetOtherFilesDocument, options);
        }
export type GetOtherFilesQueryHookResult = ReturnType<typeof useGetOtherFilesQuery>;
export type GetOtherFilesLazyQueryHookResult = ReturnType<typeof useGetOtherFilesLazyQuery>;
export type GetOtherFilesQueryResult = Apollo.QueryResult<GetOtherFilesQuery, GetOtherFilesQueryVariables>;
export const GetShareLinkDocument = gql`
    query GetShareLink($documentId: UUID) {
  getShareLink(documentId: $documentId) {
    link
  }
}
    `;

/**
 * __useGetShareLinkQuery__
 *
 * To run a query within a React component, call `useGetShareLinkQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetShareLinkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetShareLinkQuery({
 *   variables: {
 *      documentId: // value for 'documentId'
 *   },
 * });
 */
export function useGetShareLinkQuery(baseOptions?: Apollo.QueryHookOptions<GetShareLinkQuery, GetShareLinkQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetShareLinkQuery, GetShareLinkQueryVariables>(GetShareLinkDocument, options);
      }
export function useGetShareLinkLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetShareLinkQuery, GetShareLinkQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetShareLinkQuery, GetShareLinkQueryVariables>(GetShareLinkDocument, options);
        }
export type GetShareLinkQueryHookResult = ReturnType<typeof useGetShareLinkQuery>;
export type GetShareLinkLazyQueryHookResult = ReturnType<typeof useGetShareLinkLazyQuery>;
export type GetShareLinkQueryResult = Apollo.QueryResult<GetShareLinkQuery, GetShareLinkQueryVariables>;
export const DeleteFileDocument = gql`
    mutation DeleteFile($documentId: UUID) {
  deleteDocument(documentId: $documentId)
}
    `;
export type DeleteFileMutationFn = Apollo.MutationFunction<DeleteFileMutation, DeleteFileMutationVariables>;

/**
 * __useDeleteFileMutation__
 *
 * To run a mutation, you first call `useDeleteFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFileMutation, { data, loading, error }] = useDeleteFileMutation({
 *   variables: {
 *      documentId: // value for 'documentId'
 *   },
 * });
 */
export function useDeleteFileMutation(baseOptions?: Apollo.MutationHookOptions<DeleteFileMutation, DeleteFileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteFileMutation, DeleteFileMutationVariables>(DeleteFileDocument, options);
      }
export type DeleteFileMutationHookResult = ReturnType<typeof useDeleteFileMutation>;
export type DeleteFileMutationResult = Apollo.MutationResult<DeleteFileMutation>;
export type DeleteFileMutationOptions = Apollo.BaseMutationOptions<DeleteFileMutation, DeleteFileMutationVariables>;
export const DeleteFolderDocument = gql`
    mutation DeleteFolder($folderId: UUID) {
  deleteFolder(folderId: $folderId)
}
    `;
export type DeleteFolderMutationFn = Apollo.MutationFunction<DeleteFolderMutation, DeleteFolderMutationVariables>;

/**
 * __useDeleteFolderMutation__
 *
 * To run a mutation, you first call `useDeleteFolderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFolderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFolderMutation, { data, loading, error }] = useDeleteFolderMutation({
 *   variables: {
 *      folderId: // value for 'folderId'
 *   },
 * });
 */
export function useDeleteFolderMutation(baseOptions?: Apollo.MutationHookOptions<DeleteFolderMutation, DeleteFolderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteFolderMutation, DeleteFolderMutationVariables>(DeleteFolderDocument, options);
      }
export type DeleteFolderMutationHookResult = ReturnType<typeof useDeleteFolderMutation>;
export type DeleteFolderMutationResult = Apollo.MutationResult<DeleteFolderMutation>;
export type DeleteFolderMutationOptions = Apollo.BaseMutationOptions<DeleteFolderMutation, DeleteFolderMutationVariables>;