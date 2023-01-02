import React, { useState, useEffect } from 'react';
import Button from './button';

const Pagination = (props) => {

    const [pageNumbers, setPageNumbers] = useState([]);

    const paginateFn = (pageIndex) => {
        props.paginate(pageIndex)
    }


    useEffect(() => {
        const pages = [];
        for (let i = 0; i < props.counts; i++) {
            pages.push(i);
        }
        setPageNumbers(pages);
    }, [props])

    return (
        <div className="container flex flex-row justify-center items-center w-full">
            {pageNumbers && pageNumbers.map((number) => (
                <Button borderColor="border-green" textColor="text-green" bgColor="bg-white" key={number} class="pagination-btn active:text-white active:bg-green focus:text-white focus:bg-green" value={number + 1} onClick={() => paginateFn(number)} />
            ))}
        </div>
    );
}

export default Pagination;
