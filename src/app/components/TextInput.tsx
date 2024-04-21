// components/TextInput.tsx
import React, { useState } from 'react';

interface TextInputProps {
    sendMessage: (message: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ sendMessage }) => {
    const [message, setMessage] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    const handleSend = () => {
        if (message.trim() !== '') {
            sendMessage(message);
            setMessage('');
        }
    };

    return (
        <div className="flex items-center p-4 border-t border-gray-300">
            <input type="text" value={message} onChange={handleChange} className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" />
            <button onClick={handleSend} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Send</button>
        </div>
    );
};

export default TextInput;
