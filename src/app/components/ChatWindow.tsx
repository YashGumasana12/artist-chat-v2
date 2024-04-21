// components/ChatWindow.tsx
import React from 'react';

interface ChatWindowProps {
    messages: string[];
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages }) => {
    return (
        <div className="flex flex-col gap-2 p-4 overflow-y-auto">
            {messages.map((message, index) => (
                <div key={index} className="bg-gray-200 p-2 rounded-lg">
                    {message}
                </div>
            ))}
        </div>
    );
};

export default ChatWindow;
