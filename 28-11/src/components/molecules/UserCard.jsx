import Avatar from "../atoms/Avatar";
import Badge from "../atoms/Badge";
import Button from "../atoms/Button";

function UserCard({ user, onFollow, isFollowing }) {
  console.log(`UserCard: ${user.name}`);

  const { avatar, name, username, bio, followers, following, isVerified } = user;
  return (
    <div className="user-card">
      <div className="user-header">
        <Avatar src={avatar} alt={name} size="large" />
        <div className="user-info">
          <h3>{name}</h3>
          <p>@{username}</p>
          {isVerified && <Badge text="Verificato" type="success" />}
        </div>
      </div>

      <p className="user-bio">{bio}</p>

      <div className="user-stats">
        <span>
          <strong>{followers}</strong> follower
        </span>
        <span>
          <strong>{following}</strong> seguiti
        </span>
      </div>

      <div className="user-actions">
        <Button variant={isFollowing ? "secondary" : "primary"} onClick={onFollow}>
          {isFollowing ? "Smetti di seguire" : "Segui"}
        </Button>
        <Button variant="outline">Messaggio</Button>
      </div>
    </div>
  );
}
export default UserCard;
