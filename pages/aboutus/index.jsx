import Link from "next/link";

const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },
  { id: 2, name: "Vaibhav", role: "Backend Developer" },
  { id: 3, name: "Suresh", role: "Frontend Developer" },
];

const developer = () => {
  return (
    <div>
      <h1>developers</h1>
      <ul>
        {details.map((developer) => (
          <li key={developer.id}>
            <Link href={`/aboutus/${developer.id}`}>
              {developer.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default developer;
