import React from 'react';
import Button from './button';

const Menu = () => {
    return (
        <div className="flex flex-row items-center justify-between mx-6">
            <span className="cursor-pointer text-text-color mr-6 menu-items">وبلاگ</span>
            <span className="cursor-pointer text-text-color mr-6">خدمات</span>
            <span className="cursor-pointer text-text-color mr-6">محصولات</span>
            <span className="cursor-pointer text-text-color mr-6">خانه</span>
        </div>
    );
}

export default Menu;
