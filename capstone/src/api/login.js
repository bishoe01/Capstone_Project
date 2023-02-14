export default async function getJWT() {
    const body = { username: "test1", password: "test" };
    const response = await fetch("http://c4ec-218-37-109-50.jp.ngrok.io/api/user/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    }).catch((error) => {
        console.error('Error:', error);
    });
    console.log(response);
}

