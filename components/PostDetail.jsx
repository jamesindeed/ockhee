import React, { useEffect } from 'react';
import moment from 'moment';
import Prism from 'prismjs';

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }

      if (obj.code) {
        modifiedText = (
          <div
            className='block px-3 py-5 font-mono text-sm text-white bg-black border-black rounded-md border-1'
            key={index}
          >
            {text}
          </div>
        );
      }
    }

    switch (type) {
      case 'heading-three':
        return (
          <h3 key={index} className='mb-4 text-xl font-semibold'>
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case 'paragraph':
        return (
          <p key={index} className='mb-8'>
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case 'heading-four':
        return (
          <h4 key={index} className='mb-4 font-semibold text-md'>
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case 'code-block':
        return (
          <pre className='language-javascript'>
            <code key={index}>
              {modifiedText.map((item, i) => (
                <React.Fragment key={i}>{item}</React.Fragment>
              ))}
            </code>
          </pre>
        );
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      Prism.highlightAll();
    }
  }, []);

  return (
    <>
      <div className='w-full p-0 pb-6 mb-8 overflow-hidden transition-all bg-white border border-gray-200 rounded-lg cursor-pointer card hover:-translate-y-1 duration-00 lg:p-6'>
        <div className='relative mb-6 overflow-hidden rounded-t-lg pb-80 lg:rounded-lg'>
          <img
            src={post.featuredImage.url}
            alt={post.title}
            className='absolute object-cover object-top w-full shadow-sm h-80'
          />
        </div>

        <div className='px-6 py-2 lg:px-0'>
          <div className='flex flex-row flex-wrap'>
            {post.categories.slice(0, 4).map((category, index) => (
              <div
                key={index}
                className='px-2 py-1 mb-6 mr-2 text-xs text-indigo-700 uppercase bg-indigo-200 rounded-full'
              >
                <p>#{category.name}</p>
              </div>
            ))}
          </div>
          <div className='flex flex-row items-center'>
            <div className='w-8 h-8 mr-3 overflow-hidden align-middle rounded-full'>
              <img alt={post.author.name} src={post.author.photo.url} />
            </div>
            <div className='mr-2 text-sm font-bold'>{post.author.name}</div>
            <div className='text-xs text-gray-400'>
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </div>
          </div>
          <h2 className='py-4 text-2xl font-bold transition duration-400 hover:text-indigo-500'>
            {post.title}
          </h2>
          <div className='max-w-full prose text-md'>
            {post.content.raw.children.map((typeObj, index) => {
              const children = typeObj.children.map((item, itemindex) =>
                getContentFragment(itemindex, item.text, item)
              );

              return getContentFragment(index, children, typeObj, typeObj.type);
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetail;
