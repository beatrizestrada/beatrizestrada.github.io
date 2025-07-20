"use client";
import Publication from "../components/Publication";
import { publications } from "../data/publications";

export default function PublicationPage() {
  const sortedPublications = [...publications].sort((a, b) => {
    if (a.year !== b.year) {
      return b.year - a.year;
    }
    return b.month - a.month;
  });
  const publicationsYears = [...new Set(publications.map((pub) => pub.year))];

  return (
    <main className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h1>publications</h1>
      </div>
      <div className="flex flex-col gap-2">
        {publicationsYears.map((year, index) => (
          <div key={year} className="flex flex-col gap-4">
            <h2 className="text-gray-400 font-extralight">{year}</h2>
            <div className="flex flex-col gap-6">
              {sortedPublications
                .filter((pub) => pub.year === year)
                .map((pub, index) => (
                  <Publication key={index} {...pub} />
                ))}
            </div>
            {index < publicationsYears.length - 1 && (
              <hr className="text-gray-100 mt-4" />
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
