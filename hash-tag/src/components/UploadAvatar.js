import React, {useState, useEffect} from "react";
import Avatar from 'react-avatar-edit';


const UploadAvatar = () => {

    const [src, setSrc] = useState(null);
    const [preview, setPreview] = useState(null);

    const onClose =() => {
        setPreview(null);
    }

    const onCrop = view =>{
        setPreview(view);
    }

    useEffect(() => {
        console.log(preview)
    }, [preview])


        return (
            <div>
                 <Avatar 
                    width={400}
                    height={300}
                    onCrop={onCrop}
                    onClose={onClose}
                    src={src}>
                </Avatar> 
                {preview && <img src={preview} />}  
            </div>
    );
};

export default UploadAvatar;