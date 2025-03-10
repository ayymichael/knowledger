import CoursesList from "@/modules/courses-list/pub/CoursesList";
import CreateCourseForm from "@/modules/courses-list/pub/CreateCourseForm";

export default function Home() {
  return (
    <main className="font-manrope flex min-h-screen flex-col p-8">
      <h1>Testing prisma</h1>
      <CreateCourseForm
        revalidatePagePath="/"
        className="max-w-[300px] mb-10"
      />
      <CoursesList revalidatePagePath="/" />
    </main>
  );
}
