import { dbClient } from "@/shared/lib/db";
import { cache } from "react";

class CoursesRepository {
  getCoursesList = cache(
    (): Promise<CourseListElement[]> => dbClient.subject.findMany(),
  );

  createCourseElement = (command: CreateListElementCommand) => {
    return dbClient.subject.create({
      data: command,
    });
  };

  deleteCourseElement = (command: DeleteListElementCommand) => {
    return dbClient.subject.delete({
      where: {
        id: command.id,
      },
    });
  };
}

const coursesRepository = new CoursesRepository();

export default coursesRepository;
