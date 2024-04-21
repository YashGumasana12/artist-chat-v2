// components/ContactList.tsx
import React from 'react';

interface Contact {
    image: any;
    id: string;
    name: string;
    dp: string;
}

interface ContactListProps {
    contacts: Contact[];
    handleClick: (id: string) => void;
}

const ContactList: React.FC<ContactListProps> = ({ contacts, handleClick }) => {
    return (
        <div className="flex flex-col gap-2">
            {contacts.map(contact => (
                <div key={contact.id} className="flex items-center cursor-pointer p-2 rounded-lg hover:bg-gray-100" onClick={() => handleClick(contact.id)}>
                    <img src={`/images/${contact.image}`} alt="Profile" className="w-8 h-8 rounded-full" />
                    <span className="ml-2">{contact.name}</span>
                </div>
            ))}
        </div>
    );
};

export default ContactList;
