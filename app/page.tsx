"use client";
import { Info } from "./components/Info";
import { PhotoCard } from "./components/PhotoCard";
import { SelectedPublications } from "./components/SelectedPublications";

export default function Home() {
  return (
    <main className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h1>
          Beatriz <b>Campos Estrada</b> PhD
        </h1>
        <div className="flex flex-col sm:flex-row gap-4">
          <Info />
          <PhotoCard />
        </div>
      </div>
      <SelectedPublications />
    </main>
  );
}
