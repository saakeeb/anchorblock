import React, { useState } from 'react';
import downArrowIcon from '../../assets/Down Arrow.svg';

const DropdownButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState("English (UK)");

    const handleItemClick = (item: string) => {
        setSelectedItem(item);
        setIsOpen(false);
    };

    return (
        <div className='px-3 bg-link-bg rounded-xl'>
            <div className="relative w-30 shadow-dark-100">
                <button
                    className="p-2 text-link-text focus:outline-none flex justify-center items-center"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {/* <div className='flex justify-center items-center'>
                    </div> */}
                        <p className='w-24 mr-1'> {selectedItem} </p>
                        <img src={downArrowIcon} alt="Down arrow icon" />
                </button>

                {isOpen && (
                    <div className="absolute z-10 -right-2 mt-2 py-2 w-36 bg-link-bg rounded-md shadow-lg">
                        <a
                            href="#"
                            className="block px-4 py-2 text-link-text"
                            onClick={() => handleItemClick("English (UK)")}
                        >
                            English (UK)
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 text-link-text "
                            onClick={() => handleItemClick("Bangla")}
                        >
                            Bangla
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DropdownButton;