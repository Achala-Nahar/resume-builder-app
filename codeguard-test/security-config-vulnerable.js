// CodeGuard Security Configuration test fixture.
// Vulnerable cases below are intentional test cases.

// CONFIG-001 + CONFIG-002
app.use(
  cors({
    origin: "*",
    credentials: true,
  }),
);

// CONFIG-003
res.cookie("session", token, {
  httpOnly: false,
});

// CONFIG-004
res.cookie("session", token, {
  secure: false,
});

// CONFIG-005
const client = new https.Agent({
  rejectUnauthorized: false,
});

// Safe configurations that should NOT be reported.

app.use(
  cors({
    origin: "https://example.com",
    credentials: true,
  }),
);

res.cookie("secureSession", token, {
  httpOnly: true,
  secure: true,
  sameSite: "strict",
});

const secureClient = new https.Agent({
  rejectUnauthorized: true,
});
