<?php
session_start();

// Connect to SQLite
$db = new SQLite3('users.db');

// Get POST data
$email = $_POST['email'];
$password = $_POST['password'];

// Find user by email
$stmt = $db->prepare("SELECT * FROM users WHERE email = :email LIMIT 1");
$stmt->bindValue(':email', $email, SQLITE3_TEXT);
$result = $stmt->execute();
$user = $result->fetchArray(SQLITE3_ASSOC);

// Validate
if ($user && password_verify($password, $user['password'])) {
    $_SESSION['user_id'] = $user['id'];
    $_SESSION['email'] = $user['email'];
    echo "<script>alert('Login successful!'); window.location.href='dashboard.php';</script>";
} else {
    echo "<script>alert('Invalid email or password!'); window.location.href='login.html';</script>";
}
?>
