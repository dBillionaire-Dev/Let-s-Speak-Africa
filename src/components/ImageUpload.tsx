
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Upload, X } from 'lucide-react';

interface ImageUploadProps {
    onImageSelect: (imageData: string) => void;
    currentImage?: string;
    onClear: () => void;
}

const ImageUpload = ({ onImageSelect, currentImage, onClear }: ImageUploadProps) => {
    const [isUploading, setIsUploading] = useState(false);

    const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        // Check if file is an image
        if (!file.type.startsWith('image/')) {
            alert('Please select an image file');
            return;
        }

        // Check file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
            alert('File size must be less than 5MB');
            return;
        }

        setIsUploading(true);
        try {
            const reader = new FileReader();
            reader.onload = (e) => {
                const result = e.target?.result as string;
                onImageSelect(result);
                setIsUploading(false);
            };
            reader.readAsDataURL(file);
        } catch (error) {
            console.error('Error uploading image:', error);
            alert('Error uploading image. Please try again.');
            setIsUploading(false);
        }
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center gap-4">
                <Input
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden"
                    id="image-upload"
                    disabled={isUploading}
                />
                <label htmlFor="image-upload">
                    <Button
                        type="button"
                        variant="outline"
                        className="flex items-center gap-2 cursor-pointer"
                        disabled={isUploading}
                        asChild
                    >
                        <span>
                            <Upload size={16} />
                            {isUploading ? 'Uploading...' : 'Upload Image'}
                        </span>
                    </Button>
                </label>
                {currentImage && (
                    <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={onClear}
                        className="flex items-center gap-2"
                    >
                        <X size={16} />
                        Clear
                    </Button>
                )}
            </div>

            {currentImage && (
                <div className="mt-4">
                    <img
                        src={currentImage}
                        alt="Preview"
                        className="max-w-full h-48 object-cover rounded-lg border"
                    />
                </div>
            )}
        </div>
    );
};

export default ImageUpload;