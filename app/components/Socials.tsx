import { BlueskyIcon } from "./icons/BlueskyIcon";
import { EmailIcon } from "./icons/EmailIcon";
import { OrcidIcon } from "./icons/OrcidIcon";
import { ScholarIcon } from "./icons/ScholarIcon";

export function Socials() {
  return (
    <div className="flex space-x-1 ">
      <a
        href="https://orcid.org/0000-0003-0225-1201"
        target="_blank"
        rel="noopener noreferrer"
      >
        <OrcidIcon className="h-6 text-gray-500 dark:text-gray-300 hover:text-primary-400 cursor-pointer" />
      </a>
      <a
        href="https://scholar.google.com/citations?user=vA4P-dAAAAAJ&hl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ScholarIcon className="h-6 text-gray-500 dark:text-gray-300 hover:text-primary-400 cursor-pointer" />
      </a>
      <a
        href="https://bsky.app/profile/exobeatriz.bsky.social"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BlueskyIcon className="h-6 text-gray-500 dark:text-gray-300 hover:text-primary-400 cursor-pointer" />
      </a>
      <a
        href="mailto:becampos@mpia.de"
        target="_blank"
        rel="noopener noreferrer"
      >
        <EmailIcon className="h-6 text-gray-500 dark:text-gray-300 hover:text-primary-400 cursor-pointer" />
      </a>
    </div>
  );
}
