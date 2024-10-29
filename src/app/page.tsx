import { LibComponents } from "./core/components";

export default function Home() {
  return (
    <div>
      <LibComponents.CommonComponents.Header />
      <LibComponents.HomeComponents.ImageFliper />
      <LibComponents.HomeComponents.DescriptionContent />
    </div>
  );
}
