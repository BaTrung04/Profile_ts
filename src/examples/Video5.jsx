import { useEffect, useState } from "react";

const Video5 = (props) => {
  const { name } = props;
  const [age, setAge] = useState(0);
  useEffect(() => {
    setAge("ba trung");
  }, []);
  return (
    <div>
      Example in video 5 - MY name's {name} | age = {age}
    </div>
  );
};
export default Video5;
