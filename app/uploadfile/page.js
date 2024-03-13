"use client"

import React, { useState } from 'react';
import Footer from '@/component/core/Footer';
import Branding from '@/component/core/Branding';
import useAuthHooks from '@/hooks/useAuthHooks';

const UploadPage = () => {
    const {uploadFile, invokeUploadFileSubmitHandler,uploadFileChangeHandler}= useAuthHooks()

    return (
        <div className="container-fluid">
            <div className="m-3">
                <div className="container mt-3">
                    <Branding />
                    <form className="row align-items-end" onSubmit={invokeUploadFileSubmitHandler}>
                        <div className="col-md-10">
                            <div className="row">
                                <div className="col-md-12">
                                    <label>Upload File</label>
                                    <input
                                        type="file"
                                        name="file"
                                        className="form-control"
                                        accept=".xlsx"
                                        required
                                        onChange={uploadFileChangeHandler}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-primary" type="submit">
                                Upload
                            </button>
                        </div>
                    </form>
                    <div className='errorcontainer success-container'>
                        {/* <h1 className="success-container">Success</h1> */}
                        {uploadFile?.error && <p className="success-container">{uploadFile?.error}</p>}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default UploadPage;
