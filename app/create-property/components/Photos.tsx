import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

interface PhotosProps {
  formData: any;
  actualizarFormData: (data: Partial<typeof formData>) => void;
}

export function Photos({ formData, actualizarFormData }: PhotosProps) {
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const newPreviewUrls = files.map(file => URL.createObjectURL(file));
    setPreviewUrls(prevUrls => [...prevUrls, ...newPreviewUrls]);
    actualizarFormData({ fotos: [...formData.fotos, ...files] });
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="fotos">Fotos de la Propiedad</Label>
        <Input
          id="fotos"
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
        />
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {previewUrls.map((url, index) => (
          <div key={index} className="relative aspect-square">
            <Image
              src={url}
              alt={`Foto ${index + 1}`}
              fill
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
