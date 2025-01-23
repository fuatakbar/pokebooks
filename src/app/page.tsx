import Card from "@/components/card";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="grid grid-rows-[20px_1fr_20px] items-start justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-poppins)] bg-white">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-gray-500">
          <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                {
                  imageUrl: "https://img.pokemondb.net/artwork/pikachu.jpg",
                  category: "In-house",
                  title: "Introduction to React",
                  provider: "Tech Academy",
                },
                {
                  imageUrl: "https://img.pokemondb.net/artwork/venusaur.jpg",
                  category: "Public",
                  title: "Advanced JavaScript",
                  provider: "Code School",
                },
                {
                  imageUrl: "https://img.pokemondb.net/artwork/venusaur.jpg",
                  category: "In-house",
                  title: "Full Stack Development",
                  provider: "DevWorks",
                },
                {
                  imageUrl: "https://img.pokemondb.net/artwork/venusaur.jpg",
                  category: "In-house",
                  title: "Full Stack Development",
                  provider: "DevWorks",
                },
                {
                  imageUrl: "https://img.pokemondb.net/artwork/venusaur.jpg",
                  category: "In-house",
                  title: "Full Stack Development",
                  provider: "DevWorks",
                },
                {
                  imageUrl: "https://img.pokemondb.net/artwork/pikachu.jpg",
                  category: "In-house",
                  title: "Introduction to React",
                  provider: "Tech Academy",
                },
                {
                  imageUrl: "https://img.pokemondb.net/artwork/venusaur.jpg",
                  category: "Public",
                  title: "Advanced JavaScript",
                  provider: "Code School",
                },
                {
                  imageUrl: "https://img.pokemondb.net/artwork/venusaur.jpg",
                  category: "In-house",
                  title: "Full Stack Development",
                  provider: "DevWorks",
                },
                {
                  imageUrl: "https://img.pokemondb.net/artwork/venusaur.jpg",
                  category: "In-house",
                  title: "Full Stack Development",
                  provider: "DevWorks",
                },
                {
                  imageUrl: "https://img.pokemondb.net/artwork/venusaur.jpg",
                  category: "In-house",
                  title: "Full Stack Development",
                  provider: "DevWorks",
                },
                {
                  imageUrl: "https://img.pokemondb.net/artwork/pikachu.jpg",
                  category: "In-house",
                  title: "Introduction to React",
                  provider: "Tech Academy",
                },
                {
                  imageUrl: "https://img.pokemondb.net/artwork/venusaur.jpg",
                  category: "Public",
                  title: "Advanced JavaScript",
                  provider: "Code School",
                },
                {
                  imageUrl: "https://img.pokemondb.net/artwork/venusaur.jpg",
                  category: "In-house",
                  title: "Full Stack Development",
                  provider: "DevWorks",
                },
                {
                  imageUrl: "https://img.pokemondb.net/artwork/venusaur.jpg",
                  category: "In-house",
                  title: "Full Stack Development",
                  provider: "DevWorks",
                },
                {
                  imageUrl: "https://img.pokemondb.net/artwork/venusaur.jpg",
                  category: "In-house",
                  title: "Full Stack Development",
                  provider: "DevWorks",
                },
                {
                  imageUrl: "https://img.pokemondb.net/artwork/pikachu.jpg",
                  category: "In-house",
                  title: "Introduction to React",
                  provider: "Tech Academy",
                },
                {
                  imageUrl: "https://img.pokemondb.net/artwork/venusaur.jpg",
                  category: "Public",
                  title: "Advanced JavaScript",
                  provider: "Code School",
                },
                {
                  imageUrl: "https://img.pokemondb.net/artwork/venusaur.jpg",
                  category: "In-house",
                  title: "Full Stack Development",
                  provider: "DevWorks",
                },
                {
                  imageUrl: "https://img.pokemondb.net/artwork/venusaur.jpg",
                  category: "In-house",
                  title: "Full Stack Development",
                  provider: "DevWorks",
                },
                {
                  imageUrl: "https://img.pokemondb.net/artwork/venusaur.jpg",
                  category: "In-house",
                  title: "Full Stack Development",
                  provider: "DevWorks",
                },
              ].map((card, index) => (
                <Card
                  key={index}
                  imageUrl={card.imageUrl}
                  title={card.title}
                  provider={card.provider}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
