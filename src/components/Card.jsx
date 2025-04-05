export default function Card({ post }) {
    return (
      <div style={{ border: '1px solid #ccc', margin: 10, padding: 10 }}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    );
  }