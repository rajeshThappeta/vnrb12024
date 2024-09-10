import { useState, useEffect } from "react";

function Posts() {
  let [posts, setPosts] = useState([]);
  let [err, setErr] = useState(null);

  useEffect(() => {
    //make API req(effect)
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((postsList) => setPosts(postsList))
      .catch((e) => {
        setErr(e);
      });
  }, []);

  console.log("e is ", err);

  return (
    <div>
      <h1 className="display-2 text-warning">Posts</h1>
      {/* if error occurred */}
      {err !== null && <p className="text-danger display-3">{err.message}</p>}

      {/* if no error but length of array is zoro */}
      {err === null && posts.length === 0 && (
        <div className="spinner-border text-warning mt-5 display-1"></div>
      )}

      {/* no error and list is non-empty */}
      {err === null && posts.length !== 0 && (
        <table className="table">
          <thead>
            <tr>
              <th>UserID</th>
              <th>ID</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((postObj) => (
              <tr key={postObj.id}>
                <td>{postObj.userId}</td>
                <td>{postObj.id}</td>
                <td>{postObj.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Posts;

//   condition ? react element-1 : react element-2 (if-else)

//  condition && react element  (if)
