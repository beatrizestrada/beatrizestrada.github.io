"use client";

import { useState } from "react";
import { Publication as PublicationProps } from "../data/publications";
import { monthMap } from "../utils/utils";

function splitOtherAuthors(otherAuthors?: string) {
  if (!otherAuthors) return [];
  return otherAuthors.split(",").map((author) => author.trim());
}

function countAuthorsWithinLimit(otherAuthorsList: string[], limit = 100) {
  let totalLength = 0;
  let count = 0;
  for (let i = 0; i < otherAuthorsList.length; i++) {
    // Add 2 for ", " separator except for the first author
    const authorLength = otherAuthorsList[i].length + (i > 0 ? 2 : 0);
    if (totalLength + authorLength > limit) break;
    totalLength += authorLength;
    count++;
  }
  return count;
}

export default function Publication({
  author,
  otherAuthors,
  title,
  month,
  year,
  journal,
  doi,
  ads,
}: PublicationProps) {
  const [showFullAuthors, setShowFullAuthors] = useState(false);
  const referenceAuthors = ["Beatriz Campos Estrada"];
  const otherAuthorsList = splitOtherAuthors(otherAuthors);
  const authorsWithinLimit = countAuthorsWithinLimit(otherAuthorsList, 200);
  const isReferenceAuthor = referenceAuthors.includes(author);

  const date = `${monthMap(month, true)} ${year}`;

  return (
    <div className="max-w-2xl">
      <p className="font-semibold">{title}</p>
      <p>
        <span
          className={isReferenceAuthor ? "underline underline-offset-3" : ""}
        >
          {author}
        </span>
        {otherAuthors &&
          otherAuthorsList.slice(0, authorsWithinLimit).map((author, index) => {
            const isReferenceAuthor = referenceAuthors.includes(author);
            return (
              <span key={index}>
                <span>{", "}</span>
                <span
                  className={
                    isReferenceAuthor ? "underline underline-offset-3" : ""
                  }
                >
                  {author}
                </span>
              </span>
            );
          })}
        {otherAuthorsList.length > authorsWithinLimit && (
          <>
            <span>{!showFullAuthors ? `, and ` : `, `}</span>
            <span
              className="text-gray-500 dark:text-gray-300 cursor-pointer underline underline-offset-3 hover:text-gray-600 dark:hover:text-gray-200"
              onClick={() => setShowFullAuthors((prev) => !prev)}
            >
              {!showFullAuthors
                ? `${otherAuthorsList.length - authorsWithinLimit} more`
                : `${otherAuthorsList.slice(authorsWithinLimit).join(", ")}`}
            </span>
          </>
        )}
      </p>
      <p>
        <span className="italic">{journal}</span>, <span>{date}</span>
      </p>
      {(doi || ads) && (
        <div className="flex space-x-2 mt-3">
          {doi && (
            <a
              href={doi}
              className="outline-1 px-3 py-0.5 rounded text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              DOI
            </a>
          )}
          {ads && (
            <a
              href={ads}
              className="outline-1 px-3 py-0.5 rounded text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              ADS
            </a>
          )}
        </div>
      )}
    </div>
  );
}
