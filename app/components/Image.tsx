import NextImage, { ImageProps } from "next/image";

export function Image({ ...imageProps }: ImageProps) {
  const basePath = process.env.PAGES_BASE_PATH ?? "";
  const src = basePath + imageProps.src;

  return <NextImage {...imageProps} src={src} />;
}
