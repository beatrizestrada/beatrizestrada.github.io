import Link from "next/link";
import Publication from "./Publication";
import { publications } from "../data/publications";

export function SelectedPublications() {
  const selectedPublications = publications.filter((pub) => pub.highlight);

  return (
    <div className="flex flex-col gap-4">
      <h2>
        <Link href="/publications">selected publications</Link>
      </h2>
      <div className="flex flex-col gap-4">
        {selectedPublications.map((publication, index) => (
          <Publication key={index} {...publication} />
        ))}
      </div>
    </div>
  );
}
