import React from "react";
import './socialLinks.css';

export default function SocialLinks() {
    return (
        <div className="flex px-14 py-8 justify-center items-center">
            <a href="https://www.instagram.com/maathefoundation" target="_blank" rel="noreferrer" className="flex-1 text-green-800 font-medium text-center hover:text-green-900"><span className="relative link sl-link">Instagram</span></a>
            <svg xmlns="http://www.w3.org/2000/svg" className="flex-1 items-center h-2 w-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <a href="https://www.facebook.com/MAAthefoundation" target="_blank" rel="noreferrer" className="flex-1 text-green-800 font-medium text-center hover:text-green-900"><span className="relative link sl-link">Facebook</span></a>
            <svg xmlns="http://www.w3.org/2000/svg" className="flex-1 items-center h-2 w-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <a href="https://twitter.com/MAAtheNGO" target="_blank" rel="noreferrer" className="flex-1 text-green-800 font-medium text-center hover:text-green-900"><span className="relative link sl-link">Twitter</span></a>
        </div>
    )
}