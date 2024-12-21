import { Bed, Bath, MapPin, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PROPERTIES } from "@/lib/mocks/mockData";
import Image from "next/image";
import Link from "next/link";

export default async function UserProperties() {
  return (
    <Card>
      <CardHeader className="flex flex-col items-start gap-2 sm:flex-row sm:justify-between sm:items-center">
        <CardTitle>Mis Propiedades</CardTitle>
        <Button asChild variant="default" size="sm">
          <Link href="/create-property">Publicar Nueva Propiedad</Link>
        </Button>
      </CardHeader>
      <CardContent>
        {PROPERTIES.length > 0 ? (
          <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
            {PROPERTIES.map((property) => (
              <Link
                key={property.id}
                href={`/propiedades/${property.id}`}
                className="flex gap-4 p-4 rounded-lg hover:bg-muted transition-colors"
              >
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold truncate">{property.title}</h3>
                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="truncate">{property.address}</span>
                  </div>
                  <div className="flex items-center gap-4 mt-2 text-sm">
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      <span>{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      <span>{property.bathrooms}</span>
                    </div>
                    <div className="font-medium">
                      ${property.price.toLocaleString("es-CL")}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
              <Home className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              No tienes propiedades publicadas
            </h3>
            <p className="text-muted-foreground mb-4">
              Comienza a publicar tus propiedades y conecta con potenciales
              arrendatarios.
            </p>
            <Button asChild>
              <Link href="/create-property">Publicar mi primera propiedad</Link>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
