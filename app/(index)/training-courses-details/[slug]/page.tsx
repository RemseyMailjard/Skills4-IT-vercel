"use client"
import TrainingCoursesDetailsScreen from "@/components/index/training-courses-details/TrainingCoursesDetailsScreen";
import { useParams } from "next/navigation";

interface ParamsProps {
  params: {
    slug: string;
  };
}

export default function Page({ params }: ParamsProps) {
  return <TrainingCoursesDetailsScreen slug={params.slug} />;
}
