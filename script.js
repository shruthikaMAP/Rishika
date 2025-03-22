
function registerUser() {
    let user = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        registerNumber: document.getElementById('registerNumber').value,
        phone: document.getElementById('phone').value,
        location: document.getElementById('location').value
    };
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful!');
}

function markAttendance() {
    let name = document.getElementById('studentName').value;
    if (name.trim() === '') {
        alert('Please enter your name.');
        return;
    }
    let time = new Date().toLocaleString();
    let attendance = JSON.parse(localStorage.getItem('attendance')) || [];
    attendance.push({ name, time, status: 'Present' });
    localStorage.setItem('attendance', JSON.stringify(attendance));
    alert('Attendance marked successfully!');
    document.getElementById('studentName').value = '';
}

function showAttendance() {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let attendance = JSON.parse(localStorage.getItem('attendance')) || [];
    let table = document.getElementById('attendanceTable');
    table.innerHTML = '<tr><th>Name</th><th>Time</th><th>Status</th></tr>';
    users.forEach(user => {
        let record = attendance.find(a => a.name === user.name);
        let row = table.insertRow();
        row.insertCell(0).innerText = user.name;
        row.insertCell(1).innerText = record ? record.time : 'Absent';
        row.insertCell(2).innerText = record ? record.status : 'Absent';
        if (!record) sendEmail(user.email);
    });
}

function sendEmail(email) {
    console.log(`Sending email to ${email} requesting absence reason...`);
    alert(`Email sent to ${email} requesting absence reason.`);
}
