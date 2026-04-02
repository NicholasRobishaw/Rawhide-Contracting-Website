// src/pages/cabinet-documents.jsx
import { useState, useEffect } from "react";
import SectionCard from "../components/SectionCard"
import "../App.css";

export default function CabinetDocuments() {

  return (
    <div className="flex flex-col bg-white text-black">
      
      {/* Page Header */}
      <section className="py-20 px-6 text-center bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">
          Cabinet Design & Construction Guide
        </h1>
        <p className="max-w-3xl mx-auto text-gray-700">
          Explore cabinet colors, materials, construction methods, and features.
          Learn what sets high-quality cabinetry apart and make informed design decisions.
        </p>
      </section>

      {/* Cabinet Colors */}
      <SectionCard
        title="Cabinet Colors & Finishes"
        description="Browse popular cabinet colors, finishes, and styles used in modern and traditional spaces."
        images={["ShakerFinishes.jpg", "EuroFinishes.jpg"]}
        links={[
          { title: "Choosing the Right Cabinet Color", href: "cabinet-color-guide" },
          { title: "Shaker vs Euro Cabinets", href: "shaker-vs-euro-cabinets" },
        ]}
      />

      {/* Cabinet Features */}
      <SectionCard
        title="Cabinet Features & Hardware"
        description="Learn about soft-close hardware, drawer systems, storage solutions, and functional upgrades."
        images={["CabinetFeatures.jpg"]}
        links={[
          { title: "Soft-Close Hinges Explained", href: "soft-close-hinges-explained" },
          { title: "Popular Cabinet Storage Features", href: "cabinet-storage-features" },
        ]}
      />

      {/* Most asked Questions */}
      <SectionCard
        title="Most Asked Questions"
        description="Here are some articles that can help you with your next project!"
        links={[
          { title: "Your Kitchen Remodel Checklist", href: "kitchen-remodel-checklist" },
         
        ]}
      />

      
    </div>
  );
}
