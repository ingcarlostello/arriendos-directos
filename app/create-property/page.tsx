import PublishPropertyForm from "./components/PublishPropertyForm";


export default function CreateProperty() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">Publicar Nueva Propiedad</h1>
      <PublishPropertyForm />
    </div>
  );
}
