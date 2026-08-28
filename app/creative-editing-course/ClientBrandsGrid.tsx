
import ClientBrandsMotion from "./ClientBrandsMotion";

type Brand =
  | {
    name: string;
    image: string;
    width: number;
    height: number;
  }
  | {
    name: string;
    text: string;
    width: number;
    height: number;
  };

const brands: Brand[] = [
  {
    name: "Ashok Leyland",
    image: "/images/ASHOK LEYLAND.webp",
    width: 1254,
    height: 1254,
  },
  {
    name: "Finolex",
    image: "/images/FINOLEX.webp",
    width: 1254,
    height: 1254,
  },
  {
    name: "Heritage",
    image: "/images/heritage.webp",
    width: 1254,
    height: 1254,
  },
  {
    name: "JLL",
    image: "/images/JLL.webp",
    width: 1254,
    height: 1254,
  },
  {
    name: "Milky Mist",
    image: "/images/MILKY MIST-2.webp",
    width: 1254,
    height: 1254,
  },
  {
    name: "Mapro",
    image: "/images/mapro.webp",
    width: 1254,
    height: 1254,
  },
  {
    name: "Moj",
    image: "/images/moj.webp",
    width: 1254,
    height: 1254,
  },
  {
    name: "Netflix",
    image: "/images/NETFLIX-2.webp",
    width: 1254,
    height: 1254,
  },
  {
    name: "Paytm",
    image: "/images/paytm.webp",
    width: 1254,
    height: 1254,
  },
  {
    name: "Amazon",
    image: "/images/AMAZON.webp",
    width: 1254,
    height: 1254,
  },
  {
    name: "Poco",
    image: "/images/POCO.webp",
    width: 1254,
    height: 1254,
  },
  {
    name: "SIG",
    image: "/images/SIG.webp",
    width: 1254,
    height: 1254,
  },
  {
    name: "Xiaomi",
    image: "/images/XIAMO.webp",
    width: 1254,
    height: 1254,
  },
  {
    name: "Cinco",
    image: "/images/cinco.webp",
    width: 1254,
    height: 1254,
  },
  {
    name: "Jammai",
    image: "/images/jammai.webp",
    width: 1254,
    height: 1254,
  },
  {
    name: "MI",
    image: "/images/MI.webp",
    width: 1254,
    height: 1254,
  },
  {
    name: "Saravana Store",
    image: "/images/saravana_store.webp",
    width: 1254,
    height: 1254,
  },
  {
    name: "SRM",
    image: "/images/srm.webp",
    width: 1254,
    height: 1254,
  },
  {
    name: "Super Jewellery",
    image: "/images/super_jewellery.webp",
    width: 1254,
    height: 1254,
  },
  {
    name: "TEDx",
    image: "/images/tedx.webp",
    width: 1254,
    height: 1254,
  },
  {
    name: "Zenvista",
    image: "/images/zenvista.webp",
    width: 1254,
    height: 1254,
  },
];

const invertWhiteLogos = ["Cinco", "Saravana Store", "SRM", "TEDx", "Zenvista"];

function BrandLogo({ brand }: { brand: Brand }) {
  if ("image" in brand) {
    return (
      <img
        src={`${brand.image}?v=4`}
        alt={brand.name}
        className={`clientBrandImage${brand.name === "Mapro" ? " maproLogo" : ""}${brand.name === "Cinco" ? " cincoLogo" : ""}${brand.name === "Saravana Store" ? " saravanaLogo" : ""}`}
        style={{ width: "85%", height: "85%", objectFit: "contain" }}
      />
    );
  }

  return (
    <span
      className={brand.name === "Xiaomi" ? "xiaomiText" : "milkyMistText"}
      aria-label={brand.name}
    >
      {brand.name === "Xiaomi" ? (
        <>
          x<span className="dotlessI">ı</span>aom
          <span className="dotlessI">ı</span>
        </>
      ) : (
        brand.text
      )}
    </span>
  );
}

export default function ClientBrandsGrid() {
  return (
    <section className="clientBrandsSection clientBrandsCarouselSection" aria-label="Client Brands" data-header-theme="light">
      <ClientBrandsMotion />
      <div className="clientBrandsInner">
        <div className="mentorSectionIntro">
          <p className="clientBrandsEyebrow">Client Brands</p>
          <h2>Get Closer to the Work Behind Real Brands.</h2>
          <p className="clientBrandsDesc">
            The 88GB ecosystem works across multiple industries and content categories. This gives students exposure to the range of creative requirements that exist beyond classroom projects from consumer brands and FMCG to retail, entertainment, real estate, personal brands and production-led content.
          </p>
        </div>
        <div className="clientBrandsCarouselViewport">
          <div className="clientBrandsCarouselTrack">
            {[...brands, ...brands].map((brand, idx) => (
              <div
                key={`${brand.name}-${idx}`}
                className="clientBrandCard"
                aria-hidden={idx >= brands.length ? "true" : undefined}
              >
                <BrandLogo brand={brand} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
