import React, { useState } from 'react';
import { BsStars } from "react-icons/bs";
import { color, colorBgClass } from '../theme/theme';
import { TbSend } from "react-icons/tb";
import '../styles/styles.musicBtn.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ChatMessage: React.FC<{ message: string, sender: string, dp: string }> = ({ message, sender, dp }) => {
  return (
    <div className={sender === 'user' ? 'flex justify-end mb-2' : 'flex justify-start mb-2'}>
      <div className="flex items-center">
        {sender !== 'user' && <img className="w-10 h-10 rounded-full mr-2" src={dp} alt="DP" />}
        <p className={`bg-gray-200 rounded-xl inline-block p-2 shadow-md ${sender === 'user' ? 'ml-2' : 'mr-2'}`}>
          {message}
        </p>
        {sender === 'user' && <img className="w-10 h-10 rounded-full ml-2" src={dp} alt="DP" />}
      </div>
    </div>
  );
};

const ChatBox: React.FC<{ chat: { name: string, image: string }, onClose: () => void }> = ({ chat, onClose }) => {
  const [messages, setMessages] = useState<{ message: string, sender: string }[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleOpenModal = () => setShowModal(true); // Open modal function

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      // Add user message
      setMessages(prevMessages => [...prevMessages, { message: newMessage, sender: 'user' }]);
      // After a timeout, add bot message
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, { message: 'Hello! How can I help you?', sender: 'other' }]);
      }, 1000);
      // Clear input
      setNewMessage('');
    }
  };

  return (
    <>
      <div className="h-screen w-full grid grid-rows-[10%,78%,7%] gap-4">
        {/* Header (Occupies 10%) */}
        <div className="bg-white rounded-lg shadow-md rounded-t-lg p-4">
          <div className="flex items-center mb-2">
            <img className="w-14 h-14 rounded-full mr-2" src={chat.image} alt={chat.name} />
            <p className="font-semibold">{chat.name}</p>
          </div>
        </div>

        {/* Chat Screen (Occupies 80%) */}
        <div className="overflow-y-scroll rounded-lg shadow-md scrollbar-hide">
          {messages.map((msg, index) => (
            <ChatMessage key={index} message={msg.message} sender={msg.sender} dp={msg.sender === 'user' ? '/images/dp.png' : chat.image} />
          ))}
        </div>

        {/* Footer (Send Message Section) (Occupies 5%) */}
        <div className="flex items-center justify-between border rounded-lg bg-white shadow-md p-3">
          <button className="text-gray-500 hover:text-gray-700" onClick={handleOpenModal}>
            <BsStars className="h-6 w-6" style={{ color: color.svg }} />
          </button>
          <input
            type="text"
            placeholder="Write messages..."
            className="flex-1 text-gray-700 placeholder-gray-500 outline-none mx-4 font-bold"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button className={`${colorBgClass.bg} text-white p-3 rounded-lg`} onClick={handleSendMessage}>
            <span className="sr-only">Send message</span>
            <TbSend style={{ color: 'white' }} />
          </button>
        </div>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ChatBox;
