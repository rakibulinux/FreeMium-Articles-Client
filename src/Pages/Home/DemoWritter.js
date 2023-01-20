import React from "react";
import { Link } from "react-router-dom";

const DemoWritter = ({ articleData }) => {
  console.log(articleData);
  const {
    articleDetails,
    articleImg,
    articleRead,
    articleSubmitDate,
    articleTitle,
    writerName,
    _id,
  } = articleData;
  return (
    <div>
      <Link
        to={`/view-story/${_id}`}
        class="relative block overflow-hidden rounded-lg border border-gray-100 p-8"
      >
        <div class="justify-between sm:flex">
          <div>
            <h3
              class="text-xl font-bold text-gray-900"
              dangerouslySetInnerHTML={{ __html: articleTitle }}
            />

            <p class="mt-1 text-xs font-medium text-gray-600">
              By {writerName}
            </p>
          </div>

          <div class="ml-3 hidden flex-shrink-0 sm:block">
            <img
              alt={articleTitle}
              src={articleImg}
              class="h-20 w-20 rounded-lg object-cover shadow-sm"
            />
          </div>
        </div>

        <div class="mt-4 sm:pr-8 inline">
          <p
            class="text-sm text-gray-500"
            dangerouslySetInnerHTML={{ __html: articleDetails.slice(0, 190) }}
          />
          ...
        </div>

        <dl class="mt-6 flex">
          <div class="flex flex-col-reverse">
            <dd class="text-xs text-gray-700">{articleSubmitDate}</dd>
          </div>

          <div class="ml-3 flex flex-col-reverse sm:ml-6">
            <dd class="text-xs text-gray-700">{articleRead} minute</dd>
          </div>
        </dl>
      </Link>
    </div>
  );
};

export default DemoWritter;
