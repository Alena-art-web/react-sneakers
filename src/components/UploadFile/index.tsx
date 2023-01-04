import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { fetchUploadFile } from '../../redux/slices/uploadFile';
import GlobalSvgSelector from '../GlobalSvgSelector';
import s from './index.module.scss'
import { File } from "../../@types"
import { useAppDispatch } from '../../redux/store';
import { fetchUserData, fetchUserGetMe } from '../../redux/slices/auth';

const MyDropzone = () => {
    const dispatch = useAppDispatch()

    const onDrop = useCallback(async (acceptedFiles: any) => {
        
        if (acceptedFiles) {
            console.log(acceptedFiles);

            const formData = new FormData()
            formData.append('image', acceptedFiles[0])
            console.log(formData);
        
            await dispatch(fetchUploadFile(formData))
        } 
    }, [])

    
    
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} accept='image/*, .png, .jpg' name='image'
            />
            {
                isDragActive ?
                    <p>Drop the files here ...</p> :
                    <div className={s.icon_file}>
                        <GlobalSvgSelector id='upload-file' className={s.icon}/>
                    </div>
            }
        </div>
    )
}
export default MyDropzone