// page.tsx
"use client"
import React, { useState } from 'react';
import ChatList from '@/app/components/Chatlist';
import ChatBox from '@/app/components/ChatBox';
import MusicBox from '@/app/components/MusicBox';

const Page: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<{ name: string, image: string } | null>(null);

  const contacts = [
    { id: '1', name: 'person 1', image: '/images/Designer (12).png' },
    { id: '2', name: 'person 2', image: '/images/Designer (7).png' },
    { id: '3', name: 'person 3', image: '/images/Designer (8).png' },
    { id: '4', name: 'person 4', image: '/images/Designer (9).png' },
    { id: '5', name: 'person 5', image: '/images/Designer (10).png' },
    { id: '6', name: 'person 5', image: '/images/Designer (11).png' },
    { id: '7', name: 'person 5', image: '/images/Designer (12).png' },
    { id: '8', name: 'person 5', image: '/images/Designer (7).png' },
  ];
  const defaultChat = contacts[0];

  return (
    <div className="grid grid-cols-10 gap-2">
      <div className="col-span-1">
        <ChatList chats={contacts} onChatSelect={(chat) => setSelectedChat(chat)} />
      </div>
      <div className="col-span-9">
        {selectedChat && <ChatBox chat={selectedChat} onClose={() => setSelectedChat(null)} />}
      </div>
    </div>

  );
};

export default Page;
