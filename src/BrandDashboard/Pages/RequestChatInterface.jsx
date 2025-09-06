"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RequestChatInterface = ({
    currentUser = { name: "Sarah Marketing", avatar: "/api/placeholder/32/32" },
    contacts = [], // Receiving the contacts as a prop
    chatRequest = null,
    onAcceptRequest,
    onRejectRequest,
    onSearchContacts,
    onSelectContact,
}) => {
    const [searchTerm, setSearchTerm] = useState("");

    // Default mockContacts data - replace this with props from the backend
    const mockContacts = [
        {
            id: 1,
            name: "Sarah Marketing",
            lastMessage: "Re: Collaboration Inquiry",
            avatar: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            isOnline: true,
            lastSeen: "Active 4m ago",
            hasUnread: false,
        },
        {
            id: 2,
            name: "Creator Admin",
            lastMessage: "Your profile is now live!",
            avatar: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            isOnline: false,
            lastSeen: "2h ago",
            hasUnread: false,
        },
        {
            id: 3,
            name: "Emily Business",
            lastMessage: "Follow up: Tech Gadget Review...",
            avatar: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            isOnline: false,
            lastSeen: "1d ago",
            hasUnread: false,
        },
        {
            id: 4,
            name: "David Creator",
            lastMessage: "Proposal for Fashion...",
            avatar: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            isOnline: true,
            lastSeen: "Active now",
            hasUnread: false,
        },
    ];

    // Default chat request data
    const defaultChatRequest = {
        name: "Market Meetup",
        email: "fashionistaBusiness@gmail.com",
    };

    // Use contacts from props or fallback to mock data
    const contactList = contacts.length > 0 ? contacts : mockContacts;
    const currentRequest = chatRequest || defaultChatRequest;

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        if (onSearchContacts) {
            onSearchContacts(e.target.value);
        }
    };

    const handleAccept = () => {
        if (onAcceptRequest) {
            onAcceptRequest(currentRequest);
        }
    };

    const handleReject = () => {
        if (onRejectRequest) {
            onRejectRequest(currentRequest);
        }
    };
    const navigate = useNavigate()
    return (
        <div className="flex h-screen bg-gray-50">
            {/* Left Sidebar */}
            <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
                {/* Header */}
                <div className="p-4 border-b border-gray-200">
                    {/* Search Bar */}
                    <div className="relative mb-4">
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={handleSearch}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <svg
                            className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>

                    {/* Request Badge */}
                    <div
                        onClick={() => {
                            navigate('/brand-dashboard/message-request')
                        }}
                        className="flex cursor-pointer items-center bg-gray-600 text-white px-3 py-2 rounded-full text-sm w-fit">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>1 request
                    </div>
                </div>

                {/* Contacts List */}
                <div className="flex-1 overflow-y-auto">
                    {contactList.map((contact) => (
                        <div
                            key={contact.id}
                            onClick={() => onSelectContact && onSelectContact(contact)}
                            className="flex items-center p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100"
                        >
                            <img
                                src={contact.avatar || "/placeholder.svg"}
                                alt={contact.name}
                                className="w-10 h-10 rounded-full mr-3 object-cover"
                            />
                            <div className="flex-1 min-w-0">
                                <h3 className="font-medium text-gray-900 truncate">{contact.name}</h3>
                                <p className="text-sm text-gray-500 truncate">{contact.lastMessage}</p>
                            </div>
                            {contact.hasUnread && <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>}
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col">
                {/* Top Header */}
                <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center">
                        <img
                            src={currentUser.avatar || "/placeholder.svg"}
                            alt={currentUser.name}
                            className="w-8 h-8 rounded-full mr-3 object-cover"
                        />
                        <div>
                            <h2 className="font-medium text-gray-900">{currentUser.name}</h2>
                            <p className="text-sm text-gray-500">Active 2 hours</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        {/* Notification Icon */}
                        <div className="relative">
                            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5z" />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M9 11h.01M9 8h.01"
                                />
                            </svg>
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                        </div>
                        {/* Menu */}
                        <button className="text-gray-600 hover:text-gray-800">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Chat Request Content */}
                <div className="flex-1 flex items-center justify-center p-8">
                    <div className="text-center max-w-md">
                        {/* Chat Icon */}
                        <div className="mb-8 flex justify-center">
                            <div className="relative">
                                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 2.98.97 4.29L1 23l6.71-1.97C9.02 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
                                    </svg>
                                </div>
                                <div className="absolute -right-2 -bottom-2 w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 2.98.97 4.29L1 23l6.71-1.97C9.02 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Request Message */}
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">{currentRequest.name}</h2>
                        <p className="text-gray-600 mb-6">({currentRequest.email}) wants to chat with you</p>

                        {/* Warning Message */}
                        <div className="bg-gray-50 rounded-lg p-4 mb-8 text-sm text-gray-600 border-2 border-[#EBEBEA]">
                            <p className="mb-2">Messages from unknown or unexpected people could be spam or phishing attempts.</p>
                            <p>Never share your account information or authorise sign-in requests over chat.</p>
                        </div>

                        <p className="text-sm text-gray-500 mb-6">
                            To be safe, <span className="text-blue-600 cursor-pointer hover:underline">preview their messages.</span>
                        </p>

                        {/* Action Buttons */}
                        <div className="flex space-x-4 justify-center">
                            <button
                                onClick={handleAccept}
                                className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium rounded-lg transition-colors"
                            >
                                Accept
                            </button>
                            <button
                                onClick={handleReject}
                                className="px-6 py-2 bg-white hover:bg-gray-50 text-gray-700 font-medium rounded-lg border border-gray-300 transition-colors"
                            >
                                Reject
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RequestChatInterface;
