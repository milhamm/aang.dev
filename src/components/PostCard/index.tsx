import React from "react";
import cx from "clsx";

interface PostCardPropTypes {
  data: {
    date: string;
    title: string;
    color?: "blue" | "orange" | "pink";
  };
}

const pallete = {
  blue: "from-cyan-500 to-blue-700",
  orange: "from-orange-400 to-amber-400",
  pink: "from-red-500 to-pink-600",
};

const PostCard = ({ data }: PostCardPropTypes) => {
  return (
    <div className="w-full rounded-3xl p-3 min-h-[170px] border-blueGray-200 dark:border-white border hover:scale-[1.05] transition-all cursor-pointer">
      <div
        className={cx(
          "rounded-2xl bg-gradient-to-br h-full px-4 py-4 text-sm text-white",
          pallete[data.color || "blue"]
        )}
      >
        <p>{data.date}</p>
        <h3 className="mt-4 font-bold line-clamp-4">{data.title}</h3>
      </div>
    </div>
  );
};

export default PostCard;
