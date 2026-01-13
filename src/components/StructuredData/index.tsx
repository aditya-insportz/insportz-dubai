import { Helmet } from "react-helmet-async";

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "name": "Insportz Dubai",
    "description": "Premier sports facility in Dubai offering Indoor Cricket, Padel, Badminton, Volleyball, Football, and Table Tennis",
    "url": "https://insportzclub.com",
    "telephone": "+971586450292",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "AE",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.128270259722562",
      "longitude": "55.21063659853021"
    },
    "openingHours": "Mo-Su 06:00-24:00",
    "sameAs": [
      "https://wa.me/971586450292"
    ],
    "sport": [
      "Cricket",
      "Padel",
      "Badminton", 
      "Volleyball",
      "Football",
      "Table Tennis"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default StructuredData;