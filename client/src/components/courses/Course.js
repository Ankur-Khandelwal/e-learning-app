export default function Course(props) {
  return (
    <div class="all-course-items">
      <div id="course-img" alt="course-logo">
        <img src="  " alt="course-logo" />
      </div>
      <h2 id="course-name">{props.courseName}</h2>
      <h4 id="course-creator-name">{props.courseCreator}</h4>
      <price>
        <b>{props.coursePrice}</b>
      </price>
      <button>Buy {props.coursePrice}</button>
    </div>
  );
}
