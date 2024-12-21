import { Badge } from "@/components/ui/badge";
import { Bed, Bath, Ruler } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { IPropertyCard } from "@/lib/types/IPropertyCard";
import Image from "next/image";
import Link from "next/link";

const PropertyCard = ({
  address,
  area,
  bathrooms,
  bedrooms,
  id,
  image,
  price,
  title,
}: IPropertyCard) => {
  return (
    <>
      <Card key={id} className="overflow-hidden">
        <div className="relative aspect-video">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-muted-foreground mb-2">{address}</p>
          <Badge className="mb-4">
            {new Intl.NumberFormat("es-CL", {
              style: "currency",
              currency: "CLP",
            }).format(price)}
          </Badge>
          <div className="flex justify-between text-sm">
            <div className="flex items-center">
              <Bed className="mr-1 h-4 w-4" />
              <span>{bedrooms}</span>
            </div>
            <div className="flex items-center">
              <Bath className="mr-1 h-4 w-4" />
              <span>{bathrooms}</span>
            </div>
            <div className="flex items-center">
              <Ruler className="mr-1 h-4 w-4" />
              <span>{area ?? 'N/A'} m²</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Link
            href={`/propiedades/${id}`}
            className="text-primary hover:underline"
          >
            Ver detalles
          </Link>
        </CardFooter>
      </Card>
    </>
  );
};

export default PropertyCard;
