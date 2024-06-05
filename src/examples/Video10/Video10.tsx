import { useState } from "react";
import "./Video10.css";

export interface ITest {
  name: string;
  age: number;
}

export interface IDefault {
  defaultName: string;
  defaultAge: number;
}

export interface IUser {
  name: string;
  age: number;
  city: string;
}
const Video10 = (props: IDefault) => {
  const { defaultName, defaultAge } = props;
  const [name, setName] = useState<string>(defaultName);
  const [age, setAge] = useState<number | string>(defaultAge);
  const [city, setCity] = useState<string[]>([
    "Hà Nội",
    "Đà Nẵng",
    "Hồ Chí Minh",
  ]);
  const [test, setTest] = useState<ITest | null>(null);

  const [users, setUsers] = useState<IUser[]>([
    { name: "Eric", age: 25, city: "Hà Nội" },
    { name: "Eric1", age: 26, city: "Đà Nẵng" },
    { name: "Eric2", age: 27, city: "Hồ Chí Minh" },
  ]);

  const [isShowBtn, setIsShowBtn] = useState<boolean>(false);

  return (
    <>
      <div>Example video 10: hello world </div>
      <div className="form-user">
        <div>
          <label>Name:</label>
          <br />
          <input type="text" value={name} />
          <br />
        </div>
        <div>
          <label>Age:</label>
          <br />
          <input type="text" value={age} />
          <br />
        </div>
        <div>
          <label>City:</label>
          <br />

          <select>
            {city.length > 0 &&
              city.map((item, index) => {
                return (
                  <>
                    <option key={index}>{item}</option>
                  </>
                );
              })}
          </select>
        </div>

        <input type="submit" value="Submit" />
      </div>
      <hr />
      <div>List Users:</div>
      <div className="table-user">
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 &&
              users.map((item, index) => {
                return (
                  <>
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.age}</td>
                      <td>{item.city}</td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Video10;
