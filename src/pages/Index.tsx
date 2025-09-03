import Hero from "@/components/Hero";
import CurriculumOverview from "@/components/CurriculumOverview";
import CommandReference from "@/components/CommandReference";
import LabExercise from "@/components/LabExercise";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <CurriculumOverview />
      <CommandReference />
      <LabExercise />
    </div>
  );
};

export default Index;
