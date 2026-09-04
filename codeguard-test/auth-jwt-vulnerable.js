// CodeGuard Auth/JWT security test fixture.
// All vulnerabilities below are intentional test cases.

const payload = jwt.decode(token);

const decoded = jwt.verify(token, secret, {
  algorithms: ["none"],
});

const jwtSecret = "my-super-secret-key-123456";
