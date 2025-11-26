function UserProfile({ user, onUpdateUser }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.age}</p>
      <button onClick={() => onUpdateUser({ ...user, age: user.age + 1 })}>Aggiungi</button>
    </div>
  );
}

export default UserProfile;
