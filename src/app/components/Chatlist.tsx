import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import '../styles/styles.input.css';
import { color, colorBgClass, colorClass } from '../theme/theme';

interface Chat {
  name: string;
  image: string;
}

interface ChatListProps {
  chats: Chat[];
  onChatSelect: (chat: Chat) => void;
}

const ChatList: React.FC<ChatListProps> = ({ chats, onChatSelect }) => {
  // const [selectedChatIndex, setSelectedChatIndex] = useState(-1);

  return (
    <div className="grid  h-screen">
      <div className={`flex flex-col justify-center py-5 px-5 gap-y-6 bg-[#F5F5F7] shadow-md rounded-md overflow-hidden`}>
        <button className='text-center mx-auto bg-white p-2 rounded-full'>
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${colorClass.svg}`} viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
        <div className="input-container text-center mx-auto">
          <input type="text" name="text" className="input" placeholder="Search..." />
          <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24" className="icon"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <rect fill="white" height="24" width="24"></rect> <path fill="" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM9 11.5C9 10.1193 10.1193 9 11.5 9C12.8807 9 14 10.1193 14 11.5C14 12.8807 12.8807 14 11.5 14C10.1193 14 9 12.8807 9 11.5ZM11.5 7C9.01472 7 7 9.01472 7 11.5C7 13.9853 9.01472 16 11.5 16C12.3805 16 13.202 15.7471 13.8957 15.31L15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L15.31 13.8957C15.7471 13.202 16 12.3805 16 11.5C16 9.01472 13.9853 7 11.5 7Z" clip-rule="evenodd" fill-rule="evenodd"></path> </g></svg>
        </div>
        <div className="overflow-y-auto flex-grow scrollbar-hide flex flex-col gap-y-2 bg-white rounded-lg p-2">
          {chats.map((chat, index) => (
            <motion.div
              key={index}
              // className={`flex flex-col  cursor-pointer transition duration-200 ease-out transform hover:scale-105 ${index === selectedChatIndex ? 'bg-white shadow-md' : ''}`}
              className={`py-3 px-3 rounded-lg text-[#010019] hover:bg-[#010019] hover:text-white`}
              onClick={() => onChatSelect(chat)}
              // onMouseEnter={() => onChatSelect(chat)}
              // onMouseLeave={() => onChatSelect(-1)}
              whileHover={{ scale: 1.2, borderRadius: "8px" }}
              whileTap={{
                scale: 0.8,
                rotate: 40,
                borderRadius: "100%"
              }}
            >
              <img className="w-12 h-12 mx-auto rounded-full " src={chat.image} alt={chat.name} />
              <p className="text-center mt-2 font-semibold text-[12px] ">{chat.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatList;

