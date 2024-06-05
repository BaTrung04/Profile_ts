import React, { useState } from "react";

const Video9 = () => {
  let a = 10;
  let [name, setName] = useState<number | string>(10);
  name = "trung";
  setName(11);
  return <div>Example in video 7: hello world + {name}</div>;
};

export default Video9;
