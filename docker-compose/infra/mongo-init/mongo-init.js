db.createUser(
        {
            user: "soccer-backend",
            pwd: "soccer-backend",
            roles: [
                {
                    role: "readWrite",
                    db: "soccer"
                }
            ]
        }
);