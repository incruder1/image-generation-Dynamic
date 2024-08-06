// Post.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TextInput from '../component/TextInput';
import TextArea from '../component/TextArea';
import ImageUpload from '../component/ImageUpload';
import SubmitButton from '../component/SubmitButton';
import GeneratedImage from '../component/GeneratedImage';

const PostPage = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const [isOn, setIsOn] = useState(true);
    const [errors, setErrors] = useState({ title: '', content: '' });

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
    
        // Check if a file is selected
        if (!file) {
            alert("Please select a file.");
            return;
        }
    
        // Check if the file is a JPG or JPEG
        const isJpg = file.type === "image/jpeg" || file.name.endsWith('.jpg') || file.name.endsWith('.jpeg');
        if (!isJpg) {
            alert("Please upload a JPG or JPEG file.");
            return;
        }
    
        // If the file is valid, set the image
        setImage(file);
    };

    const validateInputs = () => {
        const newErrors = { title: '', content: '' };
        if (title.length > 100) {
            newErrors.title = 'Title should be less than 100 characters';
        }
        if (content.length > 140) {
            newErrors.content = 'Content should be less than 140 characters';
        }
        setErrors(newErrors);
        setIsOn(!newErrors.title && !newErrors.content);
    };

    useEffect(() => {
        validateInputs();
    }, [title, content]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isOn) return;  

        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        if (image) { formData.append('image', image); }

        try {
            const response = await axios.post('https://dynamicimagegeneration.onrender.com/generate-image', formData);
            if (response.statusText !== "OK") {
                throw new Error('Failed to generate OG image');
            }
            setImageUrl(response.data.imageUrl);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = 'og-image.png';  // Specify the filename
        document.body.appendChild(link);
        link.click();  // Programmatically click the link
        document.body.removeChild(link);  // Remove the link from the DOM
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-800 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
                <div className="px-10 py-8 bg-indigo-200">
                    <h1 className='text-2xl font-bold'>Create a Post</h1>
                </div>
                <form onSubmit={handleSubmit} className='px-10 py-8 space-y-4'>
                    <TextInput 
                        label="Post Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        error={errors.title}
                    />
                    <TextArea 
                        label="Post Content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        error={errors.content}
                    />
                    <ImageUpload onChange={handleImageUpload} />
                    <div className='flex justify-center'>
                        <SubmitButton isOn={isOn} />
                    </div>
                </form>
                {imageUrl && (
                    <GeneratedImage imageUrl={imageUrl} onDownload={handleDownload} />
                )}
            </div>
        </div>
    );
};

export default PostPage;