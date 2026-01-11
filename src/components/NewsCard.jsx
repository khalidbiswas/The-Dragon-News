import { FaStar, FaRegEye, FaShareAlt, FaBookmark } from "react-icons/fa";

const NewsCard = ({ singleNews }) => {
  const {
    title,
    image_url,
    author,
    rating,
    total_view,
    details,
  } = singleNews;

  return (
    <div className="card bg-base-100 shadow-md rounded-lg">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-base-200 rounded-t-lg">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold text-sm">{author?.name}</p>
            <p className="text-xs text-gray-500">
              {new Date(author?.published_date).toDateString()}
            </p>
          </div>
        </div>

        <div className="flex gap-3 text-gray-500">
          <FaBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Body */}
      <div className="card-body p-4">
        <h2 className="card-title text-lg leading-snug">
          {title}
        </h2>

        <figure className="my-3">
          <img
            src={image_url}
            alt={title}
            className="rounded-lg w-full object-cover"
          />
        </figure>

        <p className="text-sm text-gray-600">
          {details.slice(0, 150)}...
          <span className="text-primary font-semibold cursor-pointer">
            {" "}Read More
          </span>
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-3 border-t">
        <div className="flex items-center gap-1 text-orange-500">
          {[...Array(rating?.number)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-2 text-gray-600 font-medium">
            {rating?.number}
          </span>
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <FaRegEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
