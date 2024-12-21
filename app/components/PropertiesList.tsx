import PropertyCard from "./PropertyCard";
import { PROPERTIES } from "@/lib/mocks/mockData";

export default async function PropertiesList() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Propiedades Disponibles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROPERTIES.map((property) => (
          <PropertyCard
            address={property.address}
            bathrooms={property.bathrooms}
            bedrooms={property.bedrooms}
            id={property.id}
            image={property.image}
            key={property.id}
            price={property.price}
            title={property.title}
            area={property.area}
          />
        ))}
      </div>
    </div>
  );
}
