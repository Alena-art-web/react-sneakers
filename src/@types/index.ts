export type Item = {
    _id: string;
    name: string;
    price: number;
    imageUrl: string;
}

export type User = {
    email: string;
    password: string;
    fullName: string;
    avatarUrl:string;

}

export type File = {
    path: string;
    lastModified: number;
    lastModifiedDate: any;
    name: string;
    size: number;
    type: string;
    webkitRelativePath: string;
}

