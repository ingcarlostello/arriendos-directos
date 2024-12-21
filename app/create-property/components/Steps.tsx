import { Check } from 'lucide-react';

interface StepsProps {
  pasos: { id: string; titulo: string }[];
  pasoActual: number;
}

export function Steps({ pasos, pasoActual }: StepsProps) {
  return (
    <div className="flex justify-between">
      {pasos.map((paso, index) => (
        <div key={paso.id} className="flex flex-col items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              index <= pasoActual ? 'bg-black text-white' : 'bg-muted text-muted-foreground'
            }`}
          >
            {index < pasoActual ? (
              <Check className="w-5 h-5" />
            ) : (
              index + 1
            )}
          </div>
          <span className="text-sm mt-2">{paso.titulo}</span>
        </div>
      ))}
    </div>
  );
}

