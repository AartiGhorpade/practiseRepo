"use client";
import { useRouter } from "next/navigation";

export default function Page() {
  const countries = ["South Korea", "Japan", "Switzerland"];
  const router = useRouter();
  return (
    <div>
      <h1 className="text-[40px]">Destinations</h1>
      <div className="flex gap-10 my-10 justify-center">
        {countries.map((country, index) => (
          <p
            key={index}
            className="text-[20px] border border-white py-2 px-3 rounded-full cursor-pointer"
            onClick={() =>
              router.push(`./destinations/${country.toLowerCase()}`)
            }
          >
            {country}
          </p>
        ))}
      </div>
    </div>
  );
}
