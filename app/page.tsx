import { getCourses } from "@/queries/courses";

export default async function Home() {
  const courses = await getCourses();
  console.log(courses[0]?.modules);
  return (
    <div>sdfsd</div>
  );
}
