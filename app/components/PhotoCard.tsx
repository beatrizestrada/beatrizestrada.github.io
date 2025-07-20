import { EmailIcon } from "./icons/EmailIcon";
import { Image } from "./Image";

export function PhotoCard() {
  return (
    <div className="flex-1/4 shrink-0 flex justify-between flex-wrap w-full h-fit gap-4 bg-primary-50 dark:bg-primary-500/5 p-4 rounded-sm border border-primary-200 dark:border-primary-200/10">
      <Image
        alt="photo of Beatriz"
        src="/photo.jpg"
        width={400}
        height={400}
        className="min-w-20 w-auto aspect-square object-cover"
      />
      <div className="flex flex-col text-right w-fit ml-auto gap-1">
        <b>Beatriz Campos Estrada</b>
        <div>
          <a
            href="mailto:becampos@mpia.de"
            className="flex items-center justify-end"
          >
            <span>
              <EmailIcon className="h-5" />
            </span>
            becampos@mpia.de
          </a>
          <p>
            Max Planck Institute for Astronomy <br /> Königstuhl 17 <br /> 69117
            Heidelberg, Germany
          </p>
        </div>
      </div>
    </div>
  );
}
