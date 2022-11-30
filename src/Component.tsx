import { useEffect, useState } from "react";

interface IProps {
  name: string;
  email?: string;
  children?: React.ReactNode;
}

interface User {
  name: string;
  email: string;
}

const Component = ({ name, email = "test@example.com", children }: IProps) => {
  const [count, setCount] = useState(1);
  const [user, setUser] = useState<User>({} as User);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = (await res.json()) as User[];
      setUsers(data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const data = (await res.json()) as User;
      setUser(data);
    })();
  }, []);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(event.target.value);
  };

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  // };

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(event.target.value);
  // };

  return (
    <div>
      {children}
      <p>
        {name} - {email}
      </p>
      <p>{user.email}</p>
      <span>{count}</span>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      {users.map((user) => (
        <li>{user.name}</li>
      ))}
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Component;
