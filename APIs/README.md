## API Reference

### Mental Health Assessment API

```
 localhost:3008/api/v1/assessment
```

#### method - `POST`

| Parameter     | Type     | Description                     |
| :------------ | :------- | :------------------------------ |
| `textContent` | `string` | **Required**. only text content |

### Self-Help-Article API

```
 localhost:3008/api/v1/self-help
```

#### method - `get`

| Parameter | Type   | Description                         |
| :-------- | :----- | :---------------------------------- |
| `null`    | `null` | **Required**. No Parameter Required |

### Content Moderation API

```
 localhost:3008/api/v1/contentmoderation
```

#### method - `get`

| Parameter | Type   | Description                         |
| :-------- | :----- | :---------------------------------- |
| `textContent`    | `String` | **Required**. Parameter textContent to check Moderation of content |

