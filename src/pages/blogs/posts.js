import React, { useContext } from 'react';
import parse from 'html-react-parser';
import { MyLoader } from '../../components/skeleton';
import PostsHeader from './postsHeader';
import ReadMore from './readmore';
import DropDown from './dropdown';
import UserDataContext from '../../utilities/context/userData';

const mystyle = {
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 4,
  overflow: 'hidden',
  textOverflow: 'ellipsis'
};

const Timeline = () => {
  const { state } = useContext(UserDataContext);

  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-8">
          {state.allBlog[0] ? (
            state.allBlog.map((blog, idx) => (
              <div
                key={idx}
                className="dark:bg-darkMode-primary dark:text-white  dark:text-opacity-70 hover:shadow-sm rounded-2xl shadow-lg md:p-8 p-2 bg-white mb-4"
              >
                <div className="flex justify-between">
                  <div className="flex items-center space-x-2 mb-4">
                    <PostsHeader userData={blog.userId} date={blog.updatedAt} />
                  </div>
                  {blog.userId.username === state.username ? (
                    <div>
                      <DropDown blogData={blog} />
                    </div>
                  ) : null}
                </div>

                <h1 className="font-semibold dark:text-white dark:text-opacity-80 leading-none text-xl mt-1 ml-1  capitalize truncate">
                  {blog.title}
                </h1>
                {blog.tags.map((tag) => (
                  <li key={tag.id} className="tag">
                    #{tag.text}
                  </li>
                ))}
                <div className="flex justify-center mt-4">
                  <
                    img className="w-96 h-40 rounded-xl"
                    src={blog.photo}
                    alt=""
                  />
                </div>
{/*                 
                <img className="w-96 rounded-xl" 
                    src={blog.photo} alt="" /> */}

                <div style={mystyle} className=" max-w-full">
                  <div className="dark:text-white dark:text-opacity-80 text-gray-formbg text-center font-medium  mt-1">
                    {parse(blog.content)}
                  </div>
                </div>
                <div className="flex gap-4 mt-5">
                  <button
                    type="button"
                    className="hover-bg  dark:hover:text-darkMode-base flex items-center gap-1 h-10 border border-orange-base px-3  rounded-full hover:text-white transition-colors focus:bg-orange-secondary focus:outline-none focus-visible:border-orange-secondary"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 1024 1024"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z" />
                    </svg>
                    <span>{blog.likes.length}</span>
                  </button>
                  <button
                    type="button"
                    className="hover-bg  dark:hover:text-darkMode-base flex items-center gap-1 h-10  border border-orange-base px-3  rounded-full  hover:text-white transition-colors focus:bg-orange-secondary focus:outline-none focus-visible:border-orange-secondary"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 1024 1024"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M464 512a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm200 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm-400 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 0 0-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 0 0-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 0 0 112 714v152a46 46 0 0 0 46 46h152.1A449.4 449.4 0 0 0 510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 0 0 142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z" />
                    </svg>
                    <span>{blog.comments.length}</span>
                  </button>
                  <ReadMore blogData={blog} />
                </div>
              </div>
            ))
          ) : (
            <>
              <MyLoader />
              <MyLoader />
              <MyLoader />
              <MyLoader />
              <MyLoader />
              <MyLoader />
              <MyLoader />
              <MyLoader />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Timeline;
