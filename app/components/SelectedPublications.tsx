import Link from "next/link";
import Publication from "./Publication";
import { publications } from "../data/publications";

export function SelectedPublications() {
  const selectedPublications = publications.filter((pub) =>
    [2, 4].includes(pub.id)
  );

  return (
    <div className="flex flex-col gap-4">
      <h2>
        <Link href="/publications">selected publications</Link>
      </h2>
      <div className="flex flex-col gap-4">
        {selectedPublications.map((publication) => (
          <Publication key={publication.id} {...publication} />
        ))}
      </div>
    </div>
  );
}
