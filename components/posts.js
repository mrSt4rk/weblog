import React, { useState, useEffect } from 'react';
import Button from './button';
import Post from './post';
import Pagination from './pagination';

const Posts = (props) => {
    const [posts, setPosts] = useState([]);
    const [counts, setCounts] = useState(0);

    useEffect(() => {
        if (props.data) {
            setPosts(props.data);
            setCounts(props.count);
            setPaginate(0);
        }
    }, [props]);


    const paginate = (a, pageIndex, pageSize) => {
        var endIndex = Math.min((pageIndex + 1) * pageSize, a.length);
        return a.slice(Math.max(endIndex - pageSize, 0), endIndex);
    }

    const setPaginate = (pageIndex) => {
        setPosts(paginate(JSON.parse(localStorage.getItem('posts')), pageIndex, 4));
    }

    return (
        <div className="container flex flex-col justify-between items-end lg:w-2/3 xl:w-2/3 xs:w-full ml-70 mr-44 mt-70 xs:mr-5">
            {posts && posts.map(item => (
                <div className="post-container flex xl:flex-row lg:flex-row md:flex-col-reverse sm:flex-col-reverse md:items-center sm:items-center xs:items-center xs:flex-col-reverse justify-between mb-10" key={item._id}>
                    <Button value="بیشتر" textColor="text-white" bgColor="bg-green" class="post-btn mr-5" />
                    <Post title={item.title} body={item.body} comments={item.commentCount} author={item.author} date={item.createdAt} />
                    <img src={item.introImageUrl.host} alt="post logo" width="301" height="288" className="post-img md:mb-3 sm:mb-3 xs:mb-3" />
                </div>

            ))}
            <Pagination counts={Math.ceil(counts / 4)} paginate={(pageIndex) => setPaginate(pageIndex)} />
        </div>
    );
}

export default Posts;
