import Course from "/components/Course";

export default function AllCourses() {
  return (
    <section class="all-courses">
      <h1>All courses we offer</h1>
      <div class="all-courses-container">
        <Course />
        <Course />
        <Course />
        <Course />
      </div>
    </section>
  );
}
