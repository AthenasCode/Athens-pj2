export type Feature = {
  id: number;
  feature: string;
};

export type Topic = {
  id: number;
  name: string;
  description: string;
  level: string;
};

export type Course = {
  courseId: number;
  name: string;
  description: string;
  features: Feature[];
  topics: Topic[];
};

export type CoursesPropsType = {
  courses: Course[];
};

export type CourseDetailPropsType = {
  course: Course;
};
