import { revalidatePath } from "next/cache";
import coursesRepository from "../courses.repository";
import CourseItem from "../ui/CourseItem";

export default async function CoursesList({
  revalidatePagePath,
}: {
  revalidatePagePath: string;
}) {
  const coursesList = await coursesRepository.getCoursesList();

  const handleDeleteAction = async (courseId: string) => {
    "use server";

    await coursesRepository.deleteCourseElement({ id: courseId });

    revalidatePath(revalidatePagePath);
  };

  return (
    <div className="flex flex-col gap-3">
      {coursesList.map((course) => (
        <CourseItem
          course={course}
          key={course.id}
          onDelete={handleDeleteAction.bind(null, course.id)}
        />
      ))}
    </div>
  );
}
