import { SplitScreen } from '@/components/layout/SplitScreen';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';

function ClubContent() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-white p-8">
      <Typography variant="h1" animate className="mb-6 text-center">
        THE CLUB
      </Typography>
      <Typography variant="body" className="mb-8 text-center max-w-md">
        Experience the dark, atmospheric world of Eli & Fur's club performances
      </Typography>
      <Button variant="outline">Enter The Club</Button>
    </div>
  );
}

function StudioContent() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-black p-8">
      <Typography variant="h1" animate className="mb-6 text-center">
        THE STUDIO
      </Typography>
      <Typography variant="body" className="mb-8 text-center max-w-md">
        Discover the intimate songwriting and production process
      </Typography>
      <Button variant="outline">Enter The Studio</Button>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <SplitScreen
        clubContent={<ClubContent />}
        studioContent={<StudioContent />}
      />
    </main>
  );
}
