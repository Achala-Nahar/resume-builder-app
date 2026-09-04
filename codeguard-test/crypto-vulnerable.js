// CodeGuard Cryptography security test fixture.
// Vulnerable cases are intentional test cases.

const md5Hash = crypto.createHash("md5").update(password).digest("hex");

const sha1Hash = crypto.createHash("sha1").update(data).digest("hex");

const desCipher = crypto.createCipheriv("des", key, iv);

const ecbCipher = crypto.createCipheriv("aes-256-ecb", key, null);

const rc4Cipher = crypto.createCipheriv("rc4", key, iv);

const token = Math.random().toString(36).substring(2);

// Safe cases that should NOT be reported.

const strongHash = crypto.createHash("sha256").update(data).digest("hex");

const secureToken = crypto.randomBytes(32).toString("hex");

const randomPosition = Math.random() * canvas.width;
