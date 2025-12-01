import { useState } from "react";

function NotificationBell() {
  const [notifications, setNotifications] = useState(3);
  return (
    <div>
      <h2>🔔 Notifiche</h2>

      {/* Mostra il numero solo se ci sono notifiche */}
      {notifications > 0 && (
        <span
          style={{
            backgroundColor: "red",
            color: "white",
            borderRadius: "50%",
            padding: "5px 10px",
          }}
        >
          {notifications}
        </span>
      )}

      {/* Mostra messaggio solo se NON ci sono notifiche */}
      {notifications === 0 && <p>Nessuna notifica 🎉</p>}

      <button onClick={() => setNotifications(notifications - 1)}>Leggi una notifica</button>
    </div>
  );
}

export default NotificationBell;
