import React from "react";

interface PostCardPropTypes {
  data: {
    date: string;
    title: string;
  };
}

const PostCard = ({ data }: PostCardPropTypes) => {
  return (
    <div className="w-full rounded-3xl p-4 min-h-[170px] border-blueGray-200 dark:border-white border hover:scale-[1.05] transition-all cursor-pointer">
      <div className="rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-700 h-full px-4 py-4 text-sm text-white">
        <p>{data.date}</p>
        <h3 className="mt-4 font-bold line-clamp-4">{data.title}</h3>
      </div>
    </div>
  );
};

export default PostCard;
