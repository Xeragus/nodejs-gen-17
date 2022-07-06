function updateUser(userId) {
    console.log(userId);
    const form = document.getElementById('form');

    const user = {
        name: form.name.value,
        lastname: form.lastname.value,
        ssn: form.ssn.value,
        email: form.email.value
    };

    console.log(user);
}

