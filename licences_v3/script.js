async function checkStatus() {
    const id = document.getElementById('employeeId').value;
    const resultDiv = document.getElementById('result');
    
    if (!id) {
        resultDiv.textContent = "Пожалуйста, введите ID.";
        return;
    }

    resultDiv.textContent = "Загрузка...";
    
    // ВСТАВЬТЕ ВАШ URL ИЗ GOOGLE APPS SCRIPT ВМЕСТО ЭТОЙ ССЫЛКИ
    const SCRIPT_URL = "https://google.com";

    try {
        const response = await fetch(`${SCRIPT_URL}?id=${id}`);
        const data = await response.text();
        resultDiv.textContent = `Статус прав: ${data}`;
    } catch (error) {
        resultDiv.textContent = "Ошибка при подключении к базе данных.";
    }
}