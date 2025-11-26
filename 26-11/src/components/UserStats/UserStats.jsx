function UserStats({ user }) {
  const isAdult = user.age >= 18;
  const emailDomain = user.email.split("@")[1];
  return (
    <div>
      <h3>Stats</h3>
      <p>Adult: {isAdult ? "Yes" : "No"}</p>
      <p>Email Domain: {emailDomain}</p>
    </div>
  );
}

export default UserStats;
