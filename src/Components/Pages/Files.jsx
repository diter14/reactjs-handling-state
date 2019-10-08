import React from 'react'
import withFileUpload from '../HOC/withFileUpload';

const CircleFiles = (props) => {
    return (
        <div className="ed-grid">
            <form action="">
                <input type="file" onChange={props.addFile}/>
            </form>
            <p>Uploaded images</p>
            <div className="ed-grid m-grid-4">
            {
                props.files.map((file, index) => {
                    return (
                        <div className="images" key={index}>
                            <img src={file} alt={`uploaded-${index}`}/>
                        </div>
                    )
                })
            }
            </div>
            
        </div>
    )
}

export default withFileUpload(CircleFiles)