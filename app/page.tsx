import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen w-screen">
      <div className="text-center">
        <Image alt="JBay Padel Logo" src="/jbaypadel.svg" width={360} height={240} />
        <h1 className="font-semibold">Under Construction</h1>
        <p className="text-sm text-gray-400">More details to follow.</p>
      </div>
    </main>
  );
}
