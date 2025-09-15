<?php
// Connect to SQLite
$db = new SQLite3('users.db');

// Get POST data
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$email = $_POST['email'];
$password = $_POST['password'];
$confirmPassword = $_POST['confirmPassword'];

// Validate
if ($password !== $confirmPassword) {
    die("Passwords do not match!");
}

// Hash password
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

// Insert user
$stmt = $db->prepare("INSERT INTO users (first_name, last_name, email, password) VALUES (:firstName, :lastName, :email, :password)");
$stmt->bindValue(':firstName', $firstName, SQLITE3_TEXT);
$stmt->bindValue(':lastName', $lastName, SQLITE3_TEXT);
$stmt->bindValue(':email', $email, SQLITE3_TEXT);
$stmt->bindValue(':password', $hashedPassword, SQLITE3_TEXT);

try {
    $stmt->execute();
    echo "<script>alert('Account created successfully!'); window.location.href='login.html';</script>";
} catch (Exception $e) {
    echo "<script>alert('Error: Email already exists!'); window.location.href='signup.html';</script>";
}
?>
