import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { useDispatch } from 'react-redux';
import { fetchUploadFile } from '../../redux/slices/uploadFile';
import GlobalSvgSelector from '../GlobalSvgSelector';
import s from './index.module.scss'
import { File } from "../../@types"
import { useAppDispatch } from '../../redux/store';

const MyDropzone = () => {
    const [file, setFile] = useState<File>()
    const dispatch = useAppDispatch()

    const handleUpload = async () => {
        const data = JSON.stringify(file)

        // const formData = new FormData()
        // formData.append('file', data, '')

        
        console.log(1111);
        
        
    }

    const onDrop = useCallback((acceptedFiles: any) => {
        //console.log(acceptedFiles);
        if (acceptedFiles) {
            setFile(acceptedFiles[0])
        } 
        if (file) {
            dispatch(fetchUploadFile(file))
        }
    }, [])

    console.log(file);
    
    
    
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} accept='image/*, .png, .jpg'
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