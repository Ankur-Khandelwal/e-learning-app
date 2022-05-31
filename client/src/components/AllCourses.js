import Course from "./Course";

export default function AllCourses() {
  const [courses, setCourses] = useState([]);
  return (
    <section class="all-courses">
      <h1>All courses we offer</h1>
      <div class="all-courses-container">
      courses.map((course, index)  (
        <Course course={course} id={index}/>
      ))
      </div>
    </section>
  );
}
