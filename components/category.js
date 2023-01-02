import React, { useEffect } from 'react';


const Category = ({ catData, onSelectedCat }) => {

    const onSelectCat = (event, id) => {

        onSelectedCat(id);
    }

    return (
        <div className="flex flex-col mb-auto justify-start items-end mt-70 bg-white lg:w-full xl:w-full h-1/3 category-container">
            <span className="mb-5">دسته بندی</span>
            {catData.slice(1).slice(-7).map(item => (
                <div key={item._id} className="flex flex-row-reverse justify-between w-full category-list">
                    <span >{item.name}</span>
                    <input type="checkbox" value={true} className="border-green" onChange={e => onSelectCat(e, item._id)} />
                </div>
            ))}
        </div>
    );
}



export default Category;
