# ENDPOINT
base url: `https://assignment-microservice.haikalgakbar.my.id/`

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
  "email": "haikal@mail.com",
  "user_name": "haikalgakbar",
  "password": "123",
}
```
</details>

<details open>
<summary> Response </summary>

```JSON
{
  "message": "User created",
  "data": {
    "_id": 1,
    "username": "haikalgakbar",
    "password": "123",
    "email": "haikal@mail.com",
    "created_at": "2024-06-06T05:19:48.271Z",
    "updated_at": "2024-06-06T05:19:48.271Z",
    "first_name": "John",
    "last_name": "Doe",
    "bio": "I am user1",
    "payment_details": "123456789"
  }
}
```


| **Type** | **Status Code** | **Message** |
| ------------- | ------------- | ------------- |
| `Success` | `201` | `Add new user success.` |
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
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjEsInVzZXJuYW1lIjoidXNlcjEiLCJlbWFpbCI6InVzZXIxQG1haWwuY29tIiwiZmlyc3RfbmFtZSI6IkpvaG4iLCJsYXN0X25hbWUiOiJEb2UiLCJpYXQiOjE3MTc2NTM0ODV9.ypgQmEVc3pkWVZgdvzu8SpOtUjAKuorbJOSCVM-Mt_w"
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
  "email": "user1@mail.com",
  "new_password": "456"
}
```
</details>

<details open>
<summary> Response </summary>

```JSON
{
  "message": "Password changed",
  "data": {
    "_id": 1,
    "username": "user1",
    "password": "456",
    "email": "user1@mail.com",
    "created_at": "2024-06-06T05:41:07.948Z",
    "updated_at": "2024-06-06T05:41:07.948Z",
    "first_name": "John",
    "last_name": "Doe",
    "bio": "I am user1",
    "payment_details": "123456789"
  }
}
```

| **Type** | **Status Code** | **Message** |
| ------------- | ------------- | ------------- |
| `Success` | `201` | `Password changed.` |
| `Error in client` | `400` | `Invalid data.` |
| `Error in server` | `500` | `Error from server.` |
</details>