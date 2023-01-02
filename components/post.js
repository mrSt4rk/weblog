import React from 'react';
import Image from 'next/image';
import moment from 'jalali-moment';

const Post = ({ title, body, author, date, comments }) => {
    return (
        <div className="container flex lg:flex-col xl:flex-col sm:flex-col xs:flex-col xss:flex-col items-end justify-between mr-5 md:mb-3 sm:mb-3 xs:mb-3 xs:mb-3 ">
            <span className="mb-44">{title}</span>
            <p className="post-body text-right mb-44 overflow-hidden max-w-[400px] min-w-[400px]">{body}</p>
            <div className="flex flex-row justify-between items-end w-full">
                <div className="flex flex-row">
                    <span className="mr-2">{author}</span>
                    <Image
                        src='/author.svg'
                        alt="author"
                        width={16}
                        height={16}
                        priority
                    />

                </div>
                <div className="flex flex-row">
                    <span>{'نظر'}</span>
                    <span className="ml-1 mr-1">{comments}</span>
                    <Image
                        src='/comment.svg'
                        alt="comment"
                        width={16}
                        height={16}
                        priority
                    />

                </div>

                <div className="flex flex-row">
                    <span className="mr-2">{moment(date).locale('fa').format('MMM DD YYYY')}</span>
                    <Image
                        src='/date.svg'
                        alt="date"
                        width={16}
                        height={16}
                        priority
                    />

                </div>
            </div>
        </div>
    );
}

export default Post;
