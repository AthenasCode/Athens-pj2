import { useState } from "react";
import { CourseDetailPropsType } from "../types/course.type";

export function CourseDetail({ course }: CourseDetailPropsType) {
  const [value, setValue] = useState("");
  return (
    <section>
      <h2 >
        Nombre del curso: {course.name}
      </h2>
      <br></br>
      <p>{course.description}</p>
      <br></br>
      <br></br>

      <h2 >
        Características {course.name}:
      </h2>
      <br></br>
      <ul >
        {course.features.map((feature) => (
          <li key={feature.id}>{feature.feature}</li>
        ))}
      </ul>
      <br></br>
      <br></br>

      <h2 >Temática:</h2>
      <br></br>
      <ul >
        {course.topics.map((topic) => (
          <li key={topic.id}>
            <strong>{topic.name}</strong> - {topic.description} ({topic.level})
          </li>
        ))}
      </ul>
      <br></br>
      <p>
        Te encuentras interesado en este curso ?
      </p>
      <p>
        {value === "Si" && (
          <>
            Gracias por tu interés, ahora puedes registrarte y continuar con el
            proceso de inscripción.
          </>
        )}
        {value === "No" && (
          <>
            Queremos mejorar para ti, escríbenos y haznos saber tus intereses.
          </>
        )}
      </p>
      <div>
        <button
          
          onClick={() => setValue("Si")}
        >
          Si
        </button>
        <button
          
          onClick={() => setValue("No")}
        >
          No
        </button>
      </div>
    </section>
  );
}
