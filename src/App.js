import React, { useRef } from "react";
import ReactToPrint from "react-to-print";

const ComponentToPrint = React.forwardRef((props, ref) => (
  <table ref={ref}>
    <thead>
      <th>column 1</th>
      <th>column 2</th>
      <th>column 3</th>
    </thead>
    <tbody>
      <tr>
        <td>data 1</td>
        <td>data 2</td>
        <td>data 3</td>
      </tr>
      <tr>
        <td>data 1</td>
        <td>data 2</td>
        <td>data 3</td>
      </tr>
      <tr>
        <td>data 1</td>
        <td>data 2</td>
        <td>data 3</td>
      </tr>{" "}
      <tr>
        <td>data 1</td>
        <td>data 2</td>
        <td>data 3</td>
      </tr>{" "}
      <tr>
        <td>data 1</td>
        <td>data 2</td>
        <td>data 3</td>
      </tr>{" "}
      <tr>
        <td>data 1</td>
        <td>data 2</td>
        <td>data 3</td>
      </tr>{" "}
      <tr>
        <td>data 1</td>
        <td>data 2</td>
        <td>data 3</td>
      </tr>{" "}
      <tr>
        <td>data 1</td>
        <td>data 2</td>
        <td>data 3</td>
      </tr>{" "}
      <tr>
        <td>data 1</td>
        <td>data 2</td>
        <td>data 3</td>
      </tr>{" "}
      <tr>
        <td>data 1</td>
        <td>data 2</td>
        <td>data 3</td>
      </tr>{" "}
      <tr>
        <td>data 1</td>
        <td>data 2</td>
        <td>data 3</td>
      </tr>{" "}
      <tr>
        <td>data 1</td>
        <td>data 2</td>
        <td>data 3</td>
      </tr>{" "}
      <tr>
        <td>data 1</td>
        <td>data 2</td>
        <td>data 3</td>
      </tr>{" "}
      <tr>
        <td>data 1</td>
        <td>data 2</td>
        <td>data 3</td>
      </tr>{" "}
      <tr>
        <td>data 1</td>
        <td>data 2</td>
        <td>data 3</td>
      </tr>{" "}
      <tr>
        <td>data 1</td>
        <td>data 2</td>
        <td>data 3</td>
      </tr>{" "}
    </tbody>
  </table>
));

const onClickHandler = (e) => {
  e.preventDefault();
  console.log("onClickHandler");
};

const App = React.forwardRef(() => {
  const componentRef = useRef();
  return (
    <div>
      <form
        style={{ marginLeft: "auto" }}
        ref={componentRef}
        onSubmit={onClickHandler}
      >
        Name : <input type="text" /> <br />
        Email: <input type="email" /> <br />
        Password: <input type="password" /> <br />
        Name : <input type="text" /> <br />
        Email: <input type="email" /> <br />
        Password: <input type="password" /> <br />
        Name : <input type="text" /> <br />
        Email: <input type="email" /> <br />
        Password: <input type="password" /> <br />
        Name : <input type="text" /> <br />
        Email: <input type="email" /> <br />
        Password: <input type="password" /> <br />
        Name : <input type="text" /> <br />
        Email: <input type="email" /> <br />
        Password: <input type="password" /> <br />
        Name : <input type="text" /> <br />
        Email: <input type="email" /> <br />
        Password: <input type="password" /> <br />
        Name : <input type="text" /> <br />
        Email: <input type="email" /> <br />
        Password: <input type="password" /> <br />
        Name : <input type="text" /> <br />
        Email: <input type="email" /> <br />
        Password: <input type="password" /> <br />
        Name : <input type="text" /> <br />
        Email: <input type="email" /> <br />
        Password: <input type="password" /> <br />
        Name : <input type="text" /> <br />
        Email: <input type="email" /> <br />
        Password: <input type="password" /> <br />
        Name : <input type="text" /> <br />
        Email: <input type="email" /> <br />
        Password: <input type="password" /> <br />
        Name : <input type="text" /> <br />
        Email: <input type="email" /> <br />
        Password: <input type="password" /> <br />
        <ReactToPrint
          trigger={() => <button type="submit">Print this out!</button>}
          content={() => componentRef.current}
        />
      </form>

      {/* <ComponentToPrint ref={componentRef} /> */}
    </div>
  );
});

export default App;
