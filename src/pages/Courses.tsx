import { useState } from "react";
import { Main } from "../layout/Main";
import { CoursesPropsType } from "../types/course.type";
import { CourseDetail } from "../components/CourseDetail";

export function Courses({ courses }: CoursesPropsType) {
  const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(e.target.value);
    setSelectedCourseId(selectedId);
  };

  const selectedCourse = courses.find(
    (course) => course.courseId === selectedCourseId
  );

  return (
    <Main>
      <section>
        <h1>
          ESTO ES COURSES.TSX
        </h1>
        <p>
          Ejemplo de uso accediendo a la data.ts como parámetro desde routes.tsx
        </p>
        <section>
          <label>
            Selecciona el curso en el que estás interesado:
          </label>
          <select
            
            onChange={handleSelectChange}
            defaultValue=""
          >
            <option value="" disabled>
              Seleccionar un curso
            </option>
            {courses.map((course) => (
              <option key={course.courseId} value={course.courseId}>
                {course.name}
              </option>
            ))}
          </select>
        </section>
        <br></br>
        {selectedCourse && <CourseDetail course={selectedCourse} />}
      </section>
    </Main>
  );
}
