# ENDPOINT
> 📝Note: ketika menjalankan docker container pastikan menggunakan `-p[port:port]` atau edit Dockerfile dan tambah `expose`

**BASE_URL:** `https://assignment-microservice.haikalgakbar.my.id/`

| **Name** | **Method** | **Endpoint** |
| ------------- | ------------- | ------------- |
| [Register](#register) | `POST` | `{{BASE_URL}}/auth/register` |
| [Login](#login) | `POST` | `{{BASE_URL}}/auth/login` |
| [Reset password](#logout) | `POST` | `{{BASE_URL}}/auth/reset` |

## Register
<details open>
<summary> Request Body </summary>

| **Name** | **Value** | |
| ------------- | ------------- | ------------- |
| email | `String` | `required` |
| username | `String` | `required` |
| password | `String` | `required` |
</details>

<details open>
<summary> Example Request Body </summary>

```JSON
{
  "username": "testfromauth",
  "email": "test@auth.com",
  "password": "123",
  "first_name": "test",
  "last_name": "from auth",
  "bio": "test"
}
```
</details>

<details open>
<summary> Response </summary>

```JSON
{
  "message": "User created."
}
```


| **Type** | **Status Code** | **Message** |
| ------------- | ------------- | ------------- |
| `Success` | `201` | `User created.` |
| `Error in client` | `400` | `Invalid data.` |
| `Error in server` | `500` | `Error from server.` |
</details>

## Login
<details open>
<summary> Request Body </summary>

| **Name** | **Value** | |
| ------------- | ------------- | ------------- |
| email | `String` | `required` |
| password | `String` | `required` |
</details>

<details open>
<summary> Example Request Body </summary>

```JSON
{
  "email": "user1@mail.com",
  "password": "123"
}
```
</details>

<details open>
<summary> Response </summary>

```JSON
{
  "message": "Login success.",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjY1NGUwMGM4YzQwNWExOWVlZDk3NmUiLCJ1c2VybmFtZSI6InRlc3Rmcm9tYXV0aCIsImVtYWlsIjoidGVzdEBhdXRoLmNvbSIsImZpcnN0X25hbWUiOiJ0ZXN0IiwibGFzdF9uYW1lIjoiZnJvbSBhdXRoIiwiaWF0IjoxNzE3OTI1MzU3fQ.BWgE3kf7lh6LVYHJdU4DknEP8Iz8uZJrKykUZcHXAW0",
  "data": {
    "_id": "66654e00c8c405a19eed976e",
    "username": "testfromauth",
    "email": "test@auth.com",
    "first_name": "test",
    "last_name": "from auth"
  }
}
```


| **Type** | **Status Code** | **Message** |
| ------------- | ------------- | ------------- |
| `Success` | `201` | `Login success.` |
| `Error in client` | `400` | `Invalid data.` |
| `Error in server` | `500` | `Error from server.` |
</details>

## Reset
<details open>
<summary> Request Body </summary>

| **Name** | **Value** | |
| ------------- | ------------- | ------------- |
| email | `String` | `required` |
| new_password | `String` | `required` |
</details>

<details open>
<summary> Example Request Body </summary>

```JSON
{
  "email": "test@auth.com",
  "old_password": "123",
  "new_password": "456"
}
```
</details>

<details open>
<summary> Response </summary>

```JSON
{
  "message": "Password changed"
}
```

| **Type** | **Status Code** | **Message** |
| ------------- | ------------- | ------------- |
| `Success` | `201` | `Password changed.` |
| `Error in client` | `400` | `Invalid data.` |
| `Error in server` | `500` | `Error from server.` |
</details>