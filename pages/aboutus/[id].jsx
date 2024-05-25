import { useRouter } from 'next/router';

// Sample data
const details = [
  { id: 1, name: 'Yash', role: 'Senior Developer' },
  { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
  { id: 3, name: 'Suresh', role: 'Frontend Developer' }
];

const Developer = () => {
  const router = useRouter();
  const { id } = router.query;

  const developer = details.find(dev => dev.id === parseInt(id));

  if (!developer) {
    return <p>Developer doesn't exist</p>;
  }

  return (
    <div>
      <h5>{developer.name}</h5>
      <p>{developer.role}</p>
    </div>
  );
};

export default Developer;